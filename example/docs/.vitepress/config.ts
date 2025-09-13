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

// 侧边栏基础配置
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

// 主题全局配置
const themeConfig: ThemeContext = {
  siteTitle: 'RC商店',
  siteDescription: 'RC商店 提供各类优质产品。',
  githubRepoLink: 'https://github.com/Saury02/yaowubaikerc',
  siteLogo: '/public/logo.png', // 确保 logo 路径正确（需放在 docs/public 文件夹）
  rootDir: 'docs',
  include: ['store'], // 仅包含 store 目录的内容
  nav,
  sidebarOptions,
  enableSuggestionBox: false,
  HideReadingTime: true,
  HideLastUpdated: true,
  HideAuthors: true,
  enableDisclaimer: false,
  disclaimerStatusKey: 'disclaimerStatus',

  // 国际化配置（仅中文）
  locales: {
    root: {
      label: '中文',
      lang: 'zh',
      link: '/',
    }
  },
}

// VitePress 核心配置（整合主题与基础配置）
export default withThemeContext(themeConfig, () => {
  return {
    ...genConfig(),
    outDir: '../dist', // 构建输出目录（相对于 docs 文件夹）
    sitemap: {
      lastmodDateOnly: true, // 修复原语法错误：添加逗号
    },
    // 额外确保 Vite 能解析主题的 .vue 文件（兜底配置）
    vite: {
      resolve: {
        extensions: ['.vue', '.js', '.ts', '.json'],
      },
      server: {
        fs: {
          allow: ['../node_modules'], // 允许读取根目录的 node_modules（主题所在位置）
        }
      }
    }
  }
})