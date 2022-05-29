---

# 这是页面的图标
icon: command

# 这是文章的标题
title: 容器相关

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: 3

# 写作日期
# date: 2022-01-01

# 一个页面可以有多个分类
category: 

# 一个页面可以有多个标签
tag: 

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---



## 创建并启动容器

- -it 创建的容器一般称为交互式容器，-id 创建的容器一般称为守护式容器
  - -i：保持容器运行
  - -t：为容器重新分配一个伪输入终端
  - -d：以守护（后台）模式运行容器
- --name 为创建的容器命名

```sh
docker run <参数> --name <容器名> <镜像名>:<版本号>
```



::center

![image-20220528123225205](./img/image-20220528123225205.png)

:::



## 创建容器

```sh
docker create --name <容器名> <镜像名>:<版本号>
```



:::center

![image-20220528125155475](./img/image-20220528125155475.png)

:::



## 启动容器

```sh
docker start <容器名>
```



:::center

![image-20220528123846275](./img/image-20220528123846275.png)

:::



## 进入容器

```sh
docker exec <参数> <容器名> <c>
```



:::center

![image-20220528125352321](./img/image-20220528125352321.png)

:::



## 停止容器

```sh
docker stop <容器名>
```



:::center

![image-20220528125451145](./img/image-20220528125451145.png)

:::



## 删除容器

```sh
docker rm <容器名>
```



:::center

![image-20220528125609284](./img/image-20220528125609284.png)

:::



## 查看容器

```sh
docker ps    # 查看正在运行的容器
docker ps -a # 查看所有容器
```



:::center

![image-20220528125533183](./img/image-20220528125533183.png)

:::





