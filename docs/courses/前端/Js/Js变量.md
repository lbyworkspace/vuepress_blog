---
title: Js变量
date: '2022-3-31'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

::: tip
在es5时声明变量用的是`var`，在后来的es6中提出了新的变量声明方式`let`、`const`
:::

## var和let
var和let都是用来声明变量的
但他们的区别还是很大的：
- var是存在变量提升的，let不存在
- var的作用域是全局的，而let的作用域只在块级`{}`内
- 在相同的用作用域下let不能有相同的变量，否则报错，而var中则可以出现相同变量名，且不会报错。
```js
(function(){
    //-------var变量提升,不报错-----------
    console.log(a); //undefined
    var a = 1;
    console.log(a); //1

    //------let不能变量提升---------
    console.log(b); //报错Cannot access 'b' before initialization
    let b = 2;
    console.log(b);
}());

//var的变量提升等同于下面这个例子
(function(){
    var a;
    console.log(a); //undefined 因为没有初始化所以为undefined
    a = 1;
    console.log(a); //1
}());
```

## const
const是用来声明常量，且必须在声明变量时进行**初始化**
```js
const name = '小明';
const age = 21;
```