---
title: Js深浅拷贝
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## 引出问题
```js
let a = {
    age:1
}
let b = a
a.age = 2
console.log(b.age) //2
```
明明改变的是a.age属性的值，为什么b也跟着改变了？下面我们就来讲解一下深浅拷贝的问题

## 堆栈内存分配
想要深入了解深浅拷贝，我们还得了解一些关于堆栈的相关概念<br>
在Js中数据类型分为**基本数据类型**和**引用数据类型**<br>
- 基本数据类型：它是以key/value的形式存储在栈内存中的，例如`let a = 1;`
![image-20220404112430061](https://workdomain.cloud/picgo/image-20220404112430061.png)<br>
当你b=a复制时，栈内存会新开辟一个内存，例如这样：<br>
![image-20220404112515687](https://workdomain.cloud/picgo/image-20220404112515687.png)<br>
所以当你此时修改a=2，虽然对b并不会造成影响，但这也算不上深拷贝，**因为深拷贝本身只针对较为复杂的object类型数据**。
- 引用数据类型：实际值储存在堆内存中，**而栈内存中储存的是堆内存中的引用地址**<br>
![image-20220404112853164](https://workdomain.cloud/picgo/image-20220404112853164.png)
当b=a进行拷贝时，其实复制的是a的引用地址，而并非堆里面的值。<br>
![image-20220404113055681](https://workdomain.cloud/picgo/image-20220404113055681.png)
而当我们a[0]=1时进行数组修改时，由于a与b指向的是同一个地址，所以自然b也受了影响，这就是所谓的浅拷贝了。<br>
![image-20220404113038560](https://workdomain.cloud/picgo/image-20220404113038560.png)
那要是在堆内存中也开辟一个新的内存专门为b存放值，就像基本类型那样，岂不就达到**深拷贝**的效果了<br>
![image-20220404113014940](https://workdomain.cloud/picgo/image-20220404113014940.png)

## 深浅拷贝
深拷贝和浅拷贝是只针对**Object**和**Array**这样的引用数据类型的。
- 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。
- 深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。

### 浅拷贝的实现方式
`Object.assign()`:方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象
::: warning
Object.assign()方法拷贝的对象第一层属于**深拷贝**
:::
```js
//拷贝一个对象
var ob1 = {name:'lby',a:{age:21}}  
var ob2 = Object.assign({},ob1)  //{name:'lby',a:{age:21}}

ob2.name = 'hhh'
ob2.a.age = 24
console.log(ob1.name) //'lby'
console.log(ob2.a.age)  //24

//拷贝一个数组
var arr1 = [1,{a:2},3,4]
var arr2 = Object.assign([],arr1)  //[1,{a:2},3,4]

arr1.splice(0,1) //[{a:2},3,4]
console.log(arr2)  //[1,{a:2},3,4]

arr1[0].a = 10
console.log(arr2)  //[1,{a:10},3,4]
```

### 深拷贝的实现方法
`JSON.parse(JSON.stringify())`:用JSON.stringify将对象转成JSON字符串，再用JSON.parse()把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝。
::: warning 
这种方法虽然可以实现数组或对象深拷贝,**但不能处理函数**
:::
```js
var ob1 = {name:'lby',a:{age:21},func:function(){}} 
var ob2 = JSON.parse(JSON.stringify(ob1))  //{name:'lby',a:{age:21}}   函数不能处理

ob1.name = 'hhh'
ob1.a.age = 24

console.log(ob1)  //{name:'hhh',a:{age:24},func:function(){}} 
console.log(ob2)  //{name:'lby',a:{age:21}} 
```