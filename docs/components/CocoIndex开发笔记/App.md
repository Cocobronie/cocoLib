# App.vue

## 项目功能

- 显示每日计划、日常习惯
- 导航：方便的排列一些网站，顺序自己决定
- 随时记录没来得及看的好文章
- 一些灵感/好的语句/容易忘记的知识点显示（卡片）
- 照片展示区域



## 页面结构

```vue
<template>
  <coco-search></coco-search>
  <coco-tab></coco-tab>
</template>
  
<script setup lang="ts">
import CocoSearch from './components/CocoSearch.vue';
import CocoTab from './components/CocoTab.vue';

</script>

<style>
body {
  margin: 0;
}
</style>

```



## 页面样式

- xxxxxxxxxx // main.tsimport { createApp } from 'vue'import ElementPlus from 'element-plus'import 'element-plus/dist/index.css'import App from './App.vue'​const app = createApp(App)​app.use(ElementPlus)app.mount('#app')tsx

  
