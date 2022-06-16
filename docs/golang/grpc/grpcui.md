---
# 这是页面的图标
icon: grpc

# 这是文章的标题
title: grpcui 可视化调试

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: 2

# 写作日期
# date: 2022-01-01

# 一个页面可以有多个分类
category: 

# 一个页面可以有多个标签
tag: 

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---





## 安装

https://github.com/fullstorydev/grpcui

**注：请不要在有 (或父级目录有) `go.mod` 的目录执行该安装命令。**

```sh
go get github.com/fullstorydev/grpcui/...
```



## 执行

确保 grpc 运行之后执行以下命令：

```sh
grpcui -plaintext localhost:<端口号>
```

