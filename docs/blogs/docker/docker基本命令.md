---
title: Docker基本命令
date: '2022-3-16'
categories:
 - 教程
tags:
 - Docker
---

::: warning
  本笔记为作者学习中的总结，如有错误，评论指点，谢谢!~~~
:::
## 查看所有镜像
```sh
docker images
```
## 删除镜像
```sh
docker rmi [镜像ID]
docker rmi -f [镜像ID] #强制删除
```
## 删除全部镜像
```sh
docker rmi -f $(docker images -aq) # a为显示全部 q为只显示ID
```
## 搜索镜像 +过滤
```sh
docker search mysql --filter=STARS=9000
```
## 删除容器
```sh
docker rm [容器ID]
docker rm -f [容器ID] # 强制删除
```
## 运行镜像
```sh
docker run [镜像NAME或镜像ID]
```
## docekr run的参数
```docker
docker run -dit -p 8080:80 -v [主机路劲]:[容器路劲] --name test [容器NAME/ID] /bin/bash
```
- ```d``` :后台运行容器，方便进入容器内部
- ```i``` :提供交互接口
- ```t``` :提供一个tty(伪终端)
- ```p``` :通过指定主机端口去访问容器的内部端口
- ```name``` :指定容器名称
- ```v``` :挂载目录，映射主机和容器目录，删除容器时，防止数据丢失
- ```/bin/bash``` :容器初始化执行的命令
------------------------------------
## 进入docker容器的方式
```docker
#方式一
docker exec -it [容器ID] bash
#方式二
docker attach [容器ID]
```
------------------------------------
## docker build 构建容器
```docker 
docker build -t test  --no-cache .
```
- ```t``` :构建时给容器一个tag标签
- ```--no-cache``` :构建不缓存