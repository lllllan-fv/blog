---
# 这是页面的图标
icon: golang

# 这是文章的标题
title: 新增功能

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



## 提供改名、私聊、公聊功能

需要根据用户的输入，去判别该用户的行为。我们为此创建 `msg.go` 并定一个新的类来区分或者说是鉴别用户行为



### Msg 类

- Msg 类，其中 str 表示整个用户输入，其中 code 表示该输入的行为类别
- 三个常量，分别是改名、私聊、公聊的代号
- calCode，在新建 Msg 的时候会根据用户的输入去判定用户行为

```go
package main

import "strings"

type Msg struct {
	str  string
	code int
}

const (
	Rename = iota + 1
	PrivateChat
	PublicChat
)

func NewMsg(str string) *Msg {
	msg := &Msg{
		str:  str,
		code: calCode(str),
	}

	return msg
}

/*
	1 rename| 改名
	2 to|toUser| 私聊
	3 pub| 公聊
	0 <else> 其他格式暂时不管
*/
func calCode(str string) int {
	n := len(strings.Split(str, "|"))

	if len(str) > 4 && str[:4] == "pub|" && n == 2 {
		return PublicChat
	}

	if len(str) > 5 && str[:3] == "to|" && n == 3 {
		return PrivateChat
	}

	if len(str) > 7 && str[:7] == "rename|" && n == 2 {
		return Rename
	}

	return 0
}
```





### 输入监听

（补充 `user.go/ListenWrite()` 方法），为每个用户的输入分配一个创建 Msg 实体，根据判定的类别去做出相应的回复

```go
// ListenWrite 监听用户输入
func (this *User) ListenWrite(server *Server) {
	buf := make([]byte, 4096)

	for {
		n, err := this.conn.Read(buf)

		...

		// 获取用户输入（去掉'\n'）
		msg := NewMsg(string(buf[:n-1]))
		switch msg.code {
		case Rename:
			this.PrintMessage("rename")
			break
		case PrivateChat:
			this.PrintMessage("private chat")
			break
		case PublicChat:
			this.PrintMessage("public chat")
			break
		case 0:
			this.PrintMessage("[server]: 我不理解")
			break
		}
	}
}
```



### 执行测试

```sh
go build -o server main.go server.go user.go msg.go
./server
```

```sh
nc 127.0.0.1 8888
rename|rose
to|rose|hello
pub|hello
```

![image-20220528001649935](./img/image-20220528001649935.png)
