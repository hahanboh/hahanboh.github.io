const siteOrigin = (import.meta.env.SITE_URL ?? 'https://example.org').replace(/\/$/, '');
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const siteUrl = `${siteOrigin}${basePath}`;

export const site = {
  name: '柏涵',
  title: '柏涵 · 英语笔记、学习记录与研究成果',
  description: '记录英语学习笔记、学习内容、研究成果和项目实践的个人网站。',
  url: siteUrl,
  author: {
    name: '柏涵',
    bio: '持续整理英语笔记、学习记录、研究方向和项目成果。',
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
