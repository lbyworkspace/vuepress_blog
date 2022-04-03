---
title: Js BOM
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## 什么是BOM？
BOM即 浏览器对象模型(Browser Object Model)的缩写。<br>
浏览器对象包括
- Window(窗口)
- Navigator(浏览器)
- Screen (客户端屏幕)
- History(访问历史)
- Location(浏览器地址)

## Window对象
Window 对象表示浏览器中打开的窗口<br>
可以打开F12输入window即可看到它的属性和方法太多了<br>

这里就讲常用的
### 属性
#### innerHeight
返回窗口的文档显示区的高度。
#### innerWidth
返回窗口的文档显示区的宽度。
#### outerHeight
返回窗口的外部高度，包含工具条与滚动条。
#### outerWidth
返回窗口的外部宽度，包含工具条与滚动条。
#### localStorage
在浏览器中存储 key/value 对。没有过期时间。
#### sessionStorage
在浏览器中存储 key/value 对。 在关闭窗口或标签页之后将会删除这些数据。

### 方法
#### alert()
显示带有一段消息和一个确认按钮的警告框。
#### confirm()
显示带有一段消息以及确认按钮和取消按钮的对话框。
#### prompt()
显示可提示用户输入的对话框。
#### scrollTo()
把内容滚动到指定的坐标。

## Navigator 对象
Navigator 对象包含有关浏览器的信息。

## Screen 对象
Screen 对象包含有关客户端显示屏幕的信息。

## History 对象
History 对象包含用户（在浏览器窗口中）访问过的 URL。<br>
History 对象是 window 对象的一部分，可通过 `window.history` 属性对其进行访问。
### 属性
#### length
返回历史列表中的网址数
### 方法
#### back()
加载 history 列表中的前一个 URL
#### forward()
加载 history 列表中的下一个 URL
#### go()
加载 history 列表中的某个具体页面

## Location 对象
Location 对象包含有关当前 URL 的信息。<br>
Location 对象是 window 对象的一部分，可通过 `window.location.xxx` 格式的相关属性对其进行访问。
### 属性
#### hash
返回一个URL的锚部分
#### host
返回一个URL的主机名和端口
#### protocol
返回一个URL协议
#### href
返回完整的URL
### 方法
#### reload()
重新载入当前文档

## 存储对象
Web 存储 API 提供了 sessionStorage （会话存储） 和 localStorage（本地存储）两个存储对象来对网页的数据进行添加、删除、修改、查询操作。
- localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
- sessionStorage 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
- 通过`window.localStorage`或`window.sessionStorage`调用
    - key(n)：返回存储对象中第 n 个键的名称
    - getItem(keyname)：返回指定键的值
    - setItem(keyname, value)：添加键和值，如果对应的值存在，则更新该键对应的值。
    - removeItem(keyname)：移除键
    - clear()：清除存储对象中所有的键