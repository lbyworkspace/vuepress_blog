---
title: Css选择器
date: '2022-3-29'
categories:
 - 系列教程
tags:
 - 前端
 - Css
---

::: tip 
如果你要在HTML元素中设置CSS样式，你需要在元素中设置"id" 和 "class"选择器。
:::

## id选择器
- id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。
- HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。
```html
<style>
    #d1{
        color:red;
    }
</style>
<div id="d1">BaoStudy.com</div>
```
::: details 点击查看效果
<style>
    #d1{
        color:red;
    }
</style>
<div id="d1">BaoStudy.com</div>
:::

## class选择器
- class 选择器用于描述**一组元素的样式**，class 选择器有别于id选择器，class可以在**多个元素中使用**。
- class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点"."号显示
```html
<style>
    .green{
        color:red;
    }
</style>
<div class="green">BaoStudy.com</div>
```
::: details 点击查看效果
<style>
    .blue{
        color:blue;
    }
</style>
<div class="blue">BaoStudy.com</div>
:::