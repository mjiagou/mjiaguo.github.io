import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true, // 启用最后更新时间
  title: "刺猬出海",
  description: "刺猬出海工具推荐",
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    logo: '/logo.png', // 相对于 .vitepress/public 的路径
    siteTitle: '刺猬出海', // 可选：站点标题，显示在 logo 旁边

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '试用机场', link: '#' },
      { text: 'VPN', link: '/vpn' },
      { text: '免费机场', link: '/free-airport' },
      { text: '付费机场', link: '/paid-airport' },
      { text: '代理软件', link: '/software' },
      { text: '博客', link: '/blog/' },
      { text: '导航', link: '/nav/' },
    ],

    sidebar: [
      {
        text: '试用机场1',
        items: [
          { text: '试用机场1-1', link: '/try-airport/try.html' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: '试用机场2',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    search: {
      provider: 'local'
    }
  }
})
