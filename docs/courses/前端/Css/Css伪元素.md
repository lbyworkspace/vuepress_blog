---
title: Css伪元素
date: '2022-3-31'
categories:
 - 教程
tags:
 - 前端
 - Css
---

::: tip
CSS伪元素是用来添加一些选择器的**特殊效果**。
:::

## 常用伪元素
常用的伪元素有：
- `:before`：在所选元素的前面插入内容
- `:after`：在所选元素的前面插入内容
- `:hover`：鼠标在所选元素上的状态
- `:focus`：选择元素输入后具有焦点状态
- `:first-child`：选择所选元素的第一个元素
- `:last-child`：选择所选元素的最后一个元素

## 效果如下
```html
<style>
    .d17:before{
        content:'插入前面的内容'
    }
    .d17:after{
        content:'插入后面的内容'
    }
    .d18:hover{
        color:red;
    }
    .input:focus{
        color:red;
        border:1px solid red;
        outline:none;
    }
    .d19>.d20:first-child{
        border:1px solid red;
    }
    .d19>.d20:last-child{
        border:1px solid blue;
    }
</style>
<div class="d17">｜before和after效果｜</div>
<div class="d18">:hover效果：鼠标移到我上面变红色</div>
<input class="input" placeholder=":focus效果:点击聚焦"/>
<div class="d19" style="margin-top:10px">
    <div class="d20">:first-child的效果</div>
    <div class="d20">div</div>
    <div class="d20">:last-child的效果</div>
</div>
```
::: details 点击查看效果
<style>
    .d17:before{
        content:'插入前面的内容'
    }
    .d17:after{
        content:'插入后面的内容'
    }
    .d18:hover{
        color:red;
    }
    .input:focus{
        color:red;
        border:1px solid red;
        outline:none;
    }
    .d19>.d20:first-child{
        border:1px solid red;
    }
    .d19>.d20:last-child{
        border:1px solid blue;
    }
</style>
<div class="d17">｜before和after效果｜</div>
<div class="d18">:hover效果：鼠标移到我上面变红色</div>
<input class="input" placeholder=":focus效果:点击聚焦"/>
<div class="d19" style="margin-top:10px">
    <div class="d20">:first-child的效果</div>
    <div class="d20">div</div>
    <div class="d20">:last-child的效果</div>
</div>
:::