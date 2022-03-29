---
title: Html简介
date: '2022-3-28'
categories:
 - 教程
tags:
 - 前端
 - Html
---

## 什么是HTML?
HTML 是用来描述网页的一种语言。
- HTML 指的是超文本标记语言: **H**yper **T**ext **M**arkup **L**anguage
- HTML 不是一种编程语言，而是一种标记语言
- 标记语言是一套标记标签 (markup tag)
- HTML 使用标记标签来描述网页
- HTML 文档包含了HTML 标签及文本内容
- HTML文档也叫做 web 页面

## Html结构
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>学习Html</title>
</head>
<body>
 
<h1>我的第一个标题</h1>
 
<p>我的第一个段落。</p>
 
</body>
</html>
```
- `<!DOCTYPE html>` 声明为 HTML5 文档
- `<html>` 元素是 HTML 页面的根元素
- `<head>` 元素包含了文档的元（meta）数据，如 `<meta charset="utf-8">` 定义网页编码格式为 utf-8。
- `<title>` 元素描述了文档的标题
- `<body>` 元素包含了可见的页面内容
- `<h1>` 元素定义一个大标题
- `<p>` 元素定义一个段落