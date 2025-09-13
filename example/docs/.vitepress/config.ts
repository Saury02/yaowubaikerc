import type { SidebarOptions } from '@project-trans/vitepress-theme-project-trans/theme'
import type { ThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import type { DefaultTheme } from 'vitepress'
import genConfig from '@project-trans/vitepress-theme-project-trans/config'
import { withThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'

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
  githubRepoLink: 'https://github.com/kazukokawagawa/drug_artist',
  siteLogo: '/public/logo.png',
  rootDir: 'docs',
  include: ['store'], // 只包含商店目录
  nav,
  sidebarOptions,
  enableSuggestionBox: false, 
  HideReadingTime: true, 
  HideLastUpdated: true, 
  HideAuthors: true,
  enableDisclaimer: false,
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
