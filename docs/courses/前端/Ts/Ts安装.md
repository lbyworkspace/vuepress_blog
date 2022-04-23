---
title: Ts安装
date: '2022-4-17'
categories:
 - 教程
tags:
 - 前端 
 - TypeScript
---

## 全局安装
```sh
npm install -g typescript

# 创建并进入改文件夹
mkdir ts-demo
cd ts-demo
tsc --init
```

初始化成功之后会生成一个tsconfig.json的配置文件
![image-20220417092418054](https://workdomain.cloud/picgo/image-20220417092418054.png)

把outDir注释打开，作用是把**编译后**生成的js文件输出到当前目录
![image-20220417092635313](https://workdomain.cloud/picgo/image-20220417092635313.png)

点击导航栏`终端`->`运行任务`->`typescript`->`tsc:监视`
![image-20220417093105568](https://workdomain.cloud/picgo/image-20220417093105568.png)

创建demo.ts
```ts
console.log('hello,typeScript!')
```

当保存该文件之后可以看到同级目录出现一个demo.js文件
![image-20220417093445884](https://workdomain.cloud/picgo/image-20220417093445884.png)

终端运行
```sh
node demo
# hello,typeScript!
```

