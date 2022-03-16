---
title: Dockerfile编写
date: '2022-3-16'
sidebar: 'auto'
categories:
 - 教程
tags:
 - Docker
---


## FROM指令
- 指定基础环境的镜像
- 可以去[dockerhub](https://hub.docker.com/)拉取官方或者个人的镜像作为基础镜像
```dockerfile
FROM centos
```
------------------------------------
## RUN指令
- docker **build** 时会执行的指令，容器运行时不会执行
- ***RUN*** 指令将会在前一条命令创建出的镜像的基础之上创建一个容器，并在容器中运行命令，在命令结束运行后提交容器为新镜像，新镜像将被Dockerfile中的下一条指令使用。
- ***RUN*** 指令将执行所有合法命令并提交执行结果，RUN指令创建的中间镜像会被缓存，并会在下次构建中使用。如果不想使用这些缓存镜像，可以在构建时指定 ```--no-cache``` 参数，如：```docker build --no-cache```
```dockerfile
RUN mkdir -p test/index && cd test/index && npm init -y
```
------------------------------------
## WORKDIR指令
- 为后续的 ```RUN```、```CMD```、```ENTRYPOINT``` 指令配置工作目录
- 没有指定之前，路径都为根目录 /
```dockerfile
WORKDIR /app
```
------------------------------------
## ARG指令
- 定义环境变量读取 ```docker build``` 构建时传的变量覆盖原来的变量
- ```$``` 加变量名使用变量
```dockerfile
FROM node
WORKDIR /app
COPY . .
ARG env=dev
RUN npm run build:$env

docker build --build-arg env=prod
```