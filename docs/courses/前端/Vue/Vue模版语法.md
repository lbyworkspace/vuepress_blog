---
title: Vue模版语法
date: '2022-4-5'
categories:
 - 教程
tags:
 - 前端
 - Vue
---

## 插值语法
数据绑定最常见的形式就是使用`{{}}`(双大括号)的文本插值：
```html
<div id="app">{{name}}</div>
<script>
new Vue({
  el: '#app',
  data: {
    name: 'lby'
  }
})   
</script>
```

## v-html
使用 v-html 指令用于输出 html 代码
```html
<div id="app">
    <div v-html="code"></div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    code: '<h1>lby</h1>'
  }
})
</script>
```

## v-bind
- v-bind 指令被用来响应地更新 HTML 属性
- v-bind指令可以缩写为`:`
```html
<div id="app">
    <a v-bind:href="url">百度</a>
    <!-- v-bind缩写形式 -->
    <a :href="url">百度</a>   
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    url: 'https://www.baidu.com'
  }
})
</script>
```

## v-on 
- v-on指令用于监听 DOM 事件
- v-on指令可以缩写为`@`
```html
<div id="app">
    <button v-on:click="button">点击</button>
    <!-- v-on的缩写形式 -->
    <button v-on:click="button">点击</button>
</div>
    
<script>
new Vue({
  el: '#app',
  methods:{
      func(){
          console.log('点击！')  //监听按钮的点击事件
      }
  }
})
</script>
```

## v-model
在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定
```html
<div id="app">
    <p>{{ message }}</p>
    <input v-model="message">
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    message: 'hello,lby!'
  }
})
</script>
```

## v-if
- 在元素 和 template 中使用 v-if 指令来指定是否生成DOM元素
- `<template>`元素是一个包裹元素，不含有任何作用
- 根据的表达式最后计算结果要为一个**布尔值**
```html
<div id="app">
    <p v-if="show">点击按钮切换显示/隐藏</p>
    <button @click="show = !show"></button>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    show: true
  }
})
</script>
```

## v-show
- 在元素 和 template 中使用 v-if 指令来指定是否显示DOM元素
- `v-show` 只是简单地切换元素的 CSS property `display`
- 与v-if区别就是，v-show**一定会生成**DOM元素
```html
<div id="app">
    <p v-show="show">点击按钮切换显示/隐藏</p>
    <button @click="show = !show"></button>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    show: true
  }
})
</script>
```

## v-for
- v-for 指令用于在html上**遍历一个数组**
- v-for 指令需要以 `item,index in items` 形式的特殊语法，`items` 是**源数据数组**而 `item` 是数组元素迭代的**别名**,`index`为当前数组元素的**索引值**。
- Vue为了跟踪每个节点从而达到**重用和重新排序现有元素**，我们都需要为遍历的每一项提供一个唯一的`key`,通过`v-bind:key`或缩写`:key`来指定
```html
<div id="app">
    <div v-for="item,index in array" :key="index">{{item}}</div>
</div>
<!--
//小明
//小红
//小花
--> 
<script>
new Vue({
  el: '#app',
  data: {
    array:['小明','小红','小花']
  }
})
</script>
```