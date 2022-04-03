---
title: Js定时器
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

Js 设置定时器有两个方法：`setInterval`、`setTimeout`<br>
Js 清除定时器有两个方法：`clearInterval`、`clearTimeout`

## clearInterval
取消由 setInterval 设置的定时器

## clearTimeout
取消由 setTimeout 设置的定时器

## setInterval
按照指定的周期（以毫秒计）来调用函数或计算表达式。方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭<br>
`setInterval(code,millisec)`:
- code参数为一个周期内执行的函数
- 周期时间间隔，以毫秒计
```js
var m = 0;
const interval = setInterval(()=>{
    console.log('lby是大帅比！！！')
    m += 1000;
    if(m>=5000) clearInterval(interval)
},1000)
//每隔一秒输出,到第5秒清除定时器
//lby是大帅比！！！
//lby是大帅比！！！
//lby是大帅比！！！
//lby是大帅比！！！
//lby是大帅比！！！
```

## setTimesout
在指定的毫秒数后调用函数或计算表达式。
`setTimeout(code,millisec)`:
- code参数为一个周期内执行的函数
- 周期时间间隔，以毫秒计
```js
const interval = setInterval(()=>{
    console.log('lby是大帅比！！！')
},1000)
setTimeout(()=>{
    clearInterval(interval)
},5000)
//每隔一秒输出,到第5秒执行清除定时器
//lby是大帅比！！！
//lby是大帅比！！！
//lby是大帅比！！！
//lby是大帅比！！！
//lby是大帅比！！！
```
