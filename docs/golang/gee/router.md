---
# 这是页面的图标
icon: web

# 这是文章的标题
title: Router 前缀树路由

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



## 目标

- 使用 Trie 树实现动态路由(dynamic route)解析。
- 支持两种模式 `:name` 和 `*filepath`



此次代码的目录结构：

```go
gee/
  |--gee.go
  |--trie.go
  |--router.go
  |--context.go
  |--go.mod
main.go
go.mod
```



## 思路整理



此前添加的都是静态路由，不能够实现动态路由（例如 `/hello/:name`，可以匹配 `/hello/geektutu`、 `hello/jack`等）

对于动态路由，我们则需要对整条路径进行拆解，对其中特殊的字符作特殊的匹配，于是就需要用到特殊的数据结构来处理 —— 前缀树



![trie tree](./img/trie_router.jpg)





## 设计 Trie



这个是比较粗糙的前缀树（字典树），这个需要自学一下字典树，在这里没什么好讲的。



```go
package gee

import (
	"fmt"
	"strings"
)

type node struct {
	pattern  string
	part     string
	children []*node
	isWild   bool
}

func (this *node) String() string {
	return fmt.Sprintf("node{pattern=%s, part=%s, isWild=%t}", this.pattern, this.part, this.isWild)
}

func (this *node) insert(pattern string, parts []string, height int) {
	if len(parts) == height {
		this.pattern = pattern
		return
	}

	part := parts[height]
	child := this.matchChild(part)
	if child == nil {
		child = &node{part: part, isWild: part[0] == ':' || part[0] == '*'}
		this.children = append(this.children, child)
	}
	child.insert(pattern, parts, height+1)
}

func (this *node) search(parts []string, height int) *node {
	if len(parts) == height || strings.HasPrefix(this.part, "*") {
		if this.pattern == "" {
			return nil
		}
		return this
	}

	part := parts[height]
	children := this.matchChildren(part)

	for _, child := range children {
		result := child.search(parts, height+1)
		if result != nil {
			return result
		}
	}

	return nil
}

func (this *node) travel(list *([]*node)) {
	if this.pattern != "" {
		*list = append(*list, this)
	}
	for _, child := range this.children {
		child.travel(list)
	}
}

func (this *node) matchChild(part string) *node {
	for _, child := range this.children {
		if child.part == part || child.isWild {
			return child
		}
	}
	return nil
}

func (this *node) matchChildren(part string) []*node {
	nodes := make([]*node, 0)
	for _, child := range this.children {
		if child.part == part || child.isWild {
			nodes = append(nodes, child)
		}
	}
	return nodes
}
```



## 修改 Router

需要把设计好的 Trie 应用到 Router 当中

```go
package gee

import (
	"net/http"
	"strings"
)

type router struct {
	roots    map[string]*node
	handlers map[string]HandlerFunc
}

func newRouter() *router {
	return &router{
		roots:    make(map[string]*node),
		handlers: make(map[string]HandlerFunc),
	}
}

// 路径中只允许出现一个 *
func parsePattern(pattern string) []string {
	split := strings.Split(pattern, "/")

	parts := make([]string, 0)
	for _, item := range split {
		// 自动过滤为空的子目录
		if item != "" {
			parts = append(parts, item)
			if item[0] == '*' {
				break
			}
		}
	}
	return parts
}

func (this *router) addRoute(method string, pattern string, handler HandlerFunc) {
	parts := parsePattern(pattern)

	key := method + "-" + pattern
	_, ok := r.roots[method]
	if !ok {
		r.roots[method] = &node{}
	}
	r.roots[method].insert(pattern, parts, 0)
	r.handlers[key] = handler
}

func (this *router) getRoute(method string, path string) (*node, map[string]string) {
	searchParts := parsePattern(path)
	params := make(map[string]string)
	root, ok := r.roots[method]

	if !ok {
		return nil, nil
	}

	n := root.search(searchParts, 0)

	if n != nil {
		parts := parsePattern(n.pattern)
		for index, part := range parts {
			if part[0] == ':' {
				params[part[1:]] = searchParts[index]
			}
			if part[0] == '*' && len(part) > 1 {
				params[part[1:]] = strings.Join(searchParts[index:], "/")
				break
			}
		}
		return n, params
	}

	return nil, nil
}

func (this *router) getRoutes(method string) []*node {
	root, ok := r.roots[method]
	if !ok {
		return nil
	}
	nodes := make([]*node, 0)
	root.travel(&nodes)
	return nodes
}

func (this *router) handle(c *Context) {
	n, params := r.getRoute(c.Method, c.Path)
	if n != nil {
		c.Params = params
		key := c.Method + "-" + n.pattern
		r.handlers[key](c)
	} else {
		c.String(http.StatusNotFound, "404 NOT FOUND: %s\n", c.Path)
	}
}
```



## 其他不变

:::: code-group

::: code-group-item gee.go

```go
package gee

import (
	"log"
	"net/http"
)

// HandlerFunc defines the request handler used by gee
type HandlerFunc func(*Context)

// Engine implement the interface of ServeHTTP
type Engine struct {
	router *router
}

// New is the constructor of gee.Engine
func New() *Engine {
	return &Engine{router: newRouter()}
}

func (this *Engine) addRoute(method string, pattern string, handler HandlerFunc) {
	log.Printf("Route %4s - %s", method, pattern)
	engine.router.addRoute(method, pattern, handler)
}

// GET defines the method to add GET request
func (this *Engine) GET(pattern string, handler HandlerFunc) {
	engine.addRoute("GET", pattern, handler)
}

// POST defines the method to add POST request
func (this *Engine) POST(pattern string, handler HandlerFunc) {
	engine.addRoute("POST", pattern, handler)
}

// Run defines the method to start a http server
func (this *Engine) Run(addr string) (err error) {
	return http.ListenAndServe(addr, engine)
}

func (this *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	c := newContext(w, req)
	engine.router.handle(c)
}
```

:::

::: code-group-item context.go

```go
package gee

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type H map[string]interface{}

type Context struct {
	// origin objects
	Writer http.ResponseWriter
	Req    *http.Request

	// request info
	Path   string
	Method string
	Params map[string]string

	// response info
	StatusCode int
}

func newContext(w http.ResponseWriter, req *http.Request) *Context {
	return &Context{
		Writer: w,
		Req:    req,
		Path:   req.URL.Path,
		Method: req.Method,
	}
}

func (this *Context) Param(key string) string {
	value, _ := this.Params[key]
	return value
}

func (this *Context) PostForm(key string) string {
	return this.Req.FormValue(key)
}

func (this *Context) Query(key string) string {
	return this.Req.URL.Query().Get(key)
}

func (this *Context) Status(code int) {
	this.StatusCode = code
	this.Writer.WriteHeader(code)
}

func (this *Context) SetHeader(key string, value string) {
	this.Writer.Header().Set(key, value)
}

// ==============================================================================

func (this *Context) String(code int, format string, values ...interface{}) {
	this.SetHeader("Content-Type", "text/plain")
	this.Status(code)

	this.Writer.Write([]byte(fmt.Sprintf(format, values...)))
}

func (this *Context) JSON(code int, obj interface{}) {
	this.SetHeader("Content-Type", "application/json")
	this.Status(code)

	encoder := json.NewEncoder(this.Writer)
	if err := encoder.Encode(obj); err != nil {
		http.Error(this.Writer, err.Error(), 500)
	}
}

func (this *Context) Data(code int, data []byte) {
	this.Status(code)

	this.Writer.Write(data)
}

func (this *Context) HTML(code int, html string) {
	this.SetHeader("Content-Type", "text/html")
	this.Status(code)

	this.Writer.Write([]byte(html))
}
```

:::

::: code-group-item gee/go.mod

```go
module gee

go 1.18
```

:::

::: code-group-item main.go

```go
package main

import (
	"net/http"

	"gee"
)

func main() {
	r := gee.New()
	r.GET("/", func(c *gee.Context) {
		c.HTML(http.StatusOK, "<h1>Hello Gee</h1>")
	})

	r.GET("/hello", func(c *gee.Context) {
		// expect /hello?name=geektutu
		c.String(http.StatusOK, "hello %s, you're at %s\n", c.Query("name"), c.Path)
	})

	r.GET("/hello/:name", func(c *gee.Context) {
		// expect /hello/geektutu
		c.String(http.StatusOK, "hello %s, you're at %s\n", c.Param("name"), c.Path)
	})

	r.GET("/assets/*filepath", func(c *gee.Context) {
		c.JSON(http.StatusOK, gee.H{"filepath": c.Param("filepath")})
	})

	r.Run(":8080")
}
```

:::

::: code-group-item go.mod

```go
module router

go 1.18

require gee v0.0.0

replace gee => ./gee
```

:::

::::





## 参考

- [Go语言动手写Web框架 - Gee第三天 前缀树路由Router | 极客兔兔 (geektutu.com)](https://geektutu.com/post/gee-day3.html)
- [7days-golang/gee-web/day3-router at master · geektutu/7days-golang (github.com)](https://github.com/geektutu/7days-golang/tree/master/gee-web/day3-router)
