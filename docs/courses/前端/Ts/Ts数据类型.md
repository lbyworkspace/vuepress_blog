---
title: Ts数据类型
date: '2022-4-17'
categories:
 - 教程
tags:
 - 前端 
 - TypeScript
---

## ts中定义变量类型
```ts
let 变量名: 变量类型 = 初始化值;
//or
let 变量名: 变量类型 | undefined;
变量名 = 变量值;
```

## 布尔类型
```ts
let flag: boolean = true;
console.log(flag);
```

## 数字类型
```ts
let num: number = 123;
console.log(num);
```

## 字符串类型
```ts
let str: string = "Hello,TypeScript";
console.log(str);
```

## 数组类型
以数字类型为例
```ts
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr);
//or
let arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr);
```

## 元组类型
元组属于数组的一种，元组中的元素可以**不必全部保持类型一致**
```ts
let user: [number, string];
let id = 123;
let name = "lby";
let boolean = true;

user = [id, name];      // 正确
user = [id, boolean]; // 错误
```

## 枚举类型
```
enum 枚举名 {
    标识符[= 整型常数/字符串],
    标识符[= 整型常数/字符串], 
    ...
    标识符[= 整型常数/字符串],
};
```

