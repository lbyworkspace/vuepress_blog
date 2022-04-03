---
title: Js DOM
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## 什么是DOM？
DOM 是Document Object Model( 文档对象模型 )的缩写。<br>
JavaScript把html的每个元素作一个JavaScript的对象，即Dom对象

## Document 对象
Document 对象是 HTML 文档的根节点<br>
Document 对象使我们可以从**脚本中对 HTML 页面中的所有元素进行访问**。
下面介绍该对象常用的方法
### addEventListener()
向文档添加事件监听器

### removeEventListener()
移除文档中的事件监听器(由 addEventListener() 方法添加)

### getElementsByClassName()
返回文档中所有指定类名的元素集合，作为 NodeList 对象。

### getElementById()
返回对拥有指定 id 的第一个对象的引用。

### getElementsByName()
返回带有指定名称的对象集合。

### getElementsByTagName()
返回带有指定标签名的对象集合。

### querySelector()
返回文档中匹配指定的CSS选择器的第一元素

### querySelectorAll()
返回文档中匹配的CSS选择器的所有元素节点列表

