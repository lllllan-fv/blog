---
# 这是页面的图标
icon: web

# 这是文章的标题
title: Group 分组控制

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: 4

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

实现分组控制。所谓分组，是指路由的分组。如果没有路由分组，我们需要针对每一个路由进行控制。大部分情况下的路由分组，是以相同的前缀来区分的。因此，我们今天实现的分组控制也是以前缀来区分，并且支持分组的嵌套。例如 `/post` 是一个分组，`/post/a` 和 `/post/b` 可以是该分组下的子分组。作用在 `/post `分组上的中间件(middleware)，也都会作用在子分组，子分组还可以应用自己特有的中间件。





## 实现分组



```go
// Engine implement the interface of ServeHTTP
type (
	RouterGroup struct {
		prefix      string
		middlewares []HandlerFunc // support middleware
		parent      *RouterGroup  // support nesting
		engine      *Engine       // all groups share a Engine instance
	}

	Engine struct {
		// 伪继承
		*RouterGroup
		router *router
		groups []*RouterGroup // store all groups
	}
)

// New is the constructor of gee.Engine
func New() *Engine {
	engine := &Engine{router: newRouter()}
	engine.RouterGroup = &RouterGroup{engine: engine}
	engine.groups = []*RouterGroup{engine.RouterGroup}
	return engine
}

// Group is defined to create a new RouterGroup
// remember all groups share the same Engine instance
func (this *RouterGroup) Group(prefix string) *RouterGroup {
	engine := this.engine
	newGroup := &RouterGroup{
		prefix: this.prefix + prefix,
		parent: this,
		engine: engine,
	}
	engine.groups = append(engine.groups, newGroup)
	return newGroup
}

func (this *RouterGroup) addRoute(method string, comp string, handler HandlerFunc) {
	pattern := this.prefix + comp
	log.Printf("Route %4s - %s", method, pattern)
	this.engine.router.addRoute(method, pattern, handler)
}
```







## 参考

- [Go语言动手写Web框架 - Gee第四天 分组控制Group | 极客兔兔 (geektutu.com)](https://geektutu.com/post/gee-day4.html)

- [7days-golang/gee-web/day4-group at master · geektutu/7days-golang (github.com)](https://github.com/geektutu/7days-golang/tree/master/gee-web/day4-group)
