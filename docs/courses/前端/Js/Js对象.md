---
title: Js对象
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## 所有事物都是对象
JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...<br>
此外，JavaScript 允许自定义对象。

## Object对象
它是所有原型链的底端，一切对象最终将会指向Object<br>
每个实例对象都会有一个__proto__属性，它是指向当前类型的原型(prototype),而这个原型对象又有自己的原型，直到某个对象的原型为 null 为止(Object的原型即为null)
```js
var ob = {}
ob instanceof Object //true
ob.__proto__ == Object.prototype //true
var arr = [1,2,3]
arr instanceof Array //true
arr instanceof Object //true
arr.__proto__ == Array.prototype //true
arr.__proto__ == Object.prototype //false
```
接下来介绍Object对象常用的方法
### assign
- 把一个或者多个对象上的属性合并到同一个对象上，重复的属性会以最后一个为准
- assign属于深拷贝(后续章节会讲)
```js
var ob1 = {name:'lby',age:19}
var ob2 = {name:'hhh',age:20,hhh:'2121'}

var ob3 = Object.assign(ob1,ob2) //{name: 'hhh', age: 20, hhh: '2121'}
console.log(ob1) //{name: 'hhh', age: 20, hhh: '2121'}  ob1也被修改了

//要想原来对象不被修改可以使用一个空对象作为第一个参数
var ob3 = Object.assign({},ob1,ob2) //{name: 'hhh', age: 20, hhh: '2121'}
console.log(ob1) //{name:'lby',age:19}
```

### keys
遍历对象身上的所有属性并以数组的形式返回
```js
var ob = {name:'lby',age:19}
console.log(Object.keys(ob)) //['name','age']
```

### defineProperty
给一个对象定义属性
defineProperty(obj,prop,descriptor):
- `obj`：必需，要定义或者修改属性的对象
- `prop`：必需，要定义或者修改的属性名称
- `descriptor`：必需，目标属性所拥有的特性
    - `value`：属性的值，默认为undefined
    - `writable`：属性的值是否可以被重写，默认为false
    - `enumerable`：此属性是否可以被枚举(使用for...in或Object.keys()),默认为false
    - `configurable`：是否可以通过delete删除该属性，默认为false
```js
var ob = {}
Object.defineProperty(ob,'name',{
    value:'lby',
    writable:false,   //不可重写
    enumerable:true,
    configurable:false  //不可删除
})
Object.defineProperty(ob,'age',{
    value:20,
    writable:true,
    enumerable:false,  //不可枚举
    configurable:true
})

ob.name = 'hhh'
console.log(ob.name)  //'lby'
Object.keys(ob) //['name']
delete ob.name  //fasle  false表示删除失败
```

### hasOwnProperty
判断某个对象是否有某个属性
```js
var ob = {
    name:'lby'
}
ob.hasOwnProperty('name') //true
ob.hasOwnProperty('age') //false
```



