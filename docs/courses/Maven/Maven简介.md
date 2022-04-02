---
title: Maven简介
date: '2022-4-2'
categories:
 - 教程
tags:
 - Maven
---

## 什么是Maven?
- Maven 翻译为"专家"、"内行"，是 Apache 下的一个纯 Java 开发的开源项目。基于项目对象模型（缩写：POM）概念，Maven利用一个中央信息片断能管理一个项目的构建、报告和文档等步骤。
- Maven 是一个项目管理工具，可以对 `Java` 项目进行构建、依赖管理。
- Maven 也可被用于构建和管理各种项目，例如 C#，Ruby，Scala 和其他语言编写的项目。Maven 曾是 Jakarta 项目的子项目，现为由 **Apache** 软件基金会主持的独立 Apache 项目。

## Maven作用
- 由前面可知Maven是一个管理依赖的构建工具，它可以对我们的Java项目进行打包成war、jar的形式
- 学习第三方的SDK就必须引入依赖，Maven就起到了很大的作用
- 通过Maven把第三方依赖下载到**本地仓库**，下次加载依赖就直接从本地仓库去取，方便快捷！
