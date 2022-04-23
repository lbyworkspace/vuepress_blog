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
    - `setup`在`beforeCreate`之前执行一次，this是undefined,所以在setup中不能访问到Vue2.x配置（data、methos、computed...）
    - Vue2.x配置（data、methos、computed...）中可以访问到setup中的属性、方法。
    - 如果有重名, setup优先。
- `setup`不能是一个**async函数**，因为返回值不再是对象, 而是`promise`, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）
- setup的参数
  - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
  - context：上下文对象
    - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 ```this.$attrs```。
    - slots: 收到的插槽内容, 相当于 ```this.$slots```。
    - emit: 分发自定义事件的函数, 相当于 ```this.$emit```。
:::

## 父子组件通信
```vue
//子组件
<template>
  <button @click="handler">{{name}}</button>
</template>

<script>
export default {
  name:'childCom',
  props:['name'],
  emits:['child'],
  setup(props,context){
    function handler(){
      context.emit('child',props.name)
    }
    return {
        handler
    }
  }
}
</script>

//父组件
<template>
  <child name="lby" @child="handler"/>
</template>

<script>
import child from './components/child.vue'
export default {
  name:'parent',
  components:{
    child
  },
  setup(){
    function handler(value){
      console.log(value)
    }
    return {
      handler
    }
  }
}
</script>
```

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
::: warning reactive对比ref
-  从定义数据角度对比：
   -  ref用来定义：<strong style="color:#DD5145">基本类型数据</strong>。
   -  reactive用来定义：<strong style="color:#DD5145">对象（或数组）类型数据</strong>。
   -  备注：ref也可以用来定义<strong style="color:#DD5145">对象（或数组）类型数据</strong>, 它内部会自动通过```reactive```转为<strong style="color:#DD5145">代理对象</strong>。
-  从原理角度对比：
   -  ref通过``Object.defineProperty()``的```get```与```set```来实现响应式（数据劫持）。
   -  reactive通过使用<strong style="color:#DD5145">Proxy</strong>来实现响应式（数据劫持）, 并通过<strong style="color:#DD5145">Reflect</strong>操作<strong style="color:orange">源对象</strong>内部的数据。
-  从使用角度对比：
   -  ref定义的数据：操作数据<strong style="color:#DD5145">需要</strong>```.value```，读取数据时模板中直接读取<strong style="color:#DD5145">不需要</strong>```.value```。
   -  reactive定义的数据：操作数据与读取数据：<strong style="color:#DD5145">均不需要</strong>```.value```。
:::

## 计算属性和监视
### computed函数
与Vue2.x中computed配置功能一致
```vue
<script>
import {computed} from 'vue'
export default {
  setup(){
    ...
    //计算属性——简写
    let fullName = computed(()=>{
        return person.firstName + '-' + person.lastName
    })
    //计算属性——完整
    let fullName = computed({
        get(){
            return person.firstName + '-' + person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
  }
}
</script>
```

### watch函数
与Vue2.x中watch配置功能一致
但要注意deep配置的使用：
- 如果要监视ref所定义的响应式数据，不必使用，也没有任何意义
- 而reactive所定义的响应式数据，如果要监视对象的某个属性还是对象，那deep就生效了
```js
var person = {
  name:'lby',
  age:21,
  job:{
    type:'前端',
    salary:'15K'
  }
}

watch(()=>person.name,(newValue,oldValue)=>{
  console.log(newValue,oldValue)
})

watch(person,(newValue,oldValue)=>{
  console.log(newValue,oldValue)
},{immediate:true,deep:true}})

//监视某个属性要用函数返回  ()=>监视对象的属性
//如果这个属性还是对象，则要开启deep
watch(()=>person.job,(newValue,oldValue)=>{
  console.log(newValue,oldValue)
},{immediate:true,deep:true}})
```

### watchEffect函数
在回调函数中用到什么属性，就会自动监听什么属性，只要在回调内的属性一变化就会自动执行回调
```js
//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
watchEffect(()=>{
    const x1 = sum.value
    const x2 = person.age
    console.log('watchEffect配置的回调执行了')
})
```

## 自定义hook函数
- hook本质就是一个函数，在函数内可以对Composition API进行了封装，方便在setup函数内进行复用
- 类似于vue2中的mixin
```js
//hook.js
import {reactive,onMounted,onUnmounted} from 'vue'
export default function hook(){

    let point = reactive({x:0,y:0})

     function savePoint(event){
      point.x = event.pageX
      point.y = event.pageY
      //打印当前鼠标点击的位置的xy值
      console.log(event.pageX,event.pageY)
    }

    onMounted(()=>{
        window.addEventListener('click',savePoint)
    })

    onUnmounted(()=>{
      window.removeEventListener('click',savePoint)
    })

    return point
}
```
```vue
<script>
//组件内引入
import {hook} from './hook.js'
export default {
    setup(){
        let point = hook()
        return {
            point
        }
    }
}
</script>
```

## toRef、toRefs
- toRef：创建一个 `ref` 对象，其`value`值指向另一个对象中的某个属性
- `toRefs` 与`toRef`功能一致，但可以批量创建多个 `ref` 对象
```vue
<script>
import {reactive,toRef,toRefs} from 'vue'
export default {
  name:'parentCom',
  setup(){
    var person1 = reactive({
      name:'lby',
      age:20,
    })
    let name = toRef(person,'name')
    console.log(name)  //ObjectRefImpl {_object: Proxy, _key: 'name', _defaultValue: undefined, __v_isRef: true}

    let person2 = toRefs(person)
    console.log(person)  //{name: ObjectRefImpl, age: ObjectRefImpl}

    return {
      name,person1,person2
    }
  },
}
</script>
```

