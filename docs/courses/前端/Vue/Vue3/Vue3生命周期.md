---
title: Vue3生命周期
date: '2022-4-10'
categories:
 - 教程
tags:
 - 前端 
 - Vue
---

## Vue2.x生命周期
![image-20220410130427224](https://workdomain.cloud/picgo/lifecycle.png)

## Vu3.0生命周期
![image-20220410130810806](https://workdomain.cloud/picgo/image-20220410130810806.png)

## 区别
- `beforeDestroy`改名为 `beforeUnmount`
- `destroyed`改名为`unmounted`
- Vue3.0也提供了 Composition API 形式的生命周期钩子
    - `beforeCreate`===>`setup()`
    - `created`=======>`setup()`
    - `beforeMount` ===>`onBeforeMount`
    - `mounted`=======>`onMounted`
    - `beforeUpdate`===>`onBeforeUpdate`
    - `updated` =======>`onUpdated`
    - `beforeUnmount` ==>`onBeforeUnmount`
    - `unmounted` =====>`onUnmounted`
    ```vue
    <script>
    import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
    export default {
        setup() {
            onBeforeMount(() => {
            // ... 
            })
            onMounted(() => {
            // ... 
            })
            onBeforeUpdate(() => {
            // ... 
            })
            onUpdated(() => {
            // ... 
            })
            onBeforeUnmount(() => {
            // ... 
            })
            onUnmounted(() => {
            // ... 
            })
        }
    }
    </script>
    ```
