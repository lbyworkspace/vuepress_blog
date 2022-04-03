---
title: Js字符串
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## String对象
String 对象用于处理文本（字符串）
```js
var str1 = '123'
var str2 = new String('123')
```

## String方法
接下来介绍String对象常用的方法
### concat(str)
`string.concat(string1, string2, ..., stringX)`,连接两个或更多字符串，并返回新的字符串
```js
var str1 = '我是'
var str2 = str1.concat('lby')
console.log(str2)  //我是lby
```

### indexOf(item)
查找某个指定的字符串值在字符串中首次出现的位置,返回索引值，不存在返回-1
```js
var str = '123'
console.log(str.indexOf('2')) //1
console.log(str.indexOf('4')) //-1
```

### repalce(search,replace)

- 在字符串中查找匹配的子串并替换。
- 第一个参数可以是查找的字符串也可以是正则表达式
- 返回替换后的字符串，原字符串不变
```js
var str = '12345'
console.log(str.replace('34','')) //125
console.log(str.replace(/5$/,'')) //1234
```

### substring(from,to?)
提取字符串中两个指定的索引号之间的字符，索引值从0开始
```js
var str = '你好，我叫lby'
console.log(str.substring(5,8)) //lby
```

### trim()
去除字符串两边的空白。
```js
var str = '  你好   '
console.log(str.trim()) //你好
```

### split(str)
把字符串分割为字符串数组，参数为通过什么符号进行分割
```js
var world = 'happy-day'
console.log(world.split('-'))  //['happy','day']
```

### startsWith(str)
查看字符串是否以指定的子字符串开头
```js
var str = '123456'
str.startWith('123')  //true
str.startWith('23')  //false
```

### endsWith(str)
判断当前字符串是否是以指定的子字符串结尾的(区分大小写)
```js
var str = '123456'
str.startWith('456')  //true
str.startWith('45')  //false
```