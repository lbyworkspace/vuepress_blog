---
title: Css基本样式
date: '2022-3-29'
categories:
 - 系列教程
tags:
 - 前端
 - Css
---

::: tip
本章主要讲解Css中**最基本的样式属性**
:::

## color
该属性设置的是**字体颜色**
它的值可以是
- 颜色的英文名：例如：red、blue、green等等
- 十六进制值：例如：#ffffff、#000000
- rgb代码：例如：rgb(255,0,0)
```html
<div style="color:red;">BaoStudy.com</div>
```
::: details 点击查看效果
<div style="color:red;">BaoStudy.com</div>
:::

## font-size
该属性设置的是**字体大小**,单位有px、em、rem、rpx<br>
不过最常用的还是**px**,是英语单词pixel的缩写,意为像素
```html
<div style="font-size:25px;">BaoStudy.com</div>
```
::: details 点击查看效果
<div style="font-size:25px;">BaoStudy.com</div>
:::

## border
该属性设置的是**元素边框**，它的值有三个参数：
- border-width：边框的宽度
- border-style：边框的样式,例如：dotted(点状)、solid(实线)、double(双线)、dashed(虚线)
- border-color：边框的颜色<br>
我们可以连在一起设置，比如：
```css
.test{
    border:1px solid red;
}
```
::: details 点击查看效果
<span style="border:1px solid red;">BaoStudy.com</span>
:::

## 盒子模型
CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。<br>
下面的图片说明了盒子模型(Box Model)：
![image-20220329132117601](https://workdomain.cloud/picgo/image-20220329132117601.png)
### padding
该属性设置的是**元素的内边距**
该属性的值有几种情况：
- `padding:10px 20px 30px 40px;`:该情况是按照上、右、下、左的顺序依次设置边距的值
    ::: details 点击查看效果
    <span style="padding:10px 20px 30px 40px;border:1px solid red;">内边距</span>
    :::
- `padding:10px 20px;`:该情况是上、下内边距设置10个像素，左右内边距设置20个像素
    ::: details 点击查看效果
    <span style="padding:10px 20px;border:1px solid red;">内边距</span>
    :::
- `padding:10px 0 20px;`：该情况是上内边距设置10个像素、左右内边距都设置为0、下内边距设置20个单位
    ::: details 点击查看效果
    <span style="padding:10px 0 20px;border:1px solid red;">内边距</span>
    :::
-  `padding:10px;`:该情况是上下左右内边距都设置10个像素
    ::: details 点击查看效果
    <span style="padding:10px;border:1px solid red;">内边距</span>
    :::

### margin
该属性设置的是**元素的外边距**,通常外边距指的是要和其他元素相隔的距离<br>
该属性的值设置方法和padding的一样，这里就不一一列举了
```html
<span style="border:1px solid red;">没有外边距的元素</span>
<br>
<span style="border:1px solid red;margin:10px;">有外边距的元素</span>
```
::: details 点击查看效果
<span style="border:1px solid red;">没有外边距的元素</span>
<br>
<span style="border:1px solid red;margin:10px;">有外边距的元素</span>
:::

## text-align
该属性设置的是**块级元素内部的内联元素的对齐方式**<br>
值分别为**left**(居左)、**center**(居中)、**right**(居右)
```html
<div style="text-align:center;">居中的div</div>
```
::: details 点击查看效果
<div style="text-align:center;">居中的div</div>
:::




