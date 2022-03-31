---
title: Js用法
date: '2022-3-31'
categories:
 - 教程
tags:
 - 前端
 - JavaScript
---

## 使用
- 在Html中，所有Js代码必须放在`<script>`标签中，script标签可以放在html的任何地方，但一般建议放在head标签里
- 但也可以通过`script`标签引入外部的Js代码
```html
<!--直接写在html中-->
<head>
    <script>
        function test(){
            console.log('你好');
        }
    </script>
</head>

<!--引入外部js文件-->
<script src="index.js"></script>

//index.js
function test(){
    console.log('你好');
}
```

## 注释
- 单行注释以 // 开头。
- 多行注释以 /* 开始，以 */ 结尾。
```js
// 单行注释

/*
    多行注释
*/
```

