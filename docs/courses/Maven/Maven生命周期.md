---
title: Maven生命周期
date: '2022-4-2'
categories:
 - 教程
tags:
 - Maven
---

**Maven的构建过程是存在生命周期的**<br>
每个生命周期的各个环节都是由**各种插件**完成<br>
它的生命周期有：
- clean：清理编译的项目
- validate：验证项目结构是否正常，必要的配置文件是否存在
- compile：编译项目
- test：测试项目（运行测试类）
- package：负责将我们的项目打包(打包到target目录下)
- install：将这个项目安装到仓库中 
- verify：检测测试后的包是否完好
- site：生成站点文档
- deploy：运行集成和发布环境，将测试后的最终包以构件的方式发布到远程仓库中，方便所有程序员共享
![image-20220402084341152](https://workdomain.cloud/picgo/image-20220402084341152.png)

::: warning
因为生命周期是连续的，如果执行package，会把package之前的生命周期**都执行一遍**
:::
而我们在构建Java项目的时候一般要跳过`test`操作<br>
为了以防万一一般都会先clean一下，然后在根据自己需求选择compile还是package