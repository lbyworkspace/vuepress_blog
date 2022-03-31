---
title: Css弹性盒子
date: '2022-3-30'
categories:
 - 教程
tags:
 - 前端
 - Css
---

::: tip
弹性盒子是 **CSS3** 的一种新的布局模式。<br>
引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行**排列**、**对齐**和**分配空白空间**。
:::

## flex布局
- flex布局为 flexible Box 的缩写,意为**弹性盒子**
- flex布局内所有块级和内联元素都会**排成一排**
- 通过`display`属性设置**flex布局**
```html
<style>
    /*设置父元素为flex布局*/
    .d2{
        display:flex;
    }
    .d2 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div class="d2">
    <div>我是第一个div</div>
    <div>我是第二个div</div>
    <div>我是第三个div</div>
</div>
```
::: details 点击查看效果
<style>
    /*设置父元素为flex布局*/
    .d2{
        display:flex;
    }
    .d2 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div class="d2">
    <div>我是第一个div</div>
    <div>我是第二个div</div>
    <div>我是第三个div</div>
</div>
:::

## flex-direction
该属性设置弹性盒子的**排列方向**<br>
flex-direction的值有：
- row：横向从左到右排列（左对齐），默认的排列方式。
- row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
- column：纵向排列。
- column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。
```html
<style>
    /*设置flex布局的排列方向为反方向*/
    .d3{
        display:flex;
        flex-direction:row-reverse;
    }
    .d3 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div class="d3">
    <div>我是第一个div</div>
    <div>我是第二个div</div>
    <div>我是第三个div</div>
</div>
```
::: details 点击查看效果
<style>
    /*设置flex布局的排列方向为反方向*/
    .d3{
        display:flex;
        flex-direction:row-reverse;
    }
    .d3 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div class="d3">
    <div>我是第一个div</div>
    <div>我是第二个div</div>
    <div>我是第三个div</div>
</div>
:::

## justify-content
盒子内容**在水平方向**的**对齐方式**<br>
它常用的值有：
- flex-start：弹性项目向行头紧挨着填充。这个是默认值。
- flex-end：弹性项目向行尾紧挨着填充。
- center：弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上**同时溢出**）。
- space-between：保证盒子内**第一个和最后一个元素在最边上**，其余的元素按照剩余空间平均分配，间隔相同。
- space-around：盒子内的所有元素**均匀分配空间**，间隔相同。
```html
<style>
    /*设置父元素为flex布局*/
    .d4{
        display:flex;
        padding:5px;
        border:1px solid blue;
    }
    .d4 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div>flex-start效果：</div>
<div class="d4" style="justify-content:flex-start;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>flex-end效果：</div>
<div class="d4" style="justify-content:flex-end;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>center效果：</div>
<div class="d4" style="justify-content:center;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>space-between效果：</div>
<div class="d4" style="justify-content:space-between;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>space-around效果：</div>
<div class="d4" style="justify-content:space-around;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
```
::: details 点击查看效果
<style>
    /*设置父元素为flex布局*/
    .d4{
        display:flex;
        padding:5px;
        border:1px solid blue;
    }
    .d4 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div>flex-start效果：</div>
<div class="d4" style="justify-content:flex-start;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>flex-end效果：</div>
<div class="d4" style="justify-content:flex-end;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>center效果：</div>
<div class="d4" style="justify-content:center;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>space-between效果：</div>
<div class="d4" style="justify-content:space-between;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>space-around效果：</div>
<div class="d4" style="justify-content:space-around;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
:::

## align-item
align-items 设置弹性盒子元素在**纵向**上的对齐方式。<br>
常用的值有：
- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。
```html
<style>
    /*设置父元素为flex布局*/
    .d5{
        display:flex;
        padding:5px;
        border:1px solid blue;
    }
    .d5 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div>flex-start效果：</div>
<div class="d5" style="align-items:flex-start;">
    <div style="height:30px;">div1</div>
    <div style="height:20px;">div2</div>
    <div style="height:50px;">div3</div>
</div>
<div>center效果：</div>
<div class="d5" style="align-items:center;">
    <div style="height:30px;">div1</div>
    <div style="height:20px;">div2</div>
    <div style="height:50px;">div3</div>
</div>
<div>flex-end效果：</div>
<div class="d5" style="align-items:flex-end;">
    <div style="height:30px;">div1</div>
    <div style="height:20px;">div2</div>
    <div style="height:50px;">div3</div>
</div>
```
::: details 点击查看效果
<style>
    /*设置父元素为flex布局*/
    .d5{
        display:flex;
        padding:5px;
        border:1px solid blue;
    }
    .d5 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div>flex-start效果：</div>
<div class="d5" style="align-items:flex-start;">
    <div style="height:30px;">div1</div>
    <div style="height:20px;">div2</div>
    <div style="height:50px;">div3</div>
</div>
<div>center效果：</div>
<div class="d5" style="align-items:center;">
    <div style="height:30px;">div1</div>
    <div style="height:20px;">div2</div>
    <div style="height:50px;">div3</div>
</div>
<div>flex-end效果：</div>
<div class="d5" style="align-items:flex-end;">
    <div style="height:30px;">div1</div>
    <div style="height:20px;">div2</div>
    <div style="height:50px;">div3</div>
</div>
:::

## flex-wrap
该属性设置盒子内部元素超出盒子宽度时换行方式
它的值有：
- nowrap - 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。
- wrap - 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行
- wrap-reverse -反转 wrap 排列。
```html
<style>
    /*设置父元素为flex布局*/
    .d6{
        display:flex;
        padding:5px;
        border:1px solid blue;
        width:200px;
    }
    .d6 div{
        width:60px;
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div>不换行的效果：</div>
<div class="d6" style="flex-wrap:nowrap;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>换行的效果：</div>
<div class="d6" style="flex-wrap:wrap;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
```
::: details 点击查看效果
<style>
    /*设置父元素为flex布局*/
    .d6{
        display:flex;
        padding:5px;
        border:1px solid blue;
        width:200px;
    }
    .d6 div{
        width:60px;
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div>不换行的效果：</div>
<div class="d6" style="flex-wrap:nowrap;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
<div>换行的效果：</div>
<div class="d6" style="flex-wrap:wrap;">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
</div>
:::

## flex
总的来说该属性就是把盒子平均分配，按照**flex/flex总值**来分配每个元素的空间
```html
<style>
    /*设置父元素为flex布局*/
    .d7{
        display:flex;
        padding:5px;
        border:1px solid blue;
        width:200px;
    }
    .d7 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div>平分组合的效果：</div>
<div class="d7">
    <div style="flex:1;">div1</div>
    <div style="flex:1;">div2</div>
</div>
<div>一二组合的效果：</div>
<div class="d7">
    <div style="flex:1;">div1</div>
    <div style="flex:2;">div2</div>
</div>
```
::: details 点击查看效果
<style>
    /*设置父元素为flex布局*/
    .d7{
        display:flex;
        padding:5px;
        border:1px solid blue;
        width:200px;
    }
    .d7 div{
        border:1px solid red;
        margin: 0 10px;
    }
</style>
<div>平分组合的效果：</div>
<div class="d7">
    <div style="flex:1;">div1</div>
    <div style="flex:1;">div2</div>
</div>
<div>一二组合的效果：</div>
<div class="d7">
    <div style="flex:1;">div1</div>
    <div style="flex:2;">div2</div>
</div>
:::
