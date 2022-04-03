---
title: Js Math
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## Math对象
- Math 对象用于执行数学任务。
- Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()。

## 常用的方法
### ceil(x)
对数进行上舍入。

### floor(x)
对 x 进行下舍入。

### round(x)
四舍五入。

### sqrt(x)
返回数的平方根。

### random()
返回 0 ~ 1 之间的随机数。

### pow(x,y)
返回 x 的 y 次幂。

### max(x,y,z,...,n)
返回 x,y,z,...,n 中的最高值。

### min(x,y,z,...,n)
返回 x,y,z,...,n中的最低值。

## 示例
```js
Math.ceil(1.5)  //2
Math.ceil(1.3)  //2

Math.floor(1.5)  //1
Math.floor(1.7)  //1

Math.round(1.3)  //1
Math.round(1.5)  //2
Math.round(1.7)  //2

Math.random()*10  //2
Math.random()*100  //60
Math.random()*1000  //400

Math.sqrt(4)  //2
Math.pow(2,2)  //4

Math.max(1,2,3,4)  //4
Math.min(1,2,3,4)  //1
```