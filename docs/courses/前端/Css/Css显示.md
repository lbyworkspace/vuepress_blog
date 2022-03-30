---
title: Css显示
date: '2022-3-29'
categories:
 - 教程
tags:
 - 前端
 - Css
---

## 如何隐藏一个元素？
- `display:none`:它把元素彻底隐藏了，不占用任何空间
- `visibility:hidden`:而它只是把元素不显示，但它还是占用了原本的空间，**仍然会影响布局**

## display
diplay还有几个常用到的属性：
- `block`：表示当前元素为块级元素，**width和height属性能够生效**，能自动换行，可以设置margin，padding
- `inline`：表示当前元素为内联元素，width和height属性不生效，不能换行，其大小由其中的**内容**决定，可以设置margin，padding，**margin只在水平方向有效,而padding水平纵向都正常**
- `inline-block`:表示当前元素即**不自动换行**而且还要能调整**大小**
- `<div>`默认为block块级元素，`<span>`默认为inline内联元素

