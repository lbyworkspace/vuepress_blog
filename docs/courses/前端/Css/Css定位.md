---
title: Css定位
date: '2022-3-29'
categories:
 - 教程
tags:
 - 前端
 - Css
---

::: tip
定位是css中一定得**掌握、熟练**的技能，所以这里你无论如何都要搞懂
:::

Css中一共有5种定位：
- static
- relative
- fixed
- absolute
- sticky

## static 定位
- static定位也叫静态定位，他是不受任何top, bottom, left, right影响。
- 任何元素的默认定位都是static定位，即没有定位，遵循正常的文档流对象
- 文档流的意思就是元素在html文档的哪个位置它就得在哪个位置
```html
<!-- 最终显示的效果要和html对应，这就是static定位 -->
<div>我是第一个div</div>
<div>我是第二个div</div>
<div>我是第三个div</div>
```
::: details 点击查看效果
<div>我是第一个div</div>
<div>我是第二个div</div>
<div>我是第三个div</div>
:::

## fixed 定位
- fixed定位又叫固定定位。
- 元素的位置相对于**浏览器窗口**是固定位置。
- **即使窗口是滚动的它也不会移动**.
```css
p.pos_fixed
{
    /*相对于父容器左上角为原点进行固定定位*/
    position:fixed;
    top:30px;
    right:5px;
}
```

## relative 定位
- relative定位又叫相对定位，它是相对自己来进行定位的
- 移动相对定位元素，但它原本所占的空间不会改变。
- 相对定位元素经常被用来作为**绝对定位元素**的容器块。
```html
<style>
.relative{
    position: relative;
    border: 1px solid red;
    top: -10px;
}
</style>
<div style="border: 1px solid red;">
    <div class="relative">相对定位的div</div>
    <div style="border: 1px solid red;">没有定位的元素</div>
</div>
```
::: details 点击查看效果
![image-20220329205639880](https://workdomain.cloud/picgo/image-20220329205639880.png)
:::

## absolute 定位
- 绝对定位的元素的位置相对于最近的已定位父元素
- 如果元素没有已定位的父元素，那么它的位置相对于`<html>`
- absolute 定位使元素的位置与**文档流无关**，因此不占据空间。
- absolute 定位的元素和其他元素重叠,可以通过`z-index`调整重叠关系
```html
<style>
    .d1{
        position:relative;
        border:1px solid red;
        width:100px;
        height:100px;
    }
    .absolute{
        position:absolute;
        right:0;
        top:0;
        background-color:blue;
        width:30px;
        height:30px;
    }
</style>
<div class="d1">
    <div class="absolute"></div>
</div>
```
::: details 点击查看效果
<style>
    .d1{
        position:relative;
        border:1px solid red;
        width:100px;
        height:100px;
    }
    .absolute{
        position:absolute;
        /*相对于父容器进行绝对定位，距离最右边和最上边都是5px*/
        right:5px;
        top:5px;
        background-color:blue;
        width:30px;
        height:30px;
    }
</style>
<div class="d1">
    <div class="absolute"></div>
</div>
:::

## sticky 定位
- sticky定位又叫粘性定位
- 粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。
- 当粘性定位元素没有超出页面视图区域，它的行为就是**relative**定位
- 当页面滚动超出目标区域时，它的表现就像**fixed**定位，它会固定在目标位置。
- 粘性定位要指定top, right, bottom ,left中任意一个阈值才可使粘性定位生效，否则其行为与相对定位相同。
```html
<style>
p.sticky {
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
}
</style>
<div style="height:200px;overflow: scroll;">
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p class="sticky">我是粘性定位!</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
</div>
```
::: details 点击查看效果
<style>
p.sticky {
  position: sticky;
  top: 0;
  padding: 5px;
  background-color: #cae8ca;
  border: 2px solid #4CAF50;
}
</style>
<div style="height:200px;overflow: scroll;">
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p class="sticky">我是粘性定位!</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
  <p>来回滚动我</p>
</div>
:::




