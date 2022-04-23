---
title: Shell简介
date: '2022-4-18'
categories:
 - 教程
tags:
 - 服务器
 - shell
---

## 什么是Shell？
Shell 是一个用 C 语言编写的程序，它是用户使用 Linux 的桥梁。Shell 既是一种命令语言，又是一种程序设计语言。<br>
Shell 是指一种应用程序，这个应用程序提供了一个界面，用户通过这个界面访问操作系统内核的服务

## Shell环境
Shell 编程跟 JavaScript、php 编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了<br>
Linux 的 Shell 种类众多，常见的有
- Bourne Shell（/usr/bin/sh或/bin/sh）
- Bourne Again Shell（/bin/bash）
- C Shell（/usr/bin/csh）
- K Shell（/usr/bin/ksh）
- Shell for Root（/sbin/sh）

Bash，也就是 Bourne Again Shell，由于易用和免费，Bash 在日常工作中被广泛使用。同时，Bash 也是大多数Linux 系统默认的 Shell

## 第一个Shell脚本
```sh
# 创建文件shell脚本文件
vim test.sh
# echo表示输出，输出hello world!
ehco "Hello World!"
# 保存退出
:wq 
# 赋予执行的权限
chmod +x ./test.sh
# 执行脚本
./test.sh
# Hello World!
```

::: warning 
执行脚本的时候不能直接test.sh,要使用相对路径或者绝对路径去执行文件，除非该脚本已在环境变量中，也就是`PATH`
:::