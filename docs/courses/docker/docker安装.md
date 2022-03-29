---
title: Docker安装
date: '2022-3-16'
categories:
 - 教程
tags:
 - Docker
---

## 更新yum
```sh
yum -y update 
```
## 安装docker
```sh
yum install docker -y
```
## 启动docker
```sh
systemctl start docker
```
## 查看docker是否启动成功
```sh
systemctl status docker
```
## 查看docker版本
```sh
docker version
```
## 重启docker
```sh
systemctl restart docker
```
## 关闭docker
```sh
systemctl stop docker
```
## 查看docker中容器运行个数以及镜像个数等等
```sh
docker info
```