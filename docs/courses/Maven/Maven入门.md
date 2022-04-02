---
title: Maven入门
date: '2022-4-2'
categories:
 - 教程
tags:
 - Maven
---

## 依赖管理1111
- Maven引入依赖就是我们平时所说的**导包**<br>
- Maven依赖管理是基于一个名为pom的xml文件来进行管理的,执行任务或目标时，Maven 会在**当前目录中查找 POM**。它读取 POM，获取所需的配置信息，然后执行目标。

## pom.xml
一个pom文件的**所有基本信息**都在如下注释中
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <!-- 指定父模块，一般出现在子模块中 -->
    <parent>
        <artifactId>root</artifactId>
        <groupId>com.lby</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <!-- Maven组Id -->
    <groupId>com.lby</groupId>
    <!-- Maven项目Id -->
    <artifactId>project</artifactId>
     <!-- 打包方式 -->
    <packaging>pom</packaging>
     <!-- Maven项目版本号 -->
    <version>1.0-SNAPSHOT</version>

    <!-- 项目名 -->
    <name>Project Name</name>
    <!-- 项目描述 -->
    <description>Project Description</description>

    <!-- Maven的模块管理，管理子模块中的pom.xml -->
    <modules>
        <module>module1</module>
        <module>module2</module>
        <module>module3</module>
    </modules>

    <!-- 定义Maven内的变量，方便对依赖版本进行管理 -->
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <spring-boot.version>2.3.12.RELEASE</spring-boot.version>
        <spring-cloud.version>Hoxton.SR12</spring-cloud.version>
        <spring-cloud-alibaba.version>2.2.7.RELEASE</spring-cloud-alibaba.version>
    </properties>

    <!-- 所有项目依赖的描述，子模块都会继承父项目中dependencies中的所有依赖 -->
    <!-- 一般父模块都会引入一些公共依赖，子模块都会继承这些公共依赖 -->
    <dependencies>

        <!-- lombok 依赖 -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>

    </dependencies>

    <!-- 依赖管理，一般定在父模块中的pom文件中，子模块中引入依赖会查询父模块中dependencyManagement中依赖的版本号 -->
    <!-- 如果子模块引入依赖时查询不到父模块中dependencyManagement中依赖的版本号，就需要手动改指定version -->
    <dependencyManagement>
        <dependencies>
            <!-- spring-boot依赖 -->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <!-- spring-cloud依赖 -->
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <!-- spring-cloud alibaba依赖 -->
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${spring-cloud-alibaba.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

        </dependencies>
    </dependencyManagement>

    <!-- Maven构建插件管理，子模块会继承父模块中的插件，但pluginManagement中的插件不会继承 -->
    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                    <version>${spring-boot.version}</version>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>

</project>
```