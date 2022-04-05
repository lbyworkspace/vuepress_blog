---
title: Vue3 Composition API
date: '2022-4-5'
categories:
 - 教程
tags:
 - 前端 
 - Vue
---

## 拉开序幕的setup()
- `setup`为Vue3.0中一个新的配置项，值为一个函数。
- `setup`是所有Composition API（组合API）**"表演的舞台"**。
- 组件中所用到的：数据、方法等等，均要配置在setup中
- setup函数的两种返回值:
    - 若返回一个对象，则对象中的**属性、方法**, 在模板中均可以直接使用。（重点关注！）
    - 若返回一个渲染函数：则可以自定义渲染内容。（了解） (不常用)
```vue
<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayInfo">显示信息</button>
</template>

<script>
export default {
  //此处只是测试一下setup，暂时不考虑响应式的问题。
  setup(){
    // 数据
    let name = "lby"
    let age = 21

    // 方法
    function sayInfo(){
      alert(`你好${name}，你太厉害了吧`)
    }
    return {
      name,age,sayInfo
    }
  }
};
</script>
```
::: warning
- 尽量不要与Vue2.x配置混用
    - Vue2.x配置（data、methos、computed...）中可以访问到setup中的属性、方法。
    - 但在setup中不能访问到Vue2.x配置（data、methos、computed...）。
    - 如果有重名, setup优先。
- `setup`不能是一个**async函数**，因为返回值不再是对象, 而是`promise`, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）