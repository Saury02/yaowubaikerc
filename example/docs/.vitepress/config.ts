import type { SidebarOptions } from '@project-trans/vitepress-theme-project-trans/theme'
import type { ThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import type { DefaultTheme } from 'vitepress'
import genConfig from '@project-trans/vitepress-theme-project-trans/config'
import { withThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'

// 导航栏配置
const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '商店',
    link: '/store/'
  },
  {
    text: '条款',
    link: '/terms/'
  }
]

// 默认侧边栏配置
const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  collapsed: true,
  documentRootPath: '/docs',
} satisfies Partial<SidebarOptions>

// 侧边栏具体配置
const sidebarOptions = [
  {
    ...baseConfig,
    scanStartPath: 'store',
    resolvePath: '/store/',
    sortMenusByFrontmatterOrder: true,
  }
]

const themeConfig: ThemeContext = {
  siteTitle: 'RC商店',
  siteDescription: 'RC商店 提供各类优质产品。',
  githubRepoLink: 'https://github.com/Saury02/yaowubaikerc',
  siteLogo: '/public/logo.png', // 确保 logo 路径正确（需放在 docs/public 文件夹）
  rootDir: 'docs',
  include: ['store'], // 仅包含 store 目录的内容
  nav,
  sidebarOptions,
  enableSuggestionBox: false, // 
  HideReadingTime: true, 
  HideLastUpdated: true, 
  HideAuthors: true,
  // fontsBaseUrl: 'http://localhost:8788', // For local development with wrangler pages dev
  disclaimerPaths: [
    {
      path: '/zh-cn/',
      summaryHtml: 'Drug_artist 中的内容，仅供参考。可能存在过时或不准确的信息，请谨慎甄别。',
    },
  ],
  enableDisclaimer: true,
  disclaimerStatusKey: 'disclaimerStatus',

  // i18n
  locales: {
    root: {
      label: '中文',
      lang: 'zh',
      link: '/',
    }
  },
}

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, () => {
  return {
    ...genConfig(),
    outDir: '../dist',
    sitemap: {

    lastmodDateOnly: true
    },
  }
})
