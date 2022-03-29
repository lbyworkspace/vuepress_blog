---
title: Html表单
date: '2022-3-29'
categories:
 - 系列教程
tags:
 - 前端
 - Html
---

## 什么是表单？
HTML 表单用于收集不同类型的**用户输入**。<br>
最常见的表单元素即为我们平时登陆输入账号密码的**输入框**

## 表单
- 表单是一个包含表单元素的区域。
- 表单元素是允许用户在表单中输入内容,比如：文本域(textarea)、下拉列表、单选框(radio-buttons)、复选框(checkboxes)等等。
- 表单有两个基本的属性：**action**(表单内的值最终发送到哪个地址做校验)，**method**(发送请求的方式)
- 表单使用表单标签 `<form>` 来设置:
```html
<form action="" method="">
...
表单元素
...
</form>
```

## 表单元素
表单元素就有很多了，例如`<input>`、`<select>`、`<textarea>`、`<button>`等等

### input
用得最多的肯定就是input了，input可以有很多种类型
- `type`属性就是input的类型，有text、password、radio、button、date、file等等，不同类型都有不同的作用
- `placeholder`属性是占位符的意思，即不输入时显示的内容，一般用来提示用户
- `name`属性是在**同一表单**中用来**唯一标识**表单元素的属性
- `value`属性即input的默认值
```html
<!-- 文本输入框 -->
输入文本：<input type="text" placeholder="请输入文本" name="text"><br>
<!-- 密码输入框 -->
输入密码：<input type="password" placeholder="请输入密码" name="password"><br>
请选择性别：
<input type="radio" name="sex" value="man">男
<input type="radio" name="sex" value="woman">女
```

::: details 点击查看效果 
输入文本：<input type="text" placeholder="请输入文本" name="text"><br>
输入密码：<input type="password" placeholder="请输入密码" name="password"><br>
请选择性别：
<input type="radio" name="sex" value="man">男
<input type="radio" name="sex" value="woman">女
:::

### label
- `<label>` 标签为 input 元素定义标注（标记）。
- label 元素不会向用户呈现任何特殊效果。可以理解为对表单元素的解释
- `<label>` 标签的 for 属性应当与相关元素的 id 属性相同。
```html
<label for="account">账号</label>
<input type="text" id="account" placeholder="请输入账号"><br>
<label for="password">密码</label>
<input type="password" id="password" placeholder="请输入密码">
```
::: details 点击查看效果 
<label for="account">账号</label>
<input type="text" id="account" placeholder="请输入账号"><br>
<label for="password">密码</label>
<input type="password" id="password" placeholder="请输入密码">
:::


### textarea
- `<textarea>` 标签定义一个多行的文本输入控件。
- 可以通过 cols 和 rows 属性来规定 textarea 的尺寸大小
```html
<textarea cols="30" rows="8" placeholder="请输入内容"></textarea>
```
::: details 点击查看效果
<textarea cols="30" rows="8" placeholder="请输入内容"></textarea>
:::

### select
- `<select>` 元素用来创建下拉列表。
- `<select>` 元素中的 `<option>` 标签定义了列表中的可用选项。
```html
<select>
    <option value="man">男</option>
    <option value="woman">女</option>
</select>
```
::: details 点击查看效果
请选择性别：
<select>
    <option value="man">男</option>
    <option value="woman">女</option>
</select>
:::

### button
- `<button>` 标签定义一个按钮。
- 在 `<button>` 元素内部，您可以放置内容，比如文本或图像。这是该元素与使用 `<input>` 元素创建的按钮之间的不同之处。
```html
<button type="button">点我!</button>
```
::: details 点击查看效果
<button type="button">点我!</button>
:::

### submit/reset
- 类型为submit的input为一个表单的提交按钮
- 类型为reset的input为一个表单的重置按钮
- submit的作用为把表单内所有元素的值一起提交到表单指定的地址中
- reset的作用为把表单内所有元素的值全部重置了
```html
<form action="" method="get">
    <input type="text" name="account" placeholder="账号">
    <input type="password" name="password" placeholder="密码">
    <input type="reset" value="重置">
    <input type="submit" value="登录">
</form>
```
::: details 点击查看效果 
<form action="" method="get">
    <input type="text" name="account" placeholder="账号">
    <input type="password" name="password" placeholder="密码">
    <input type="reset" value="重置">
    <input type="submit" value="登录">
</form>
点击登录可以看见地址栏上面出现刚刚你输入的账号和密码信息<br>
<img src="https://workdomain.cloud/picgo/image-20220329102725893.png">
:::
