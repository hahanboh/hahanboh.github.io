# baihan

这是 baihan 的个人网站，用来记录学习笔记、研究成果、项目实践，以及之后可能会继续建设的象棋学习内容。

网站基于 Astro 搭建，通过 GitHub Pages 发布。以后可以慢慢添加文章、专题、研究记录，也可以继续扩展成交互式学习工具。

网站地址：

```text
https://hahanboh.github.io/
```

## 我可以修改什么

这个网站不是固定模板，后面可以随时改。

你可以修改：

- 首页的介绍文字
- 首页上的内容区块
- 网站名称和简介
- 顶部导航
- 学习笔记
- 研究成果
- 项目展示
- 象棋学习专题
- 网站颜色、字体和排版

## 常用修改位置

### 修改首页

首页文件在：

```text
src/pages/index.astro
```

如果想改首页上的文字、按钮、栏目、象棋学习区块，优先改这个文件。

首页里的 `focusAreas` 控制三个主要入口，比如“学习笔记”“研究成果”“象棋学习”。

如果想添加新的首页区块，也是在这个文件里添加新的 `<section>`。

### 修改网站名称和简介

网站基本信息在：

```text
src/data/site.ts
```

常改内容：

- `name`：网站名称
- `title`：浏览器标题
- `description`：网站简介
- `author.name`：作者名字
- `author.bio`：作者简介
- `social`：社交链接

### 修改顶部导航

导航菜单在：

```text
src/data/navigation.ts
```

如果想增加、删除或改名顶部菜单，就改这个文件。

### 添加学习笔记

学习笔记放在：

```text
src/content/writing
```

可以复制里面已有的 Markdown 文件，然后改标题、日期、简介和正文。

### 添加研究成果

研究内容放在：

```text
src/content/research
```

适合放论文阅读、研究问题、实验记录、阶段成果等内容。

### 添加项目展示

项目内容放在：

```text
src/content/projects
```

适合放自己的项目、代码作品、课程作业、研究工具等内容。

### 添加专题栏目

专题栏目放在：

```text
src/content/columns
```

以后象棋学习内容可以先放在这里。比如：

- 残局练习
- 开局整理
- 复盘笔记
- 杀法专题
- 棋理总结

## Obsidian 笔记能不能放进来

可以。

Obsidian 的笔记本质上也是 Markdown 文件，所以可以放进 `src/content/writing`。

不过建议先从几篇整理好的笔记开始，不要一上来导入整个 Obsidian 仓库。

网站文章一般需要在开头加一段信息，例如：

```md
---
title: "我的第一篇学习笔记"
description: "这篇笔记记录了我对某个主题的理解。"
publishedAt: 2026-08-31
tags: ["学习", "笔记"]
featured: false
draft: false
---

这里开始写正文。
```

如果 Obsidian 里有 `[[双链]]`，网站可能暂时不能直接识别。之后可以再做一个批量转换功能。

## 修改网站样式

首页自己的样式在：

```text
src/pages/index.astro
```

全站颜色在：

```text
src/styles/tokens.css
```

全站基础排版在：

```text
src/styles/global.css
```

如果只是改主页，通常只需要改 `src/pages/index.astro`。

如果想整体换颜色、字体、按钮风格，再改 `tokens.css` 和 `global.css`。

## 发布更新

修改完成后，用 GitHub Desktop 发布：

1. 打开 GitHub Desktop。
2. 选择这个仓库。
3. 查看左侧 Changes。
4. 在 Summary 里写一句更新说明。
5. 点击 Commit to main。
6. 点击 Push origin。
7. 等 GitHub Actions 自动部署完成。

部署完成后，打开：

```text
https://hahanboh.github.io/
```

## 模板来源

这个网站最初参考了 Astro Fourfold 模板：

```text
https://github.com/Liyuk/astro-fourfold
```

现在已经改成适合个人学习、研究记录和象棋学习方向的个人网站。
