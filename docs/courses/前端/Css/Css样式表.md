---
title: Css样式表
date: '2022-3-29'
categories:
 - 教程
tags:
 - 前端
 - Css
---

::: tip
当读到一个样式表时，浏览器会根据它来格式化 HTML 文档。
:::

## 如何插入样式表
插入样式表的方法有三种:
- 外部样式表(External style sheet)
- 内部样式表(Internal style sheet)
- 内联样式(Inline style)

## 外部样式表
当样式需要应用于很多页面时，外部样式表将是理想的选择。<br>
页面使用 `<link>` 标签链接到样式表。 `<link>` 标签在（文档的）头部
```html
<head>
<!-- 这样浏览器就会读取同级目录的mystyle.css样式文件 -->
<link rel="stylesheet" href="mystyle.css">
</head>
```

## 内部样式表
可以不读取样式文件，直接在html中写入样式就叫内部样式表<br>
使用 `<style>` 标签在**文档头部**定义内部样式表
```html
<head>
<style>
div{color:red;}
</style>
</head>
```

## 内联样式
有时候有些元素要和别的元素有些区别，内联样式就显得极为方便<br>
在标签上通过 `style` 属性来设置内联样式
```html
<head>
<style>
.d{color:red;}
</style>
</head>
<body>
<div class="d">我是div</div>
<div class="d" style="font-size:20px;">我是div</div>
<div class="d">我是div</div>
</body>
```
::: details 点击查看效果
<head>
<style>
.d{color:red;}
</style>
</head>
<body>
<div class="d">我是div</div>
<div class="d" style="font-size:20px;">我是div,我的字体更大</div>
<div class="d">我是div</div>
</body>
:::