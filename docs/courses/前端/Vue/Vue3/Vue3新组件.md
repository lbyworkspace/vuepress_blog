---
title: Vue3新组件
date: '2022-7-3'
categories:
 - 教程
tags:
 - 前端 
 - Vue
---

## Fragment组件
- 在Vue2中每个vue文件的template标签都必须有**一个根标签**
- 在Vue3中可以没有根标签，内部会将多个标签包含在一个**Fragment虚拟元素**中
- 
```vue
<template>
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <div>123</div>
</template>
```
打开控制台查看Vue插件
![](https://workdomain.cloud/image-20220703205449441.png)

## Teleport组件
- `Teleport` 是一种能够将我们的<strong style="color:#DD5145">组件html结构</strong>移动到指定位置的技术。
- 通过`to`属性来指定所需要移动的位置，可以是标签名、类名、id
```vue
<template>
  <div>我在组件内</div>
  <Teleport to="body">
    <div>我是被移动到body的元素</div>
  </Teleport>
</template>
```
![](https://workdomain.cloud/image-20220703210130342.png)

## Suspense组件
- 等待异步组件时渲染一些**额外内容**，让应用有更好的用户体验
- 例如骨架屏等加载性元素
- 父组件：
```vue
<template>
    <div>我是父组件</div>
    <Suspense>
        <template #default>
            <Child />
        </template>
        <template #fallback>
            <div>组件加载中...</div>
        </template>
    </Suspense>
</template>

<script>
//加载异步组件
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
export default {
    components:{Child},
}
</script>
```
- 子组件：
```vue
<template>
    <div>我是子组件</div>
</template>

<script>
export default {
    async setup(){
        return await new Promise((s,j)=>{
            setTimeout(()=>{
                s()
            },2000)
        })
    }
}
</script>
``` 
- 效果：
<br>
![](https://workdomain.cloud/image-20220703211335264.png)
<br>
2秒之后<br>
![](https://workdomain.cloud/image-20220703211429409.png)
