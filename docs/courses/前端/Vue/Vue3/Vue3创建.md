---
title: Vue3创建
date: '2022-4-5'
categories:
 - 教程
tags:
 - 前端 
 - Vue
---

## 使用 vue-cli 创建
```sh
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建Vue项目，选择Vue3
vue create vue_test
## 启动
cd vue_test
npm run serve
```

## [使用 vite 创建](https://vitejs.cn/)
- 什么是vite？—— 是Vue团队打造的新一代前端构建工具。
- 开发环境中，无需打包操作，可快速的冷启动。
- 轻量快速的热重载（HMR）。
- 真正的按需编译，不再等待整个应用编译完成。

### 传统构建 与 vite构建对比图<br>
传统构建是等在一切打包工作完成之后服务才进入**等待状态**<br>
![image-20220405171240545](https://workdomain.cloud/picgo/image-20220405171240545.png)
**而vite构建打包是直接让服务进入等待状态，然后根据需求进行模块的加载**<br>
![image-20220405171256543](https://workdomain.cloud/picgo/image-20220405171256543.png)

### 创建vite项目
```sh
## 创建工程
npm init vite-app vue-vite
## 进入工程目录
cd vue-vite
## 安装依赖
npm install
## 运行
npm run dev
```
