---
title: Vue2中使用Ts
date: '2022-4-5'
categories:
 - 教程
tags:
 - 前端 
 - TypeScript
---

## Ts中Vue基本模版
```vue
<template>
  <div class="wrap"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component()
export default class Test extends Vue {}
</script>

<style scoped>
</style>
```

## 生命周期
Js的写法
```vue
<script>
export default {
    beforeCreate () {
        console.log('before create')
    }
    created () {
        console.log('created')
    }
    beforeMount () {
        console.log('before mount')
    }
    mounted () {
        console.log('mounted')
    }
}
</script>
```
Ts的写法
```vue
<script lang="ts">
import {Vue} from 'vue-property-decorator'
export default class App extends Vue {
    beforeCreate () {
        console.log('before create')
    }
    created () {
        console.log('created')
    }
    beforeMount () {
        console.log('before mount')
    }
    mounted () {
        console.log('mounted')
    }
}
</script>
```

## 响应式属性 data
Js的写法
```vue
<script>
export default {
  data() {
    return {
      name: 'lby'
    }
  }
}
</script>
```
Ts的写法
```vue
<script lang="ts">
import {Vue} from 'vue-property-decorator'
export default class App extends Vue {
  private name: string = 'lby'; 
}
</script>
```

## 计算属性 computed
Js的写法
```vue
<script>
export default {
    computed:{
        name:{
            get(){
                return 'lby'
            },
            set(value){
                console.log(value)
            }
        }
    }
}
</script>
```
Ts的写法
```vue
<script lang="ts">
import {Vue} from 'vue-property-decorator'
export default class App extends Vue {
    get name():string{
        return 'lby';
    }
    set name(value:string):void{
        console.log(value)
    }
}
</script>
```

## 侦听属性 watch
Js的写法
```vue
<script>
export default {
    data() {
        return {
        name: 'lby'
        }
    },
    watch:{
        name:{
            deep:false,
            immediate:true,
            handler(newValue,oldValue){
                console.log(newValue,oldValue)
            }
        }
    }
}
</script>
```
Ts的写法
```vue
<script lang="ts">
import {Vue,Watch} from 'vue-property-decorator'
export default class App extends Vue {
    private name: string = 'lby'; 

    @Watch('name',{deep:false,immediate:true})
    watchName(newValue:string,oldValue:string){
        console.log(newValue,oldValue)
    }
}
</script>
```

## 父子组件之间的通信
Js的写法
```vue
//子组件
<template>
    <button @click="handleEmit">{{name}}</button>
</template>
<script>
export default {
    name:'child',
    props:{
        name:{
            type:String,
            default:'默认名字'
        }
    },
    methods:{
        handleEmit(){
            this.$emit('handleMsg','hhh')
        }
    }

}
</script>

//父组件
<template>
    <div>
        <Child :name="childName" @handleMsg="handler"/>
    </div>
</template>
<script>
import Child from './child.vue'
export default {
    name:'parent',
    data(){
        return{
            childName:'lby'
        }
    }
    methods:{
        handler(value){
            this.childName = value
        }
    }

}
</script>
```
Ts的写法
```vue
//子组件
<template>
    <button @click="handleEmit">{{name}}</button>
</template>
<script lang="ts">
import {Vue,Emit,Component} from 'vue-property-decorator'
@Component({
    props:{
        name:{
            type:String,
            required:true
        }
    }
})
export default class Child extends Vue{
    @Emit('handleMsg')
    handleEmit():string{
        return 'hhh'
    }
}
</script>

//父组件
<template>
    <div>
        <Child :name="childName" @handleMsg="handler"/>
    </div>
</template>
<script>
import Child from './child.vue'
import {Component, Vue} from 'vue-property-decorator'
@Component({components:{Child}})
export default class App extends Vue{
  private childName:string = 'lby'
  public handler(value:string):void{
    this.childName = 'hhh'
  }
}
</script>
```