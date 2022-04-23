---
title: Shell变量
date: '2022-4-18'
categories:
 - 教程
tags:
 - 服务器
 - shell
---

## 定义变量
```sh
name="lby"
```
::: warning
切记定义变量的时候，**变量名和等号之间不能有空格**<br>
同时，变量名的命名须遵循如下规则：
- 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
- 中间不能有空格，可以使用下划线 _。
- 不能使用标点符号。
- 不能使用bash里的关键字（可用help命令查看保留关键字）。
:::

## 使用变量
shell中使用变量是通过`$`美元符号来引用的
```sh
name="lby"
echo $name

./test.sh 
# lby
```

## 只读变量
使用readonly可以将变量定义为只读变量，只读变量的值不能被改变
```sh
name="lby"
readonly name
name="hhh"

./test.sh
# ./test.sh: line 3: name: readonly variable
```

## 删除变量
使用unset删除变量后不能再次访问该变量，还有**unset不能删除只读变量**
```sh
name="lby"
unset name
echo $name

./test.sh
# 输出空白
```

## Shell字符串
字符串是shell编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号，**也可以不用引号**
### 单引号
单引号字符串的限制：
- 单引号里的任何字符都会原样输出，**单引号字符串中的变量是无效的**
- 单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用
```sh
name1='lby'
name2='$name1' 
echo $name1
echo $name2

./test.sh
# lby
# $name1
```

### 双引号
双引号的优点：
- 双引号里可以有变量
- 双引号里可以出现转义字符
```sh
name="lby"
str="Hello, I know you are \"$your_name\"! \n"
echo $str

./test.sh
# Hello, I know you are "lby"! 
```

## 数组
bash支持一维数组（**不支持多维数组**），并且没有限定数组的大小。<br>
定义数组：`数组名=(值1 值2 ... 值n)`<br>
读取数组：`${数组名[下标]}`
```sh
# 定义数组
array_name=(1 2 3 4)
# 读取数组
echo ${array_name[0]}
# 1

# @获取所有元素
echo ${array_name[@]}
# 1 2 3 4

# 获取数组长度
echo ${#array_name[@]}
# 4

# 获取单个元素的长度
echo ${#array_name[1]}
# 1
```
