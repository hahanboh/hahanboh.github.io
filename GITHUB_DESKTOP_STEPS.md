# 用 GitHub Desktop 发布新仓库

这个目录是新的个人网站项目，不再使用旧的 Hugo 仓库。

本地路径：

```text
C:\Users\hahan\Documents\ChatGPT\个人网站
```

## 推荐仓库名

如果你想要主站域名：

```text
hahanboh.github.io
```

发布后地址通常是：

```text
https://hahanboh.github.io/
```

如果你想保留主站给别的用途，也可以用普通项目名，例如：

```text
personal-site
```

发布后地址通常是：

```text
https://hahanboh.github.io/personal-site/
```

## GitHub Desktop 操作

1. 打开 GitHub Desktop。
2. 选择 `File` -> `Add local repository...`。
3. 选择这个目录：`C:\Users\hahan\Documents\ChatGPT\个人网站`。
4. 确认当前分支是 `main`。
5. 点击 `Publish repository`。
6. 仓库名建议填 `hahanboh.github.io`。
7. 如果想公开访问，取消勾选 `Keep this code private`。
8. 发布后打开 GitHub 仓库页面。
9. 进入 `Settings` -> `Pages`。
10. 在 `Build and deployment` 中选择 `GitHub Actions`。
11. 回到 `Actions` 页面，等待 `Deploy to GitHub Pages` 工作流完成。

## 为什么选这个模板

这个项目基于 Astro Fourfold 模板，适合长期维护个人知识网站：

- Markdown/MDX 写作体验好
- 已内置写作、研究、项目、标签、搜索、RSS
- GitHub Pages 工作流已准备好
- 后续加象棋交互页面会比 Hugo 更灵活
