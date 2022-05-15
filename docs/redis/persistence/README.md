---
# 这是页面的图标
icon: persistence

# 这是文章的标题
title: Redis 持久化

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: true

# 写作日期
# date: 2022-01-01

# 一个页面可以有多个分类
category: 

# 一个页面可以有多个标签
tag: 

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---



## Redis 持久化



### 为什么需要持久化

要明确，Redis 是基于内存的数据库。如果服务一旦宕机，内存中的数据将全部丢失。

有一种很容易想到的方案，就是将数据存入后端数据库，但是数据库存在性能瓶颈，当数据量大到一定程度，数据的恢复会给数据库带来巨大的压力、并且恢复速度也不太理想。

而 Redis 存在的意义，很大程度就是为了提升效率，显然这种通过数据库的恢复方案并不理想。



### 持久化方案

**目前 Redis 支持的有 RDB、AOF 两种持久化方案。**

- [RDB 持久化](rdb)
- [AOF 持久化](aof)



## 参考

- [Redis进阶 - 持久化：RDB和AOF机制详解 | Java 全栈知识体系 (pdai.tech)](https://pdai.tech/md/db/nosql-redis/db-redis-x-rdb-aof.html)

