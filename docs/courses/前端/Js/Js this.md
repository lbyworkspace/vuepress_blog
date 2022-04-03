---
title: Js this
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

::: tip
面向对象语言中 this 表示**当前对象的一个引用**
:::

在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变
- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。

## 具体示例
```js
var person = {
    name:'lby',
    func:function(){
        console.log(this)
    }
}
person.func() //{name: 'lby', func: ƒ} 方法中的this指向所属对象

var that = this
console.log(this) //window对象

function func(){
    console.log(this)
}
func() //window对象

'use strict'
function func(){
    console.log(this)
}
func() //undefined  严格模式下this是未定义的
```

## call、apply、bind
相同点：
- 三个方法都是用来改变this的指向
- 方法的第一个参数都是this指向的对象
不同点：
- `call()`是直接把参数放进后面的
- `apply()`所有参数都必须放在一个数组里面传进去
- `bind()`除了返回的是一个函数，其他和call是一样的
```js
var ob1 = {
    name:'lby',
    age:21,
    func:function(to,from){
        console.log(`我叫${this.name},我今年${this.age}岁了,我来自${to},我要去${from}`)
    }
}
var ob2 = {
    name:'hjd',
    age:8,
    func:function(to,from){
        console.log(`我叫${this.name},我今年${this.age}岁了,我来自${to},我要去${from}`)
    }
}

ob1.func.call(ob2,'福建','上海'); //我叫hjd,我今年8岁了,我来自福建,我要去上海
ob1.func.apply(ob2,['福建','上海']); //我叫hjd,我今年8岁了,我来自福建,我要去上海
ob1.func.bind(ob2,'福建','上海')(); //我叫hjd,我今年8岁了,我来自福建,我要去上海

ob2.func.call(ob1,'广东','上海'); //我叫lby,我今年21岁了,我来自广东,我要去上海
ob2.func.apply(ob1,['广东','上海']); //我叫lby,我今年21岁了,我来自广东,我要去上海
ob2.func.bind(ob1,'广东','上海')(); //我叫lby,我今年21岁了,我来自广东,我要去上海
```



