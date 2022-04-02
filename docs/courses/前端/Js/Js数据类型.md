---
title: Js数据类型
date: '2022-3-31'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

::: tip 
js的数据类型分为**基本类型**和**引用类型**
:::

## 基本类型
六大基本类型：
- 字符串（String）
- 数字(Number)
- 布尔(Boolean)
- 对空（Null）
- 未定义（Undefined）
- Symbol(es6提出的一种新的原始数据类型，表示**独一无二**的值)

## 引用类型
- 对象(Object)
- 数组(Array)
- 函数(Function)
- 正则(RegExp)
- 日期(Date)

## 声明各种类型
```js
//声明字符串类型，字符串是有''包裹着的
var str = '123';
//声明数字类型
var number = 123;
//声明布尔类型
var boolean = true;
//声明null
var empty = null;
//声明undefined
var nodefined = undefined;
//声明Symbol
var symbol = Symbol('id');
//声明对象Object
var ob = {};
//声明数组Array
var arr = [];
//声明函数Function
var func = function(){};
//声明正则对象
var regexp = /.*/; //正则对象也可以使用构造函数来构建
//声明日期对象
var date = new Date();
```

## 判断类型的方法
- typeof
- 


## 弱类型语言的优缺点
Js属于一门弱类型的动态编程语言，什么是弱类型呢？<br>
弱类型就是定义变量的时候**不必声明它的类型**，即Js内置的**v8引擎**会动态的分析你的变量类型<br>
那么这就带来了许多隐患和便捷，由于没有变量类型的约束，容易在生产环境中出现不可预知的错误。<br>
而**TypeScript**即Ts完美的解决了这种问题，Ts属于一门面向对象的强类型语言<br>
所以看Vue、React等源码为什么看不懂，因为他们的源码都是用Ts来编写的，然后经过编译后才得到Js
