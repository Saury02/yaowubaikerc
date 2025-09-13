---
title: RC商店
sidebar: false
aside: false
---

<style scoped>
/* 简化样式 */
:root {
  /* 与主题紫色系保持一致 */
  --primary-color: #9c27b0;
  --primary-light: #ba68c8;
  --secondary-color: #f97316;
  --light-text: #64748b;
  --background-color: #f8fafc;
  --card-bg: #ffffff;
  --gray-bg-layer: #f5f5f5;
  --name-box-bg: rgba(156, 39, 176, 0.15);
  --name-box-border: #9c27b0;
  --name-box-hover: #ba68c8;
  --shadow-3d: 0 8px 16px rgba(156, 39, 176, 0.15);
  --shadow-hover: 0 10px 15px rgba(156, 39, 176, 0.2);
  --transition: all 0.3s ease;
}

/* 确保主容器样式正确 */
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

.content {
  text-align: left !important;
  max-width: 100% !important;
}


h1, h2, h3, p, ol {
  text-align: left;
  margin-left: 0;
}

.store-intro {
  max-width: 800px;
  margin: 0 0 2rem 0;
  color: var(--light-text);
  font-size: 1.1rem;
  text-align: left;
}

.drug-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  justify-items: stretch;
}

.drug-card {
  background-color: rgba(156, 39, 176, 0.08) !important;
  border-radius: 12px;
  box-shadow: var(--shadow-3d);
  padding: 0.5rem;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  opacity: 1 !important;
  transition: all 0.3s ease;
}

.drug-card:hover {
  background-color: rgba(156, 39, 176, 0.15) !important;
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

/* 卡片背景不透明 */
.drug-bg-layer {
  background-color: #ffffff !important;
  border-radius: 6px;
  padding: 0.1rem;
  width: auto;
  display: inline-block;
  text-align: center;
  position: relative;
  z-index: 2;
  opacity: 1 !important;
}

.drug-link {
  text-decoration: none;
  color: var(--primary-color) !important;
  font-weight: 600;
  display: block;
  padding: 0.5rem 0.8rem;
  background-color: #ffffff !important;
  border: 2px solid var(--primary-color);
  border-radius: 6px;
  position: relative;
  z-index: 3;
  font-size: 0.9rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(156, 39, 176, 0.1);
  opacity: 1 !important;
  transition: all 0.3s ease;
}

.drug-link:hover {
  background-color: var(--primary-color) !important;
  color: white !important;
  box-shadow: 0 4px 8px rgba(156, 39, 176, 0.25);
  transform: translateY(-2px);
}

/* 图标装饰 */
.drug-card#moon-dust::before {
  content: '🌙';
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  font-size: 0.8rem;
  z-index: 3;
}

.drug-card#ibuprofen::before {
  content: '🩹';
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  font-size: 0.8rem;
  z-index: 3;
}

.drug-card#acetaminophen::before {
  content: '🌡️';
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  font-size: 0.8rem;
  z-index: 3;
}

.drug-card#ambroxol::before {
  content: '👃';
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  font-size: 0.8rem;
  z-index: 3;
}

.drug-card#metformin::before {
  content: '🩸';
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  font-size: 0.8rem;
  z-index: 3;
}

/* 深色模式样式调整 */
.dark .drug-card {
  background-color: rgba(192, 132, 252, 0.1) !important;
  box-shadow: 0 8px 16px rgba(192, 132, 252, 0.1);
}

.dark .drug-card:hover {
  background-color: rgba(192, 132, 252, 0.2) !important;
  box-shadow: 0 10px 15px rgba(192, 132, 252, 0.25);
}

.dark .drug-bg-layer {
  background-color: #1e1e2e !important;
}

.dark .drug-link {
  background-color: #1e1e2e !important;
  color: #c084fc !important;
  border-color: #c084fc;
  box-shadow: 0 2px 4px rgba(192, 132, 252, 0.15);
}

.dark .drug-link:hover {
  background-color: #c084fc !important;
  color: #1e1e2e !important;
  box-shadow: 0 4px 8px rgba(192, 132, 252, 0.3);
}


/* global选择器VitePress全局布局 */
:global(.vp-layout) {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

:global(.vp-content) {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

:global(.vp-sidebar) {
  display: none !important;
  width: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* 额外的内 边距 */
:global(.vp-doc) {
  padding-left: 0 !important;
  padding-right: 0 !important;
  max-width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* 覆盖内容容器的样式 */
:global(.VPDoc) {
  padding-left: 0 !important;
  padding-right: 0 !important;
  max-width: 100% !important;
}

:global(.VPDoc .container) {
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* 隐藏 */
:global(.VPSidebar) {
  display: none !important;
  width: 0 !important;
}

:global(.VPContent.has-sidebar) {
  padding-left: 0 !important;
}

:global(.VPLocalNav) {
  display: none !important;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .main-container {
    padding: 1rem;
  }
  
  .drug-cards {
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 992px) {
  .drug-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .drug-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .drug-card {
    min-height: 100px;
  }
}
</style>

<div class="main-container">
  <h1>欢迎来到RC商店</h1>
  
  <h2>商店介绍</h2>
  
  <p class="store-intro">
    欢迎来到我们的药品商店，提供各类常用药物，品质保证。
    请在下方浏览我们的产品。
  </p>
  
  <div class="drug-cards">
    <!-- 月尘 -->
    <div class="drug-card" id="moon-dust">
      <div class="drug-bg-layer">
        <a href="/store/moon_dust" class="drug-link">月尘</a>
      </div>
    </div>
    <div class="drug-card" id="ibuprofen">
      <div class="drug-bg-layer">
        <a href="#ibuprofen" class="drug-link">布洛芬</a>
      </div>
    </div>
    <div class="drug-card" id="acetaminophen">
      <div class="drug-bg-layer">
        <a href="#acetaminophen" class="drug-link">对乙酰氨基酚</a>
      </div>
    </div>
    <div class="drug-card" id="ambroxol">
      <div class="drug-bg-layer">
        <a href="#ambroxol" class="drug-link">盐酸氨溴索</a>
      </div>
    </div>
    <div class="drug-card" id="metformin">
      <div class="drug-bg-layer">
        <a href="#metformin" class="drug-link">盐酸二甲双胍</a>
      </div>
    </div>
  </div>
  
  <h2>用户须知</h2>
  
  <ol>
    <li><strong>在本商店购买药品前</strong>，请确保您已了解药品的适应症、用法用量及注意事项。</li>
    <li><strong>如有任何疑问</strong>，请咨询专业医师或药师的建议。</li>
    <li><strong>请按照药品说明书或医嘱</strong>正确使用药品。</li>
    <li><strong>药品应存放在阴凉干燥处</strong>，避免儿童接触。</li>
    <li><strong>如发现药品过期或包装破损</strong>，请停止使用并联系我们。</li>
  </ol>
</div>
