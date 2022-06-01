---
# 这是页面的图标
icon: web

# 这是文章的标题
title: Context 上下文

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



## 目标

- 将 **路由(router)** 独立出来，方便之后增强。
- 设计 **上下文(Context)**，封装 Request 和 Response ，提供对 JSON、HTML 等返回类型的支持。



此次代码的目录结构：

```sh
gee/
  |--gee.go
  |--router.go
  |--context.go
  |--go.mod
main.go
go.mod
```



## 思路整理



### HTTP 核心

目前整个 Web 服务的核心函数就是这里，需要由他根据当前的 HTTP 请求去调用不同的响应函数。

我们想进行功能的升级、或者进一步的解耦都需要从这里下手。

```go
// 详见 HTTP 基础
func (engine *Engine) ServeHTTP(writer http.ResponseWriter, request *http.Request) {
	key := request.Method + "-" + request.URL.Path
	if handler, ok := engine.router[key]; ok {
		handler(writer, request)
	} else {
		fmt.Fprintf(writer, "404 NOT FOUND: %s\n", request.URL)
	}
}
```



### 路由表解耦

前一篇的项目当中，我们将路由表保存在 `Engine` 当中，当我们想对路由表的功能做一些升级、比如添加动态路由等一些操作，整个 `Engine` 可能会变得很臃肿，所以我们可以做适当的解耦，将路由表单独抽离出来。



### 丰富响应内容

在原本的 `Handler()` 当中，只是简单的输出了路由信息和头部信息，想要做出更多更丰富的响应，可能需要更多的代码。因此我们可以对相似的响应做一些封装。

```go
func(w http.ResponseWriter, req *http.Request) {
    fmt.Fprintf(w, "URL.Path = %q\n", req.URL.Path)
}
```





## 设计 Context



### 必要性

1. **封装 `*http.Request` 和 `http.ResponseWriter` 的方法，简化相关接口的调用**

   对Web服务来说，无非是根据请求 `*http.Request`，构造响应 `http.ResponseWriter`。但是这两个对象提供的接口粒度太细，比如我们要构造一个完整的响应，需要考虑消息头(Header)和消息体(Body)，而 Header 包含了状态码(StatusCode)，消息类型(ContentType)等几乎每次请求都需要设置的信息。因此，如果不进行有效的封装，那么框架的用户将需要写大量重复，繁杂的代码，而且容易出错。针对常用场景，能够高效地构造出 HTTP 响应是一个好的框架必须考虑的点。

2. **支撑额外的功能**

   例如，将来解析动态路由 `/hello/:name`，参数 `:name` 的值放在哪呢？再比如，框架需要支持中间件，那中间件产生的信息放在哪呢？Context 随着每一个请求的出现而产生，请求的结束而销毁，和当前请求强相关的信息都应由 Context 承载。因此，设计 Context 结构，扩展性和复杂性留在了内部，而对外简化了接口。路由的处理函数，以及将要实现的中间件，参数都统一使用 Context 实例， Context 就像一次会话的百宝箱，可以找到任何东西。



:::: code-group

::: code-group-item 封装前

```go
obj = map[string]interface{}{
    "name": "geektutu",
    "password": "1234",
}
w.Header().Set("Content-Type", "application/json")
w.WriteHeader(http.StatusOK)
encoder := json.NewEncoder(w)
if err := encoder.Encode(obj); err != nil {
    http.Error(w, err.Error(), 500)
}
```

:::

::: code-group-item 封装后

```go
c.JSON(http.StatusOK, gee.H{
    "username": c.PostForm("username"),
    "password": c.PostForm("password"),
})
```

:::

::::



### context 实现

```go
package gee

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// H 起别名，简化 json 数据的构建
type H map[string]interface{}

type Context struct {
	// origin objects
	Writer  http.ResponseWriter
	Request *http.Request

	// request info
	Path   string
	Method string

	// response info
	StatusCode int
}

func newContext(writer http.ResponseWriter, request *http.Request) *Context {
	return &Context{
		Writer:  writer,
		Request: request,
		Path:    request.URL.Path,
		Method:  request.Method,
	}
}

// PostForm 提供获取 POST 参数的方法
func (this *Context) PostForm(key string) string {
	return this.Request.FormValue(key)
}

// Query 提供获取 GET 参数的方法
func (this *Context) Query(key string) string {
	return this.Request.URL.Query().Get(key)
}

// Status 设置头部状态码
func (this *Context) Status(code int) {
	this.StatusCode = code
	this.Writer.WriteHeader(code)
}

// SetHeader 设置头部信息
func (this *Context) SetHeader(key string, value string) {
	this.Writer.Header().Set(key, value)
}

// ===========================================================================
//                             提供多样的响应方法

// String 响应
func (this *Context) String(code int, format string, values ...interface{}) {
	this.SetHeader("Content-Type", "text/plain")
	this.Status(code)
	this.Writer.Write([]byte(fmt.Sprintf(format, values...)))
}

// JSON 响应
func (this *Context) JSON(code int, obj interface{}) {
	this.SetHeader("Content-Type", "application/json")
	this.Status(code)
	encoder := json.NewEncoder(this.Writer)
	if err := encoder.Encode(obj); err != nil {
		http.Error(this.Writer, err.Error(), 500)
	}
}

// Data 响应
func (this *Context) Data(code int, data []byte) {
	this.Status(code)
	this.Writer.Write(data)
}

// HTML 响应
func (this *Context) HTML(code int, html string) {
	this.SetHeader("Content-Type", "text/html")
	this.Status(code)
	this.Writer.Write([]byte(html))
}
```



## 路由 Router

我们将和路由相关的方法和结构提取了出来，放到了一个新的文件中 `router.go`，方便我们下一次对 router 的功能进行增强，例如提供动态路由的支持。 router 的 handle 方法作了一个细微的调整，即 handler 的参数，变成了 Context。



```go
package gee

import (
	"log"
	"net/http"
)

type router struct {
	// 路由表
	handlers map[string]HandlerFunc
}

func newRouter() *router {
	return &router{handlers: make(map[string]HandlerFunc)}
}

func (this *router) addRoute(method string, pattern string, handler HandlerFunc) {
	log.Printf("Route %4s - %s", method, pattern)
	key := method + "-" + pattern
	this.handlers[key] = handler
}

func (this *router) handle(c *Context) {
	key := c.Method + "-" + c.Path
	// 从路由表中调用相关的响应方法
	if handler, ok := this.handlers[key]; ok {
		handler(c)
	} else {
		c.String(http.StatusNotFound, "404 NOT FOUND: %s\n", c.Path)
	}
}
```



## 改写 gee

将 `router` 相关的代码独立后，`gee.go` 简单了不少。最重要的还是通过实现了 ServeHTTP 接口，接管了所有的 HTTP 请求

```go
package gee

import (
	"net/http"
)

// HandlerFunc defines the request handler used by gee
type HandlerFunc func(*Context)

// Engine implement the interface of ServeHTTP
type Engine struct {
	// 路由表：从原来的 map 交由 Router 管理
	router *router
}

// New is the constructor of gee.Engine
func New() *Engine {
	return &Engine{router: newRouter()}
}

// 解耦，将添加路由的方法交由 Router 处理
func (engine *Engine) addRoute(method string, pattern string, handler HandlerFunc) {
	engine.router.addRoute(method, pattern, handler)
}

// GET defines the method to add GET request
func (engine *Engine) GET(pattern string, handler HandlerFunc) {
	engine.addRoute("GET", pattern, handler)
}

// POST defines the method to add POST request
func (engine *Engine) POST(pattern string, handler HandlerFunc) {
	engine.addRoute("POST", pattern, handler)
}

// Run defines the method to start a http server
func (engine *Engine) Run(addr string) (err error) {
	return http.ListenAndServe(addr, engine)
}

func (engine *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	// 因为提供的 handler 都只是 Context 的具体方法
	// 需要为此创建具体的实现类
	c := newContext(w, req)
	engine.router.handle(c)
}
```



## 使用 Gee

```go
package main

import (
	"net/http"

	"gee"
)

func main() {
	r := gee.New()

	r.GET("/", func(context *gee.Context) {
		context.HTML(http.StatusOK, "<h1>Hello Gee</h1>")
	})
	r.GET("/hello", func(context *gee.Context) {
		// expect /hello?name=geektutu
		context.String(http.StatusOK, "hello %s, you're at %s\n", context.Query("name"), context.Path)
	})

	r.POST("/login", func(context *gee.Context) {
		context.JSON(http.StatusOK, gee.H{
			"username": context.PostForm("username"),
			"password": context.PostForm("password"),
		})
	})

	r.Run(":8080")
}
```





## 参考

- [Go语言动手写Web框架 - Gee第二天 上下文Context | 极客兔兔 (geektutu.com)](https://geektutu.com/post/gee-day2.html#设计Context)
- [7days-golang/gee-web/day2-context at master · geektutu/7days-golang (github.com)](https://github.com/geektutu/7days-golang/tree/master/gee-web/day2-context)
