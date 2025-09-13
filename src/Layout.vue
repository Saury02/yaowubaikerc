<script lang="ts" setup>
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { RouterLink } from 'vue-router'
import AppearanceToggle from './components/AppearanceToggle.vue'
import AppFooter from './components/AppFooter.vue'
import CopyrightInfo from './components/CopyrightInfo.vue'
import FontSwitcher from './components/FontSwitcher/FontSwitcher.vue'
import PageInfo from './components/PageInfo.vue'
import { Analytics } from '@vercel/analytics/vue';

const { Layout } = DefaultTheme
const { frontmatter, theme } = useData()
</script>

<template>
  <Analytics />
  <AppearanceToggle>
    <Layout>
      <!-- 导航栏自定义 -->
      <template #header>
        <header class="vp-layout__header">
          <div class="vp-layout__header-content">
            <div class="vp-header__logo">
              <a href="/" class="vp-header__logo-link">
                <img v-if="theme.logo" :src="theme.logo" :alt="theme.siteTitle" class="vp-header__logo-image">
                <span v-else class="vp-header__logo-title">{{ theme.siteTitle }}</span>
              </a>
            </div>
            <nav class="vp-header__nav">
              <RouterLink v-for="item in theme.nav" :key="item.text" :to="item.link || ''" class="vp-nav__link">
                {{ item.text }}
              </RouterLink>
            </nav>
            <div class="vp-header__actions">
              <NolebaseEnhancedReadabilitiesMenu />
              <FontSwitcher />
              <a href="/terms/" class="nav-link terms-link" style="margin-left: 8px; color: #9f7aea; text-decoration: none;">条款</a>
            </div>
          </div>
        </header>
      </template>
      
      <template #doc-before>
        <div class="vp-doc">
          <h1 v-if="frontmatter.title">{{ frontmatter.title }}</h1>
          <PageInfo />
          <CopyrightInfo />
        </div>
        <NolebaseHighlightTargetedHeading />
      </template>
      <template #doc-after>
        <AppFooter />
      </template>
      <template #nav-bar-content-after>
        <NolebaseEnhancedReadabilitiesMenu />
        <FontSwitcher />
        <a href="/terms/" class="nav-link terms-link" style="margin-left: 8px; color: #9f7aea; text-decoration: none;">条款</a>
      </template>
      <template #nav-screen-content-after>
        <NolebaseEnhancedReadabilitiesScreenMenu />
        <a href="/terms/" class="nav-link terms-link" style="display: block; padding: 8px 12px; color: #9f7aea; text-decoration: none;">条款</a>
      </template>
      <Analytics />
    </Layout>
  </AppearanceToggle>
</template>

<style>
:root {
  --vp-font-family-base: sans-serif;
  --vp-font-family-mono: monospace;
  
  /* 明亮模式 - 白紫配色 */
  --vp-c-brand-1: #9c27b0;    /* 深紫色 - 文本和主要元素 */
  --vp-c-brand-2: #ba68c8;    /* 中紫色 - 悬停状态 */
  --vp-c-brand-3: #e1bee7;    /* 浅紫色 - 背景和按钮 */
  --vp-c-brand-soft: rgb(156 39 176 / 16%);
  --main-color: #9c27b0;
  
  /* 全局背景渐变光晕变量 */
  --global-bg-gradient: linear-gradient(-45deg, #9c27b0 30%, #ffffff 50%, #f3e5f5 70%);
  --global-bg-filter: blur(44px);
  --global-bg-opacity: 0.3;
}

.dark:root {
  /* 深色模式 - 深紫配色 */
  --vp-c-brand-1: #c084fc;    /* 亮紫色 - 文本和主要元素 */
  --vp-c-brand-2: #a855f7;    /* 中紫色 - 悬停状态 */
  --vp-c-brand-3: #7e22ce;    /* 深紫色 - 背景和按钮 */
  --vp-c-brand-soft: rgb(192 132 252 / 16%);
  --main-color: #c084fc;
  
  /* 深色模式全局背景 */
  --global-bg-gradient: linear-gradient(-45deg, #c084fc 30%, #1e1e2e 50%, #4338ca 75%);
}

@media (min-width: 640px) {
  :root {
    --global-bg-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --global-bg-filter: blur(68px);
  }
}

/* 创建全局背景容器样式 */
body {
  position: relative;
  overflow-x: hidden;
}

/* 使用伪元素实现全局背景光晕 */
body::before {
  content: "";
  position: fixed;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: var(--global-bg-gradient);
  filter: var(--global-bg-filter);
  opacity: var(--global-bg-opacity);
  z-index: -1;
  transition: all 0.5s ease;
  pointer-events: none;
}

/* 确保所有主要内容容器在背景之上 */
.vp-app,
.vp-layout {
  position: relative;
  z-index: 1;
}
</style>

