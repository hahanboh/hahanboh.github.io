# 柏涵

这是柏涵的个人网站，用来记录英语学习笔记、学习内容、研究成果和项目实践。

网站基于 Astro 搭建，通过 GitHub Pages 发布。

网站地址：

```text
https://hahanboh.github.io/
```

## 现在先做什么

当前重点是先把英语笔记整理上来。

建议流程：

1. 从 Obsidian 里挑一篇想公开整理的笔记。
2. 在网站里为这篇笔记新建一个文件夹。
3. 把正文放进 `index.md`。
4. 把这篇笔记用到的图片放在同一个文件夹里。
5. 检查标题、简介、标签和图片路径。
6. 用 GitHub Desktop 提交并推送。

## 英语笔记放在哪里

学习笔记放在：

```text
src/content/writing
```

推荐一篇笔记一个文件夹，例如：

```text
src/content/writing/
└─ english-grammar-tense/
   ├─ index.md
   ├─ timeline.png
   └─ example-sentence.png
```

这里的意思是：

- `english-grammar-tense` 是这篇笔记的文件夹名
- `index.md` 是正文
- `timeline.png` 和 `example-sentence.png` 是这篇笔记用到的图片

文件夹名建议用英文小写，单词之间用 `-` 连接。

## 英语笔记模板

模板文件在：

```text
docs/templates/english-note-template.md
```

使用方法：

1. 复制这个模板文件。
2. 放到新的笔记文件夹里。
3. 改名为 `index.md`。
4. 把里面的示例文字替换成你的内容。

## 图片怎么放

图片放在对应笔记文件夹里，和 `index.md` 放在一起。

例如：

```text
src/content/writing/english-grammar-tense/
├─ index.md
└─ tense-table.png
```

文章里这样引用：

```md
![时态表格](./tense-table.png)
```

不要直接使用 Obsidian 的图片写法：

```md
![[tense-table.png]]
```

这个网站暂时不识别 Obsidian 的双中括号图片链接。之后如果笔记多了，可以再做批量转换。

## Obsidian 笔记怎么同步

不要一开始把整个 Obsidian 仓库都上传。

推荐做法是：

```text
Obsidian 负责日常记录
网站只放整理后准备公开的版本
```

你可以在 Obsidian 里建一个文件夹，例如：

```text
准备发布
```

只有这个文件夹里的笔记才复制到网站。

这样可以避免把草稿、私人内容、没整理完的链接一起发布出去。

## 常用修改位置

### 修改首页

首页文件在：

```text
src/pages/index.astro
```

如果想改首页文字、按钮或内容区块，优先改这个文件。

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
