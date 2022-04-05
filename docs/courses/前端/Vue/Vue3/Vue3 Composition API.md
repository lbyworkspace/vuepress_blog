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
:::

## ref函数
- 作用: 定义一个响应式的数据
- 语法: ```const xxx = ref(initValue)``` 
  - 创建一个包含响应式数据的<strong style="color:#DD5145">引用对象（reference对象，简称ref对象）</strong>。
  - JS中操作数据： ```xxx.value```
  - 模板中读取数据: 不需要.value，直接：```<div>{{xxx}}</div>```
- 备注：
  - 接收的数据可以是：基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
  - 对象类型的数据：内部 <i style="color:gray;font-weight:bold">“ 求助 ”</i> 了Vue3.0中的一个新函数—— ```reactive```函数。
```vue
<template>
  <div>{{name}}</div>
  <div>{{age}}</div>
  <div>{{job.type}}</div>
  <div>{{job.salary}}</div>
  <button @click="change">点击修改数据</button>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    let name = ref('lby')
    let age = ref(21)
    let job = ref({
      type:'前端',
      salary:'15K'
    })
    console.log(name)  //RefImpl {.....,value:'lby'}  RefImpl实例对象
    console.log(age)  //RefImpl {.....,value:21}  RefImpl实例对象
    console.log(job)  //RefImpl {.....,value:Proxy {type: '前端', salary: '15K'}}  RefImpl实例对象
    console.log(job.value)  //Proxy {type: '前端', salary: '15K'}  Proxy对象  对象类型是求助reactive函数

    function change(){
      name.value = 'hhh'
      age.value = 24
      job.value.type = '后端'
      job.value.salary = '30K'
    }
    return {
      name,age,job,change
    }
  }
}
</script>
```

## reactive函数
- 作用: 定义一个<strong style="color:#DD5145">对象类型</strong>的响应式数据（基本类型不要用它，要用```ref```函数）
- 语法：```const 代理对象= reactive(源对象)```接收一个对象（或数组），返回一个<strong style="color:#DD5145">代理对象（Proxy的实例对象，简称proxy对象）</strong>
- reactive定义的响应式数据是“**深层次的**”。
- 内部基于 ES6 的 `Proxy` 实现，通过代理对象操作源对象内部数据进行操作。
```vue
<template>
  <div>{{person.name}}</div>
  <div>{{person.age}}</div>
  <div>{{person.job.type}}</div>
  <div>{{person.job.salary}}</div>
  <button @click="change">点击修改数据</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  setup(){
    let person = reactive({
      name:'lby',
      age:21,
      job:{
        type:'前端',
        salary:'15K'
      }
    })

    function change(){
      person.name = 'hhh'
      person.age = 24
      person.job.type = '后端'
      person.job.salary = '30K'
    }
    return {
      person,change
    }
  }
}
</script>
```
