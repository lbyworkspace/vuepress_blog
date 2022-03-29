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

## 进阶选择器
### 后代选择器
后代选择器用于选取某元素的后代元素。(以空格` `分隔)
```html
<style>
div .p1{
  background-color:green;
}
</style>
<div>
    <p class="p1">p</p>
    <p class="p1">p</p>
    <p class="p2">p</p>
</div>
```
::: details 点击查看效果
<style>
/* 选取div内的所有p标签 */
div .p1{
  background-color:green;
}
</style>
<div>
    <p class="p1">p</p>
    <p class="p1">p</p>
    <p class="p2">p</p>
</div>
:::

### 子代选择器
与后代选择器相比，子元素选择器只能选择**一级子元素**的元素。(以大于`>`号分隔）
```html
<style>
div>.p3{
  background-color:green;
}
</style>
<div>
    <p class="p3">p1</p>
    <span><p class="p3">我是span中的p3</p></span>
</div>
```
::: details 点击查看效果
<style>
div>.p3{
  background-color:green;
}
</style>
<div>
    <p class="p3">p1</p>
    <span><p class="p3">我是span中的p3</p></span>
</div>
:::

### 相邻兄弟选择器
相邻兄弟选择器可选择紧接在另一元素后的元素，且二者有相同父元素。(以加号`+`分隔)
```html
<style>
div+.p4{
  background-color:green;
}
</style>
<div>我是div</div>
<p class="p4">我是div后的第一个p</p>
<p class="p4">我是div后的第二个p</p>
```
::: details 点击查看效果
<style>
div+.p4{
  background-color:green;
}
</style>
<div>我是div</div>
<p class="p4">我是div后的第一个p</p>
<p class="p4">我是div后的第二个p</p>
:::

### 后续兄弟选择器
后续兄弟选择器选取指定元素之后的所有相邻兄弟元素。(以波浪号`～`分隔)
```html
<style>
div~.p5{
  background-color:green;
}
</style>
<div>我是div</div>
<p class="p5">我是div后的第一个p</p>
<p class="p5">我是div后的第二个p</p>
```
::: details 点击查看效果
<style>
div~.p5{
  background-color:green;
}
</style>
<div>我是div</div>
<p class="p5">我是div后的第一个p</p>
<p class="p5">我是div后的第二个p</p>
:::



