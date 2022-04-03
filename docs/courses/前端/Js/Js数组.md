---
title: Js数组
date: '2022-4-3'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## Array对象
Array 对象用于在变量中存储多个值，第一个数组元素的索引值为 0，第二个索引值为 1，以此类推
```js
var arr = [1,2,3]
```

## Array方法
接下来介绍Array对象常用的方法
### concat(arr)
连接两个或更多的数组，并返回结果。
```js
var arr = [1,2,3]
arr.concat([4,5,6]) //[1,2,3,4,5,6]
```

### find(callback)
- 返回符合传入测试（函数）条件的数组元素。
- callback函数为`(item,index,arr)=>{}`,item为当前的值，index为当前的索引值，arr为当前的数组
```js
var arr = [1,2,3]
console.log(arr.find(v=>v==1)) //1
console.log(arr.find(v=>v==4)) //undefined
```

### findIndex(callback)
- 返回符合传入测试（函数）条件的数组元素索引。
- callback函数为`(item,index,arr)=>{}`,item为当前的值，index为当前的索引值，arr为当前的数组
```js
var arr = [1,2,3]
console.log(arr.findIndex(v=>v==1)) //0
console.log(arr.findIndex(v=>v==4)) //-1
```

### forEach(callback)
- 数组每个元素都执行一次回调函数
- callback函数为`(item,index,arr)=>{}`,item为当前的值，index为当前的索引值，arr为当前的数组
```js
var arr = [1,2,3]
arr.forEach((item,index)=>{
    console.log(`我是第${index}个,我的值是${item}`)
})
//我是第0个,我的值是1
//我是第1个,我的值是2
//我是第2个,我的值是3
```

### indexOf(item,start?)
搜索数组中的元素并返回它首次出现的位置，不存在返回-1。
```js
var arr = [1,2,2,4]
arr.indexOf(2)  //1
arr.indexOf(5)  //-1
```

### map(callback)
- 通过指定函数处理数组的每个元素，并返回处理后的数组
- callback函数为`(item,index,arr)=>{}`,item为当前的值，index为当前的索引值，arr为当前的数组
```js
var arr = [1,2,3]
arr.map(v=>{return v+1})  //[2,3,4]
```

### push(item)
向数组的末尾添加一个或更多元素，并返回新的长度。
```js
var arr = [1,2,3]
arr.push(5) //4
console.log(arr) //[1,2,3,5]
```

### unshift(item)
向数组的开头添加一个或更多元素，并返回新的长度。
```js
var arr = [1,2,3]
arr.unshift(0) //4
console.log(arr) //[0,1,2,3]
```

### pop()
删除数组的最后一个元素并返回删除的元素。
```js
var arr = [1,2,3]
arr.pop() //3
console.log(arr) //[1,2]
```

### shift()
删除数组的第一个元素并返回删除的元素。
```js
var arr = [1,2,3]
arr.shift() //1
console.log(arr) //[2,3]
```

### sort(callback)
- 对原数组的元素进行排序
- callback函数为`(a,b)=>{}`,a为前一项的值，b为后一项的值
```js
var arr = [4,7,3]
arr.sort((a,b)=>{return b - a})  //[7,4,3]
```

### slice(start,num,...items)
删除数组指定位置的元素，可以指定删除长度，删除后可以在删除的位置填充元素,返回删除的元素
- `start`:删除元素的位置
- `num`：删除的个数
- `...items`：填充的元素
```js
var arr = [1,2,3]
arr.splice(1,2,5,6,7) //[2,3]
console.log(arr) //[1,5,6,7]
```

### join(str)
- 把数组的所有元素通过一个符号连接成一个字符串。
```js
var arr = [1,2,3]
arr.join('-') //'1-2-3'
```

### isArray(arr)
判断对象是否为数组。
```js
var arr = [1,2,3]
Array.isArray(arr) //true
```

### filter(callback)
- 检测数值元素，并返回符合条件所有元素的数组。
- 数组中每个元素都会执行callback函数，函数要return一个布尔值，只有为才为true才会出现在最后返回的数组中
```js
var arr = [1,2,3,4]
arr.filter(v=>{if(v>=3) return true}) //[3,4]
```

### reverse()
反转数组的元素顺序。
```js
var arr = [1,2,3]
arr.reverse()  //[3,2,1]
```