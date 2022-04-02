---
title: Maven环境配置
date: '2022-4-2'
categories:
 - 教程
tags:
 - Maven
---

## Mac版本
### 下载解压
```sh
$ curl -O http://mirrors.hust.edu.cn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
$ tar -zxvf  apache-maven-3.3.9-bin.tar.gz
$ sudo mv -f apache-maven-3.3.9 /usr/local/
```

### 编辑配置文件
编辑 /etc/profile 文件 sudo vim /etc/profile，在文件末尾添加如下代码：
```sh
export MAVEN_HOME=/usr/local/apache-maven-3.3.9
export PATH=${PATH}:${MAVEN_HOME}/bin
```

### 保存生效
保存文件，并运行如下命令使环境变量生效：
```sh
$ source /etc/profile
```

### 验证安装
```sh
$ mvn -v
Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-11T00:41:47+08:00)
Maven home: /usr/local/apache-maven-3.3.9
Java version: 1.8.0_31, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_31.jdk/Contents/Home/jre
Default locale: zh_CN, platform encoding: ISO8859-1
OS name: "mac os x", version: "10.13.4", arch: "x86_64", family: "mac"
```