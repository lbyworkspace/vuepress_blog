---
title: Vue2安装
date: '2022-4-5'
categories:
 - 教程
tags:
 - 前端 Vue
---

## 直接`<script>`引入
对于制作原型或学习，你可以这样使用最新版本：
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```
对于生产环境
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
```
如果你使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件：
```html
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
</script>
```

## NPM
```sh
npm install vue
```

## Vue-cli
Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的**脚手架**。它为现代前端工作流提供了开箱即用的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 [Vue CLI](https://cli.vuejs.org/zh/) 的文档。