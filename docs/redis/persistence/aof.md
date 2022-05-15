---
# 这是页面的图标
icon: persistence

# 这是文章的标题
title: AOF 持久化

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

> AOF，Append Only File。
>
> AOF 持久化是 Redis 的写后日志，Redis 先执行命令，把数据写入内存，然后才记录日志。

PS：大多数的数据库采用的是写前日志（WAL），例如 MySQL，通过写前日志和两阶段提交，实现数据和逻辑的一致性。



![img](./img/6f0ab40396b7fc2c15e6f4487d3a0ad7.png)



##  



## 参考

- [AOF 持久化 | Java 全栈知识体系 (pdai.tech)](https://pdai.tech/md/db/nosql-redis/db-redis-x-rdb-aof.html#aof-持久化)
- [AOF 持久化是怎么实现的？ | 小林coding (xiaolincoding.com)](https://xiaolincoding.com/redis/storage/aof.html)

