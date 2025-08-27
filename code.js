figma.showUI(__html__, { width: 300, height: 450 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'apply-layout') {
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
      figma.notify('Please select at least one frame or image.');
      return;
    }

    // Filter for frames and images
    const validNodes = selection.filter(node => 
      node.type === 'FRAME' || node.type === 'GROUP' || node.type === 'RECTANGLE' || node.type === 'COMPONENT' || node.type === 'INSTANCE' || node.type === 'TEXT'
    );

    if (validNodes.length === 0) {
      figma.notify('Please select frames, groups, components, instances, rectangles, or text elements.');
      return;
    }

    // Perform layout
    performWaterfallLayout(validNodes, msg.settings);
    
    // Send a message back to UI to indicate layout is done
    figma.ui.postMessage({ type: 'layout-complete' });
  }
};

function performWaterfallLayout(nodes, settings) {
  const { columnCount, horizontalGutter, verticalGutter, alignment } = settings;

  // Shuffle nodes for random arrangement
  shuffleArray(nodes);

  // Calculate layout dimensions
  let cols;
  if (columnCount === 'auto' || isNaN(columnCount)) {
    // Auto column logic based on node average width
    const totalWidth = nodes.reduce((sum, node) => sum + node.width, 0);
    const avgWidth = totalWidth / nodes.length;
    // Estimate canvas width based on first node position and average width
    const estimatedCanvasWidth = Math.min(1200, avgWidth * 6); // Cap at reasonable width
    cols = Math.max(1, Math.floor((estimatedCanvasWidth - horizontalGutter) / (avgWidth + horizontalGutter)));
    // Limit auto columns to a reasonable range
    cols = Math.min(cols, 12);
  } else {
    cols = Math.max(1, Math.min(12, Math.floor(columnCount))); // Limit between 1 and 12
  }

  // Initialize columns array to track Y positions
  const columnHeights = new Array(cols).fill(0);
  const columnXPositions = [];

  // Calculate column width based on average node width
  const totalWidth = nodes.reduce((sum, node) => sum + node.width, 0);
  const avgWidth = totalWidth / nodes.length;
  const columnWidth = avgWidth;

  // Determine starting X position based on the first node
  const startX = nodes.reduce((minX, node) => Math.min(minX, node.x), Infinity);
  for (let i = 0; i < cols; i++) {
    columnXPositions.push(startX + i * (columnWidth + horizontalGutter));
  }

  // Sort nodes by height descending for better packing (optional)
  if (alignment === 'height') {
    nodes.sort((a, b) => b.height - a.height);
  }

  // Place nodes
  nodes.forEach(node => {
    // Find the column with the minimum height
    let columnIndex = 0;
    let minY = columnHeights[0];
    for (let i = 1; i < cols; i++) {
      if (columnHeights[i] < minY) {
        minY = columnHeights[i];
        columnIndex = i;
      }
    }

    // Calculate new position
    const newX = columnXPositions[columnIndex];
    const newY = minY;

    // Apply position
    node.x = newX;
    node.y = newY;

    // Update column height
    columnHeights[columnIndex] = newY + node.height + verticalGutter;
  });
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}