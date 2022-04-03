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
### typeof
- 检测基本数据类型时没有问题，但是当其对引用类型进行检测时，会返回object，这样就无法进行精准的判断，这样也不足为奇，因为所有的对象其**原型链**最终都指向了object
- 需要注意`null=>object`,`Funtion=>function`
```js
console.log(typeof 123);  //'number'
console.log(typeof '123');  //'string'
console.log(typeof true);  //'boolean'
console.log(typeof null);  //'object'
console.log(typeof undefined);  //'undefined'
console.log(typeof Symbol('id'));  //'symbol'
console.log(typeof {});  //'object'
console.log(typeof []);  //'object'
console.log(typeof function(){});  //'function'
console.log(typeof /.*/);  //'object'
console.log(typeof new Date());  //'object'
```

### instanceof
- 用来判断A是否是B的实例，是的话就返回true，不是就返回false。当 A 的 _proto_ 指向 B 的 prototype 时，就认为A就是B的实例。
- instanceof只能用来检测两个对象是否在一条原型链上，并不能检测出对象的具体类型。
- instanceof只能检测**引用类型**,基本类型不属于对象创建的实例
```js
var arr = [1,2,3]
//Array的原型链是Array->Object->null
arr instanceof Array //true
arr instanceof Object //true
//Function的原型链是Function->Object->null
arr instanceof Function //false

var str1 = '123'
var str2 = new String('123');
str1 instanceof String //false
str2 instanceof String //true
``` 

### Object.prototype.toString()
toString方法默认返回其调用者的具体类型,**this指向的对象类型**,所以我们可以**使用`call()`方法**来改变其指向的this
```js
Object.prototype.toString().call([1,2,3]) //'[object Array]'
Object.prototype.toString().call(123) //'[object Number]'
Object.prototype.toString().call('123') //'[object String]'
Object.prototype.toString().call(true) //'[object Boolean]'
Object.prototype.toString().call(()=>{}) //'[object Function]'
```



## 弱类型语言的优缺点
Js属于一门弱类型的动态编程语言，什么是弱类型呢？<br>
弱类型就是定义变量的时候**不必声明它的类型**，即Js内置的**v8引擎**会动态的分析你的变量类型<br>
那么这就带来了许多隐患和便捷，由于没有变量类型的约束，容易在生产环境中出现不可预知的错误。<br>
而**TypeScript**即Ts完美的解决了这种问题，Ts属于一门面向对象的强类型语言<br>
所以看Vue、React等源码为什么看不懂，因为他们的源码都是用Ts来编写的，然后经过编译后才得到Js
