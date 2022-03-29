---
title: HelloWord
date: '2022-3-27'
categories:
 - 教程
tags:
 - Java
---

## 开发工具
现在国内外大多数的java开发都用的是JetBrains的IntelliJ IDEA,这款开发软件不仅对初学者很友好,而且页面美观远比Eclipse好很多<br>
而Eclipse可以说是老一辈程序员喜欢用的IDEA<br>
这里附上JetBrains IntelliJ IDEA的[下载链接](https://www.jetbrains.com/zh-cn/idea/download/#section=windows)<br>
IntelliJ IDEA是收费的，并不开源，如果你是学生的话，可以**每年**申请**免费使用**

## 环境配置
运行java程序是需要你的电脑有java环境才能正常运行
只就要提到三个概念JVM、JRE、JDK
### JVM
JVM是Java Virtual Machine(Java虚拟机)的缩写，**任何java代码都是经过编译成class文件**之后运行在这个虚拟机里面的，所以java代码可以在任何的操作系统上面运行就是这么个理由

### JRE
JRE是Java Runtime Environment(JRE)的缩写，java运行时环境，它包括了JVM和java的一些基本类库，当我们只需运行java程序不进行开发的时候，只要下载JRE即可

### JDK
JDK是 Java Development Kit的缩写，java开发工具包，是整个Java的核心，它包括JVM、JRE，所以开发学习我们要下载JDK即可
而现在JDK版本已经更新到JDK18了，但市面上大多数公司都用JDK8，因为它足够稳定<br>
这里附上JDK8的[下载链接](https://www.oracle.com/cn/java/technologies/javase/javase8-archive-downloads.html)

### 配置环境变量
1.右击"我的电脑"，点击"属性"，选择"高级系统设置"；
<img src="https://workdomain.cloud/picgo/image-20220327162525494.png" alt="image-20220327162525494" />
2.选择"高级"选项卡，点击"环境变量"；
![image-20220327162631148](https://workdomain.cloud/picgo/image-20220327162631148.png)
3.然后就会出现如下图所示的画面：
![image-20220327162833970](https://workdomain.cloud/picgo/image-20220327162833970.png)
4.在 "系统变量" 中设置 3 项属性，JAVA_HOME、PATH、CLASSPATH(大小写无所谓)
- 变量名：JAVA_HOME 变量值：C:\Program Files (x86)\Java\jdk1.8.0_91      //要根据自己的实际路径配置
- 变量名：CLASSPATH 变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;      //记得前面有个"."
- 变量名：Path 变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;

**JAVA_HOME设置**
![image-20220327163321800](https://workdomain.cloud/picgo/image-20220327163321800.png)

**PATH设置**
![image-20220327163409882](https://workdomain.cloud/picgo/image-20220327163409882.png)

5.配置好之后，WIN+R,打开输入cmd打开命令行，在命令行里输入`java -version`,出现以下信息，说明环境变量配置成功
![image-20220327163713306](https://workdomain.cloud/picgo/image-20220327163713306.png)

## Java程序main函数
每个java程序有且只有一个main函数，main称为程序的主入口<br>
以下为一个输出Hello World的java程序
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

## 命令行输出HelloWord
```sh
vim HelloWorld.java //新建编辑文件

//复制该代码
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}

:wq //保存退出vim

javac HelloWorld.java //编译java文件,在同级文件夹会生成HelloWorld.class文件

java HelloWorld  //运行class文件

Hello World //输出
```
![image-20220327170218018](https://workdomain.cloud/picgo/image-20220327170218018.png)
![image-20220327170247114](https://workdomain.cloud/picgo/image-20220327170247114.png)





