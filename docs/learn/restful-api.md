---
# 这是页面的图标
icon: note

# 这是文章的标题
title: RESTful API

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: false

# 写作日期
# date: 2022-01-01

# 一个页面可以有多个分类
category: 

# 一个页面可以有多个标签
tag: 

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---



## Representational State Transfer

> REST 即 Representational State Transfer 的缩写，表现层状态转化。 如果一个架构符合 REST 原则，就称它为 RESTful 架构。



###  Resources 资源

REST 的名称 "表现层状态转化" 中，省略了主语。"表现层" 其实指的是 "资源"（Resources）的 "表现层"。
所谓 "资源"，用在互联网上就是网络上的一个实体，或者说是网络上的一个具体信息。它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的实在。



### Representation 表现层

"资源" 是一种信息实体，它可以有多种外在表现形式。我们把 "资源" 具体呈现出来的形式，叫做它的 "表现层"（Representation）。

比如，文本可以用 txt 格式表现，也可以用 HTML 格式、XML 格式、JSON 格式表现，甚至可以采用二进制格式；图片可以用 JPG 格式表现，也可以用 PNG 格式表现。

URI 只代表资源的实体，不代表它的形式。严格地说，有些网址最后的 `.html` 后缀名是不必要的，因为这个后缀名表示格式，属于 "表现层" 范畴，而 URI 应该只代表 "资源" 的位置。它的具体表现形式，应该在 HTTP 请求的头信息中用 `Accept` 和 `Content-Type` 字段指定，这两个字段才是对 "表现层" 的描述。



### State Transfer 状态转化

互联网通信协议 HTTP 协议，是一个无状态协议。这意味着，所有的状态都保存在服务器端。因此，如果客户端想要操作服务器，必须通过某种手段，让服务器端发生 "状态转化"（State Transfer）。而这种转化是建立在表现层之上的，所以就是 "表现层状态转化"。

HTTP 协议里面，四个表示操作方式的动词：GET 用来获取资源，POST 用来新建资源（也可以用于更新资源），PUT 用来更新资源，DELETE 用来删除资源。



## Web API

> 自从Roy Fielding 博士在 2000 年他的博士论文中提出 [REST](http://zh.wikipedia.org/wiki/REST)（Representational State Transfer）风格的软件架构模式后，REST 就基本上迅速取代了复杂而笨重的 SOAP，成为 Web API 的标准了。



如果我们想要获取某个电商网站的某个商品，输入 `http://localhost:3000/products/123`，就可以看到 id 为 123 的商品页面，但这个结果是 HTML 页面，它同时混合包含了 Product 的数据和 Product 的展示两个部分。对于用户来说，阅读起来没有问题，但是，如果机器读取，就很难从 HTML 中解析出 Product 的数据。

如果一个 URL 返回的不是 HTML，而是机器能直接解析的数据，这个 URL 就可以看成是一个 Web API。比如，读取 `http://localhost:3000/api/products/123`，如果能直接返回 Product 的数据，那么机器就可以直接读取。

**REST 就是一种设计 API 的模式**。最常用的数据格式是 JSON。由于 JSON 能直接被 JavaScript 读取，所以，以 JSON 格式编写的 REST 风格的 API 具有 **简单、易读、易用** 的特点。

编写 API 有什么好处呢？由于 API 就是把 Web App 的功能全部封装了，所以，**通过 API 操作数据，可以极大地把前端和后端的代码隔离，使得后端代码易于测试，前端代码编写更简单**。

此外，如果我们把前端页面看作是一种用于展示的客户端，那么 API 就是为客户端提供数据、操作数据的接口。这种设计可以获得极高的扩展性。例如，当用户需要在手机上购买商品时，只需要开发针对 iOS 和 Android 的两个客户端，通过客户端访问 API，就可以完成通过浏览器页面提供的功能，而后端代码基本无需改动。

当一个 Web 应用以 API 的形式对外提供功能时，整个应用的结构就扩展为：

![REST-arch](./img/l.png)

把网页视为一种客户端，是REST架构可扩展的一个关键。



## 参考

- [浅谈REST API - ibrahim - 博客园 (cnblogs.com)](https://www.cnblogs.com/ibrahim/p/REST-API.html)
- [REST - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/1022910821149312/1105000713418592)
