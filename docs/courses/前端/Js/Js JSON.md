---
title: Js JSON
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## 什么是 JSON?
- JSON 英文全称 **J**ava**S**cript **O**bject **N**otation
- JSON 是一种轻量级的数据交换格式。
- JSON是独立的语言
- JSON 易于理解。

## JSON 语法规则
- 数据为 键/值 对。
- 数据由逗号分隔。
- 大括号保存对象
- 方括号保存数组

## 内置对象JSON
在JavaScript中内置JSON对象，它有两个内置方法：`parse()`、`stringify()`

### parse()
用于将一个 JSON 字符串转换为 JavaScript 对象。
```js
var jsonStr = '{"name":"lby","age":21}'
console.log(JSON.parse(jsonStr)) //{name: 'lby', age: 21}
```

### stringify()
用于将 JavaScript 值转换为 JSON 字符串。
```js
var ob = {
    name:'lby',
    age:21
}
console.log(JSON.stringify(ob))//'{"name":"lby","age":21}'
```