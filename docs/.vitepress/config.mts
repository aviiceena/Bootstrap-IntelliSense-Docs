import { defineConfig } from 'vitepress';
import { meta } from './constants';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
  title: meta.name,
  description: meta.description,
  titleTemplate: '%s | ' + meta.name,
  head: [
    ['link', { rel: 'icon', href: '/bootstrap_Intellisense-logo.png' }], // Add this line; place favicon.ico in the public folder
    [
      'script',
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-46458603373970281',
        crossorigin: 'anonymous',
      },
    ],
  ],
  lang: 'en-US',
  lastUpdated: false,
  cleanUrls: true,
  appearance: true,
  srcExclude: ['README.md', 'single-page'],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: meta.hostname,
  },

  themeConfig: {
    footer: {
      message: 'Made with ❤',
      copyright: `© ${new Date().getFullYear()} Hossain Hosain`,
    },
    editLink: {
      pattern: `${meta.githubLink}/edit/main/docs/:path`,
      text: '📝 Edit this page',
    },
    outline: 'deep',
    logo: {
      src: '/bootstrap_Intellisense-logo.png',
      alt: 'Bootstrap IntelliSense Logo',
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '🛒 View on Marketplace',
        link: meta.marketplaceLink,
      },
      {
        text: `v${meta.version}`,
        link: meta.releasesLink,
      },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Start', link: '/guide/quick-start' },
          { text: 'Configuration & Features', link: '/guide/configuration-features' },
        ],
      },
      {
        text: 'Help & Support',
        items: [{ text: 'Contributing', link: '/contributing' }],
      },
    ],
    socialLinks: [{ icon: 'github', link: meta.githubLink }],
  },
});
