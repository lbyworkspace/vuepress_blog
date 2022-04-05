---
title: Vue3响应式原理
date: '2022-4-5'
categories:
 - 教程
tags:
 - 前端 
 - Vue
---

## vue2.x的响应式
- 实现原理：
  - 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。
  - 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。
    ```js
    var person = {
        name:'lby',
        age:21
    }
    var ob = {}
    Object.keys(person).forEach(item=>{
        Object.defineProperty(ob,item,{
            set(newValue){
                item.newValue = newValue
                console.log(`发现属性${item}被修改成${newValue}`)
            },
            get(){
                return person[item]
            }
        })
    })
    console.log(ob.name)  //'lby'
    ob.name = 'hhhh'  //发现属性name被修改成ghhhh
    ```
- 存在问题：
  - 新增属性、删除属性, 界面不会更新。(Vue2中通过$set、$delete解决)
  - 直接通过下标修改数组, 界面不会自动更新。(Vue2中通过$set、数组splice方法解决)

## Vue3.0的响应式
- 实现原理: 
  - 通过Proxy（代理）:  拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
  - 通过Reflect（反射）:  对源对象的属性进行操作。
  - MDN文档中描述的Proxy与Reflect：
    - [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)：`ES6`在`window`对象新增的属性，能够对代理对象**拦截属性的操作**
    - [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)：`Object`的新型替代品，可以对**对象进行操作**
    ```js
    var person = {
        name:'lby',
        age:21
    }
    const p = new Proxy(person,{
        //拦截属性读取
        get(target,propName){
            console.log(`读取${propName}属性`)
            return Reflect.get(target,propName)
        },
        //拦截属性新增修改
        set(target,propName,value){
            console.log(`新增或修改${propName}属性为${value}`)
            return Reflect.set(target,propName,value)
        },
        //拦截属性删除
        deleteProperty(target,propName){
            console.log(`删除${propName}属性`)
            return Reflect.deleteProperty(target,propName)
        }
    })
    p.name  //读取name属性
    p.name = 'hhh'  //新增或修改name属性为hhh
    delete p.name  //删除name属性
    ```