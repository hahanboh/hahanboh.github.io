const siteOrigin = (import.meta.env.SITE_URL ?? 'https://example.org').replace(/\/$/, '');
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const siteUrl = `${siteOrigin}${basePath}`;

export const site = {
  name: '个人学习博客',
  title: '个人学习博客 · 学习笔记、研究成果与象棋学习',
  description: '记录学习内容、研究成果，并逐步建设在线象棋学习内容的个人网站。',
  url: siteUrl,
  author: {
    name: 'hahanboh',
    bio: '持续整理学习笔记、研究方向、项目成果和象棋学习思考。',
    email: '',
  },
  locale: 'zh-cn',
  locales: ['zh-cn', 'en'] as const,
  writingPageSize: 8,
  tagIndexThreshold: 1,
  license: {
    name: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
  social: [
    { label: 'GitHub', href: 'https://github.com/hahanboh' },
  ] as Array<{ label: string; href: string }>,
  features: {
    search: true,
    favorites: true,
    theme: true,
    rss: true,
    share: true,
    tips: false,
    newsletter: false,
    comments: false,
  },
} as const;

export type Locale = (typeof site.locales)[number];
