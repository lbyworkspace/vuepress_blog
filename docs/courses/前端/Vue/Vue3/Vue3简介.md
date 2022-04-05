---
title: Vue3简介
date: '2022-4-5'
categories:
 - 教程
tags:
 - 前端 
 - Vue
---

::: tip
新事物的出现一定会有他的意义，所以我们先来看看Vue3相比Vue2有哪些改进呢？
:::
## 性能的提升
- 打包大小减少41%
- 初次渲染快55%, 更新渲染快133%
- 内存减少54%
::: tip
以上数据来自官方，看到这，学习Vue3的热情又高涨了一些
:::

## 源码的升级
- 使用`Proxy`代替`defineProperty`实现响应式
- 重写虚拟DOM的实现和Tree-Shaking

## 拥抱TypeScript
Vue3可以更好的支持`TypeScript`

### Composition API（组合API）
- setup配置
- ref与reactive
- watch与watchEffect
- provide与 inject

### 新的内置组件
- Fragment
- Teleport
- Suspense

### 其他改变
- 新的生命周期钩子
- data 选项应始终被声明为一个函数
- 移除keyCode支持作为 v-on 的修饰符