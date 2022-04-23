---
title: Shell流程控制
date: '2022-4-18'
categories:
 - 教程
tags:
 - 服务器
 - shell
---

## if
语法格式：
```sh
if condition
then
    command1 
    command2
    ...
    commandN 
fi
```

## if else
语法格式：
```sh
if condition
then
    command1 
    command2
    ...
    commandN
else
    command
fi
```

## if else-if else
语法格式：
```sh
if condition1
then
    command1
elif condition2 
then 
    command2
else
    commandN
fi
```

## if-elif-else示例
```sh
a=10
b=20
if [ $a == $b ]
then
    echo 'a等于b'
elif [ $a -gt $b ]
then
    echo 'a大于b'
else
    echo 'a小于b'
fi
```

## for 循环
### 格式
```sh
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done

# 写成一行
for var in item1 item2 ... itemN; do command1 command2 ... commandN done;
```

### 示例
```sh
for val in 1 2 3
do
    echo $val
done
# 1
# 2
# 3
```

## while 语句
while 循环用于不断执行一系列命令，也用于从输入文件中读取数据。其语法格式为：
```sh
while condition
do
    command
done
```

