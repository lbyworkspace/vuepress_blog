---
title: Js函数
date: '2022-3-31'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

::: tip
Js函数**Function**属于Js的**引用数据类型**
:::

## 函数语法
- 函数就是包裹在花括号中的代码块，前面使用了关键词 function
- 当调用该函数时，会自动执行函数内的代码
- 函数的形参在调用时要一一对应(除非形参有默认值)
```js
//定义函数
function functionName(params1,params2,...)
{
    // 执行代码
}

//调用函数
functionName(params1,params2,...)
```

## 函数的返回值
- 如果我们希望函数有返回值，则用 `return` 语句
- 在函数的执行中遇到 `return` 语句时，函数会停止执行，并返回指定的值。
```js
function test(){
    console.log('return之前的输出')
    return '你好';
    console.log('return之后的输出')
}

test(); //return之前的输出
```

## 函数形参默认值
- 形参默认值即在定义函数的同时给形参初始化一个值
- 如果调用的时候**没有传值**，则使用默认值
- 如果调用的时候**有传值**，则该值会覆盖默认值
```js
function test(name = 'lby'){
    console.log(name);
}

test(); //lby
test('hhh') //hhh
```

## 箭头函数
- 用法：`const test = ()=>{}`
- 箭头函数是es6提出的函数新写法，即 `const test = ()=>{}` 等价于 `function test(){}`
- 可以说`()` 等于 `function test()`,后面的`{}`代表**函数体**
- 有参数的时候还可以简写为 `params1,params2,... =>{}`
- 箭头函数的this没有自己的this，它的this是继承而来的，所以它的this会递归指向最外层的对象
- 推荐大家要习惯性用箭头函数，能大大的提高自己的效率
![image-20220331211916072](https://workdomain.cloud/picgo/image-20220331211916072.png)

## 函数自执行
- 函数自执行的用法：`(function(){....}())`
- 自执行函数无需调用即可自动执行
```js
(function(){
    console.log('你好')
}())
//你好
```