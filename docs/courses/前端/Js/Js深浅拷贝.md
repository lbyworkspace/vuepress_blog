---
title: Js深浅拷贝
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## 抛出问题
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