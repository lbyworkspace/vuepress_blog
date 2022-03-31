---
title: Css对齐
date: '2022-3-31'
categories:
 - 教程
tags:
 - 前端
 - Css
---

::: tip
元素的对齐方式也是Css中**必须掌握**的技能
:::

## 元素居中对齐
- 元素居中对齐我们一般使用`margin:auto;`的方式
- 元素通过指定宽度，并将两边的空外边距平均分配
- 前提是要给该元素设置**一定的宽度**，不然可能看不到居中效果
```html
<style>
    .d9{
        width:100px;
        border:1px solid red;
        margin:auto;
    }
</style>
<div class="d9">元素居中</div>
```
::: details 点击查看效果
<style>
    .d9{
        width:100px;
        border:1px solid red;
        margin:auto;
    }
</style>
<div class="d9">元素居中</div>
:::

## 文本居中
文本在元素内居中对齐，可以使用`text-align: center;`
它的值还有`left`(居左)、`right`(居右)
```html
<style>
    .d10{
        width:100px;
        border:1px solid red;
        text-align:center;
    }
</style>
<div class="d10">文本居中</div>
```
::: details 点击查看效果
<style>
    .d10{
        width:100px;
        border:1px solid red;
        text-align:center;
    }
</style>
<div class="d10">文本居中</div>
:::

## float浮动
- 我们也可以指定元素为向**左/右**对齐
- 浮动元素通过**float**属性设置
- 它的值有两个：`left`(向左浮动)、`right`(向右浮动)
- 元素浮动之后，周围的元素会重新排列，为了避免这种情况，**使用 clear 属性清除周围的浮动元素**。
```html
<style>
    .d11{
        border:1px solid red;
        float:right;
    }
</style>
<div class="d11">浮动居右</div>
<div class="d11">浮动居右</div>
<div style="clear:both;"></div>
<div>不浮动元素</div>
```
::: details 点击查看效果
<style>
    .d11{
        border:1px solid red;
        float:right;
    }
</style>
<div class="d11">浮动居右</div>
<div class="d11">浮动居右</div>
<div style="clear:both;"></div>
<div>不浮动元素</div>
:::

## 垂直居中
- 通过设置line-height属性和height属性的值保持一致来实现垂直居中，line-height为**行高**
- 一般我们也会设置为flex布局，通过`align-items:center;`来解决垂直居中
```html
<style>
    .d12{
        border:1px solid red;
        height:100px;
        line-height:100px;
    }
    .d13{
        display:flex;
        align-items:center;
        border:1px solid red;
        height:100px;
    }
</style>
<div class="d12">line-height设置垂直居中</div>
<div class="d13">flex布局设置垂直居中</div>
```
::: details 点击查看效果
<style>
    .d12{
        border:1px solid red;
        height:100px;
        line-height:100px;
    }
    .d13{
        display:flex;
        align-items:center;
        border:1px solid red;
        height:100px;
    }
</style>
<div class="d12">line-height设置垂直居中</div>
<div class="d13">flex布局设置垂直居中</div>
:::

## 水平垂直居中
- 通过position和transform属性来实现水平垂直居中
- 通过flex布局的`align-items:center;`和`justify-content:center;`来实现水平垂直居中
- 通过`line-height`和`text-align`属性来实现水平垂直居中
```html
<style>
    .d14{
        position:absolute;
        left:50%;
        top:50%;
        /*向左向上各自移动自身宽度高度的50%*/
        transform:translate(-50%,-50%);
    }
    .d15{
        display:flex;
        align-items:center;
        justify-content:center;
        height:100px;
        border:1px solid red;
    }
    .d16{
        text-align:center;
        line-height:100px;
        height:100px;
        border:1px solid red;
    }
</style>
<div style="position:relative;height:100px;border:1px solid red;">
    <div class="d14">绝对定位实现水平垂直居中</div>
</div>
<div class="d15">flex布局实现水平垂直居中</div>
<div class="d16">text-align和line-height实现水平垂直居中</div>
```
::: details 点击查看效果
<style>
    .d14{
        position:absolute;
        left:50%;
        top:50%;
        /*向左向上各自移动自身宽度高度的50%*/
        transform:translate(-50%,-50%);
    }
    .d15{
        display:flex;
        align-items:center;
        justify-content:center;
        height:100px;
        border:1px solid red;
    }
    .d16{
        text-align:center;
        line-height:100px;
        height:100px;
        border:1px solid red;
    }
</style>
<div style="position:relative;height:100px;border:1px solid red;">
    <div class="d14">绝对定位实现水平垂直居中</div>
</div>
<div class="d15">flex布局实现水平垂直居中</div>
<div class="d16">text-align和line-height实现水平垂直居中</div>
:::

