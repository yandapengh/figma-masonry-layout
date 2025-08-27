# 🧱 Figma Masonry Layout | Figma瀑布流布局插件

> 📑 *"Why spend hours arranging layouts when you can spend minutes being creative?"*  
> 📑 *"为什么要花几个小时排版，而不是几分钟就搞定呢？"*

## 🎯 What's This? | 这是什么？

A Figma plugin that automatically arranges your frames, images, and components in a beautiful masonry (waterfall) layout. No more manual dragging, no more alignment headaches, no more "Can you move this one pixel to the left?" moments.

一个能够自动将你的框架、图片和组件排列成漂亮瀑布流布局的Figma插件。再也不用手动拖拽，再也不用为对齐头疼，再也不用听到"能把这个往左移一个像素吗？"这种话了。

## 🔥 The Problem | 痛点

Picture this: It's Monday morning. You're preparing your monthly design review. You have 20+ beautiful designs from your team, and your boss wants them in a "waterfall layout" for the presentation. 

You start dragging... and dragging... and dragging some more. Two hours later, you're questioning your life choices and wondering if you should have become a farmer instead.

想象一下：周一早上，你在准备月度设计汇报。你有20多个团队做的漂亮设计，老板要求用"瀑布流布局"来展示。

你开始拖拽...继续拖拽...再拖拽...两小时后，你开始质疑人生选择，想着是不是应该去种田算了。

Then your boss says: *"Actually, can you remove these 3 designs and add these 5 new ones?"*

然后老板说：*"其实，你能把这3个设计删掉，再加上这5个新的吗？"*

💀 **RIP your afternoon** | **下午时光，卒**

## ✨ The Solution | 解决方案

This plugin is your new best friend! It automatically arranges selected elements into a perfect masonry layout faster than you can say "design system".

这个插件就是你的新好朋友！它能自动将选中的元素排列成完美的瀑布流布局，速度比你说"设计系统"还快。

### 🚀 Features | 功能特色

- **🤖 Smart Auto-Columns**: Automatically calculates the optimal number of columns | **智能自动分列**：自动计算最佳列数
- **📏 Custom Spacing**: Adjust horizontal and vertical gutters to your heart's content | **自定义间距**：随心调整水平和垂直间距
- **🎲 Randomized Arrangement**: Shuffles elements for natural, organic layouts | **随机排列**：打乱元素顺序，创造自然有机的布局
- **⚡ Lightning Fast**: Processes dozens of elements in seconds | **闪电般快速**：几秒钟处理几十个元素
- **🎨 Multiple Node Types**: Works with frames, groups, components, instances, rectangles, and text | **多种节点类型**：支持框架、组、组件、实例、矩形和文本

## 🛠️ How to Use | 使用方法

### Installation | 安装

1. Download the plugin files | 下载插件文件
2. In Figma, go to `Plugins` → `Development` → `Import plugin from manifest...` | 在Figma中，前往 `插件` → `开发` → `从manifest导入插件...`
3. Select the `manifest.json` file | 选择 `manifest.json` 文件
4. You're ready to rock! | 准备开始创作！

### Usage | 使用步骤

1. **Select Elements** | **选择元素**
   - Select the frames, images, or components you want to arrange | 选择你想要排列的框架、图片或组件
   - The plugin works with any rectangular elements | 插件适用于任何矩形元素

2. **Open Plugin** | **打开插件**
   - Find "Masonry Layout" in your plugins menu | 在插件菜单中找到"Masonry Layout"
   - The sleek UI will appear | 简洁的界面会出现

3. **Configure Settings** | **配置设置**
   - **Columns | 列数**: Choose "Auto" (recommended) or set a fixed number (1-12) | 选择"自动"（推荐）或设置固定数字（1-12）
   - **Horizontal Spacing | 水平间距**: Space between columns in pixels | 列之间的像素间距
   - **Vertical Spacing | 垂直间距**: Space between rows in pixels | 行之间的像素间距
   - **Alignment | 对齐方式**: Top-aligned or height-optimized arrangement | 顶部对齐或高度优化排列

4. **Apply Magic** | **应用魔法**
   - Click "Apply Layout" | 点击"应用布局"
   - Watch in awe as your elements perfectly arrange themselves | 惊叹地看着你的元素完美地自动排列

## 🎮 Pro Tips | 专业技巧

- **🎯 Selection Matters**: Select elements in the order you want them prioritized | **选择很重要**：按你想要的优先级顺序选择元素
- **📐 Auto-Column Magic**: The plugin analyzes your elements' average width to determine optimal columns | **自动列数魔法**：插件分析元素的平均宽度来确定最佳列数
- **🔄 Randomization**: Elements are shuffled for a more natural, Pinterest-like feel | **随机化**：元素会被打乱以获得更自然的Pinterest风格感觉
- **⚡ Bulk Operations**: Select dozens of elements at once - the plugin handles it like a champ | **批量操作**：一次选择几十个元素 - 插件轻松搞定

## 🤔 FAQ | 常见问题

**Q: Can I undo the layout?** | **问：我能撤销布局吗？**  
A: Of course! Figma's undo (Ctrl/Cmd + Z) works perfectly. | 答：当然可以！Figma的撤销功能（Ctrl/Cmd + Z）完美适用。

**Q: What if I don't like the random arrangement?** | **问：如果我不喜欢随机排列怎么办？**  
A: Just run the plugin again! Each time gives you a different arrangement. | 答：再运行一次插件就行！每次都会给你不同的排列。

**Q: Does it work with locked elements?** | **问：它能处理锁定的元素吗？**  
A: The plugin respects Figma's selection, so unlock elements first. | 答：插件遵循Figma的选择规则，所以先解锁元素。

**Q: Can I use this for presentations?** | **问：我能用这个做演示吗？**  
A: That's literally why this plugin exists! Perfect for design reviews and showcases. | 答：这就是这个插件存在的原因！非常适合设计评审和展示。

## 🏗️ Technical Details | 技术细节

### File Structure | 文件结构
```
figma-masonry-layout/
├── manifest.json      # Plugin configuration | 插件配置
├── code.js           # Main plugin logic | 主要插件逻辑
├── ui.html           # User interface | 用户界面
└── README.md         # This beautiful documentation | 这份漂亮的文档
```

### Algorithm | 算法
The plugin uses a column-based masonry algorithm that:
- Analyzes element dimensions | 分析元素尺寸
- Calculates optimal column count | 计算最佳列数
- Places elements in the shortest column | 将元素放置在最短的列中
- Applies Fisher-Yates shuffle for randomization | 应用Fisher-Yates洗牌算法进行随机化

## 🤝 Contributing | 贡献

Found a bug? Want a feature? Have a brilliant idea? 

发现了bug？想要新功能？有绝妙的想法？

1. Open an issue | 提交Issue
2. Fork the repo | Fork仓库
3. Make your magic happen | 施展你的魔法
4. Submit a pull request | 提交Pull Request

## 📜 License | 许可证

MIT License - Feel free to use this in your own projects! | MIT许可证 - 随意在你的项目中使用！

## 🙏 Acknowledgments | 致谢

- To all the designers who suffer through manual layout arrangements | 致所有忍受手动布局排列痛苦的设计师们
- To Figma for making plugins possible | 致Figma让插件成为可能
- To coffee, the real MVP behind this code | 致咖啡，这些代码背后真正的MVP

---

**Made with ❤️ and a lot of ☕ by someone who was tired of moving rectangles around**

**由一个厌倦了移动矩形的人用❤️和大量☕制作**

*Now go forth and layout without fear!* | *现在去无所畏惧地布局吧！*