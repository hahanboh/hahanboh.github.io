# 个人学习博客

这是一个基于 Astro Fourfold 模板改造的新个人网站项目，用来记录学习笔记、研究成果、项目进展，并逐步扩展象棋学习内容。

## 为什么选这个模板

Fourfold 比较适合这个目标，因为它已经内置：

- Markdown/MDX 写作
- 写作、研究、项目、专栏、标签、搜索、RSS
- 静态构建，适合 GitHub Pages
- GitHub Actions 自动部署流程
- 后续可加入 Astro 交互组件，适合扩展象棋学习工具

模板来源：<https://github.com/Liyuk/astro-fourfold>

## 本地路径

```text
C:\Users\hahan\Documents\ChatGPT\个人网站
```

## GitHub Desktop 发布

详细步骤见：

```text
GITHUB_DESKTOP_STEPS.md
```

推荐新仓库名：

```text
hahanboh.github.io
```

这样发布后的主站地址通常是：

```text
https://hahanboh.github.io/
```

## 关键目录

- `src/data/site.ts`：站点名称、简介、作者、功能开关
- `src/data/navigation.ts`：顶部导航
- `src/content/writing/`：学习笔记和文章
- `src/content/research/`：研究内容
- `src/content/projects/`：项目成果
- `src/content/columns/`：象棋学习等专题栏目
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动部署

## 后续工作

1. 用 GitHub Desktop 发布为新仓库。
2. 在 GitHub 仓库 `Settings` -> `Pages` 中选择 `GitHub Actions`。
3. 等待 Actions 自动部署完成。
4. 删除模板示例内容，替换成你的真实学习、研究和象棋内容。
5. 后续再加入象棋棋盘交互组件。
