---
title: Html标签
date: '2022-3-29'
categories:
 - 系列教程
tags:
 - 前端
 - Html
---

## 标题
HTML 标题（Heading）是通过`<h1>` - `<h6>` 标签来定义的。<br>
标题是**自带加粗换行**效果。
```html
<h1>这是一个标题</h1>
<h2>这是一个标题</h2>
<h3>这是一个标题</h3>
<h4>这是一个标题</h4>
<h5>这是一个标题</h5>
<h6>这是一个标题</h6>
```
::: details 点击查看效果
![image-20220329090002896](https://workdomain.cloud/picgo/image-20220329090002896.png)
:::

## 段落
HTML 段落是通过标签 `<p>` 来定义的。<br>
段落是自带**换行**效果的。
```html
<p>这是一个段落。</p>
<p>这是另外一个段落。</p>
```
::: details 点击查看效果
![image-20220329090318798](https://workdomain.cloud/picgo/image-20220329090318798.png)
:::

## 文本格式化
给文本加上特定的标签可以实现文本格式化，例如**粗体**,*斜体*,<u>下划线</u>等等
常用的格式化标签有：
- `<b>`：<b>定义粗体文本</b>
- `<em>`：<em>定义着重文字</em>
- `<i>`：<i>定义斜体字</i>
- `<small>`：<small>定义小号字</small>
- `<strong>`：<strong>定义加重语气</strong>
- `<sub>`：<sub>定义下标字</sub>
- `<sup>`：<sup>定义上标字</sup>
- `<ins>`：<ins>定义插入字</ins>
- `<del>`：<del>定义删除字</del>

## 超链接
HTML使用标签`<a>`来设置超文本链接。<br>
通过**target**属性设置超链接在哪里被打开
```html
<a href="https://workdomain.cloud">BaoStudy.com</a>
<a href="https://workdomain.cloud" target="_blank">BaoStudy.com</a>
```
::: details 点击查看效果
无target属性：<a href="https://www.workdomain.cloud">BaoStudy.com</a><br>
有target属性：<a href="https://www.workdomain.cloud" target="_blank">BaoStudy.com</a>
:::

## 图像
在 HTML 中，图像由`<img>`标签定义。<br>
`<img>`是空标签，意思是说，它只包含属性，并且没有闭合标签。<br>
它有两个最基本的属性：**src**(图像的地址)、**alt**(图像的描述,作用是当图像无法加载时可使用描述来替代)
```html
<img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt="baidu">
```
::: details 点击查看效果
图像加载成功：<img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt="baidu"><br>
图像加载失败：<img src="" alt="baidu">
:::

## 表格
- 表格由 `<table>` 标签来定义。
- 每个表格均有若干行（由 `<tr>` 标签定义）
- 每行被分割为若干单元格（由 `<td>` 标签定义
- `<th>`是给表格设置表头
```html
<table>
    <tr>
        <th>表头1</th>
        <th>表头2</th>
    </tr>
    <tr>
        <td>第1行第1列</td>
        <td>第1行第2列</td>
    </tr>
    <tr>
        <td>第2行第1列</td>
        <td>第2行第2列</td>
    </tr>
</table>
```
::: details 点击查看效果
<table>
    <tr>
        <th>表头1</th>
        <th>表头2</th>
    </tr>
    <tr>
        <td>第1行第1列</td>
        <td>第1行第2列</td>
    </tr>
    <tr>
        <td>第2行第1列</td>
        <td>第2行第2列</td>
    </tr>
</table>
:::

## 列表
- 无序列表
    - 无序列表是一个项目的列表，此列项目使用**粗体圆点**进行标记
    - 无序列表使用 `<ul>` 标签，每个列表项始于 `<li>` 标签。
    ```html
    <ul>
    <li>小明</li>
    <li>小红</li>
    </ul>
    ```
    ::: details 点击查看效果
    <ul>
    <li>小明</li>
    <li>小红</li>
    </ul>
    :::
- 有序列表
    - 有序列表也是一列项目，列表项目使用**数字**进行标记。
    - 有序列表使用 `<ol>` 标签，每个列表项始于 `<li>` 标签。
    ```html
    <ol>
    <li>小明</li>
    <li>小红</li>
    </ol>
    ```
    ::: details 点击查看效果
    <ol>
    <li>小明</li>
    <li>小红</li>
    </ol>
    :::

## 块级和内联
大多数 HTML 元素被定义为**块级元素**或**内联元素**。<br>
- 块级元素即标签结束之后**自动换行**的元素，例如`<h1>`, `<p>`, `<ul>`, `<table>`
- 内联元素即标签结束之后**不会换行**的元素,例如`<b>`, `<td>`, `<a>`, `<img>`
- 为了统一使用，定义了两种标签代表这两种元素，即`<div>`(块级元素)、`<span>`(内联元素)
```html
<div>我是块级元素</div>
<div>我是块级元素</div>
<div>我是块级元素</div>
<span>我是内联元素</span>
<span>我是内联元素</span>
<span>我是内联元素</span>
```
::: details 点击查看效果
<div>我是块级元素</div>
<div>我是块级元素</div>
<div>我是块级元素</div>
<span>我是内联元素</span>
<span>我是内联元素</span>
<span>我是内联元素</span>
:::

## 框架
- 通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。
- 可以通过设置属性来调节框架的宽度、高度、边框
```html
<!-- 该URL指向不同的网页。 -->
<iframe src="https://www.workdomain.cloud" width="400" height="300" frameborder="0"></iframe>
```
::: details 点击查看效果
<iframe src="https://www.workdomain.cloud" width="400" height="300" frameborder="0"></iframe>
:::



