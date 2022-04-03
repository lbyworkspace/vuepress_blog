---
title: Js Promise
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

::: tip
由于 Promise 是 ES6 新增加的，所以一些旧的浏览器并不支持
:::

## 异步编程
在学习Promise之前要先聊聊**异步(Asynchronous,async)**和**同步(Synchronous,sync)**的概念<br>
同步就是按照程序代码的顺序执行，而异步不按照代码顺序执行，异步的执行效率更高<br>
同步是在**一个线程**内进行的，而异步是在**多个线程**内进行的
![image-20220403141713282](https://workdomain.cloud/picgo/image-20220403141713282.png)

## Promise
Promise 是一个 ECMAScript 6 提供的类，目的是更加优雅地书写**复杂**的异步任务。
语法：`new Promise((resolve,reject)=>{})`
- Promise对象的创建是接受一个函数作为参数
- **Promise参数函数的代码块属于同步代码**
- 在匿名函数中有两个参数
    - `resolve()`：成功时才调用,可以放置一个参数用于向下一个 then 传递一个值
    - `reject()`：失败时才调用,参数中一般会传递一个异常给之后的 catch 函数用于处理异常
- `.then()`：可以将参数中的函数添加到当前 Promise 的正常执行序列中
- `.catch()`：设定 Promise 的异常处理序列
- `.finally()`：在 Promise 执行的最后一定会执行的序列
- `.then()` 传入的函数会按顺序依次执行，有任何异常都会直接跳到 `catch` 序列
```js
new Promise((resolve,reject)=>{
    var num = 1
    console.log(`正在执行序列${num}`)
    resolve(num+1)
}).then(res=>{
    console.log(`正在执行序列${res}`)
    return res+1
}).then(res=>{
    throw `序列${res}发生错误`
}).then(res=>{
    console.log(`正在执行序列${res}`)
    return res+1
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('Promise完成')
})
//正在执行序列1
//正在执行序列2
//序列3发生错误
//Promise完成
```

## async/await
- `async`关键字是用在函数function前面的，声明该函数为异步函数
- `await`关键字是使代码执行顺序会停止在await处，等等异步完成后才继续执行下面的代码，**await后面只能接Promise对象**，不然没有意义
- **async和await必须一起使用**
```js
function syncTest(){
    new Promise((resolve,reject)=>{
        console.log(111); //这里属于同步代码，切记
        resolve();
    }).then(res=>{
        console.log(333);
    })
    console.log(222);
}
syncTest();
//111
//222
//333
async function asyncTest(){
    await new Promise((resolve,reject)=>{
        console.log(111); //这里属于同步代码，切记
        resolve();
    }).then(res=>{
        console.log(333);
    })
    console.log(222);
}
asyncTest();
//111
//333
//222
```