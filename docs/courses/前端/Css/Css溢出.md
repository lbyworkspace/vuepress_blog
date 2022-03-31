---
title: Css溢出
date: '2022-3-30'
categories:
 - 教程
tags:
 - 前端
 - Css
---

::: tip
Css用overflow来设置**元素内溢出**的问题
:::

## 什么是元素溢出？
就是当父元素宽度固定时，其内部的子元素宽度总和超过父元素的宽度导致元素溢出的现象<br>
通过`overflow`来解决，它的值有：
- visible:默认值。内容不会被修剪，会呈现在元素框之外。
- hidden:内容会被修剪，并且其余内容是不可见的。
- scroll:内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
- auto:如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
- inherit:规定应该从父元素继承 overflow 属性的值。

## 效果展示
```html
<style>
    .d8{
        width:300px;
        height:100px;
        border:1px solid blue;
        padding:5px;
    }
    .d8 div{
        background:red;
    }
</style>
<div>这是visible效果(默认)：</div>
<div class="d8" style="margin-bottom:40px;">
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
</div>
<div>这是hidden效果：</div>
<div class="d8" style="overflow:hidden;">
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
</div>
<div>这是scroll效果：</div>
<div class="d8" style="overflow:scroll;">
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
</div>
<div>这是auto效果：</div>
<div class="d8" style="overflow:auto;">
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
</div>
```
::: details 点击查看效果
<style>
    .d8{
        width:300px;
        height:100px;
        border:1px solid blue;
        padding:5px;
    }
    .d8 div{
        background:red;
    }
</style>
<div>这是visible效果(默认)：</div>
<div class="d8" style="margin-bottom:40px;">
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
    <div>文本内容会超出父元素</div>
</div>
<div>这是hidden效果：</div>
<div class="d8" style="overflow:hidden;">
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
    <div>文本内容超出部分会被隐藏</div>
</div>
<div>这是scroll效果：</div>
<div class="d8" style="overflow:scroll;">
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
    <div>文本内容是可以滚动的</div>
</div>
<div>这是auto效果：</div>
<div class="d8" style="overflow:auto;">
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
    <div>文本内容，内容如果超出则显示滚动条</div>
</div>
:::
