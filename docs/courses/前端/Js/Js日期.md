---
title: Js日期
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## 创建日期
Date 对象用于处理日期和时间。可以通过 new 关键词来定义 Date 对象。<br>
有四种方式初始化日期:
```js
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

new Date();
new Date(1648981929000);
new Date('Sun Apr 03 2022 18:32:09 GMT+0800 (中国标准时间)');
new Date(2022,3,3,18,32,9)
```

## Date对象
接下来介绍Date对象常用方法
```js
var date = new Date() //Sun Apr 03 2022 18:44:40 GMT+0800 (中国标准时间)
console.log(date.getFullYear()) //2022
console.log(date.getMonth() ) //3  注意月份是从0开始的，所以会比实际的月份少1
console.log(date.getDate()) //3
console.log(date.getHours()) //18
console.log(date.getMinutes()) //44
console.log(date.getSeconds()) //40
console.log(date.getMilliseconds()) //689
```

