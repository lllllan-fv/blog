---
# 这是页面的图标
icon: community

# 这是文章的标题
title: 客户端

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: 6

# 写作日期
# date: 2022-01-01

# 一个页面可以有多个分类
category: 

# 一个页面可以有多个标签
tag: 

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---



## 客户端

虽然基本功能已经完成了，但是不至于说让真正的用户也根据这么多要求进行输入。我们可以开启一个客户端，提供更加简单的方法共用户使用。



（创建 `client.go`）

```go
package main

import (
	"fmt"
	"io"
	"net"
	"os"
)

type Client struct {
	ServerIp   string
	ServerPort int
	Name       string
	conn       net.Conn
	code       int // 当前模式
}

func NewClient(serverIp string, serverPort int) *Client {
	client := &Client{
		ServerIp:   serverIp,
		ServerPort: serverPort,
		code:       999,
	}

	conn, err := net.Dial("tcp", fmt.Sprintf("%s:%d", serverIp, serverPort))
	if err != nil {
		fmt.Println("net.Dial err:", err)
		return nil
	}

	client.conn = conn

	return client
}

func (client *Client) Run() {
	for client.code != 0 {
	}
}

// 处理 server 回应的数据，直接显示到便准输出即可
func (this *Client) DealResponse() {
	// 一旦 client.conn 有数据，就直接 copy 到 stdout 标准输出上
	// 永久阻塞监听
	io.Copy(os.Stdout, this.conn)

	// 上下两种写法的效果等价
	//for {
	//	buf := make([]byte, 4096)
	//	client.conn.Read(buf)
	//	fmt.Println(buf)
	//}
}

func main() {
	client := NewClient("127.0.0.1", 8888)
	if client == nil {
		fmt.Println(">>>服务器连接失败...")
		return
	}

	// 单独开启一个 goroutine 去处理 server 的回执消息
	go client.DealResponse()
	client.Run()
}
```



## 客户端请求

（补充 `client.go`）

```go
func (this *Client) Run() {
    // 只要客户端还在线，就会一直循环执行
	for this.code != 0 {
        
        // 每次都会打印菜单供用户选择
		for this.menu() != true {
		}

        // 等待用户的选择做出相关响应
		switch this.code {
		case Rename:
			fmt.Println("更改用户名")
			break
		case PrivateChat:
			fmt.Println("私聊模式")
			break
		case PublicChat:
			fmt.Println("公聊模式")
			break
		}
	}
}

func (this *Client) menu() bool {
	var code int

	fmt.Println("1.更改用户名")
	fmt.Println("2.私聊模式")
	fmt.Println("3.公聊模式")
	fmt.Println("0.退出")

	fmt.Scanln(&code)

	if code >= 0 && code <= 3 {
		this.code = code
		return true
	} else {
		fmt.Println(">>>请输入合法范围内的数字...")
		return false
	}
}
```



## 改名功能



（修改 `client.go/Run()`）

```go
func (this *Client) Run() {
	...

		switch this.code {
		case Rename:
			fmt.Println("更改用户名")
			this.Rename()
			break
            
	...
}
```



（添加 `client.go/Rename()`）

```go
// Rename 修改用户名
func (this *Client) Rename() {
	fmt.Println(">>>请输入用户名...")

	var newName string
	fmt.Scanln(&newName)

	sendMsg := "rename|" + newName + "\n"
	_, err := this.conn.Write([]byte(sendMsg))
	if err != nil {
		fmt.Println("conn.Write err:", err)
		return
	}

}
```



## 私聊功能



（修改 `client.go/Run()`）

```go
func (this *Client) Run() {
	...
    case PrivateChat:
			this.PrivateChat()
			break
    ...    
}
```



### 选择用户

（添加 `client.go/SelectUsers()`）

```go
// SelectUsers 查询在线用户
func (this *Client) SelectUsers() {
	sendMsg := "who\n"
	_, err := this.conn.Write([]byte(sendMsg))

	if err != nil {
		fmt.Println("con Write err:", err)
		return
	}
}
```



### 进行私聊

（添加 `client.go/PrivateChat()`）

```go
// 处理 server 回应的数据，直接显示到便准输出即可
// PrivateChat 选择用户进行私聊
func (this *Client) PrivateChat() {
	var remoteName string
	chatMsg := ""

	this.SelectUsers()
	fmt.Println(">>>请输入聊天对象[用户名]，回车退出")
	fmt.Scanln(&remoteName)

	for remoteName != "" && chatMsg != "exit" {

		fmt.Println(">>>请输入聊天内容，exit退出.")

		fmt.Scanln(&chatMsg)

		if len(chatMsg) != 0 && chatMsg != "exit" {
			sendMsg := "to|" + remoteName + "|" + chatMsg + "\n"
			_, err := this.conn.Write([]byte(sendMsg))
			if err != nil {
				fmt.Println("conn Write err:", err)
				break
			}
		}

	}
}
```



## 公聊功能

（修改 `client.go/Run()`）

```go
func (this *Client) Run() {
	...
    case PublicChat: 
			this.PublicChat()
			break
    ...    
}
```



（添加 `client.go/PublicChat()`）

```go
// PublicChat 公聊
func (this *Client) PublicChat() {
	chatMsg := ""

	for chatMsg != "exit" {

		fmt.Println(">>>请输入聊天内容，exit退出.")

		fmt.Scanln(&chatMsg)

		if len(chatMsg) != 0 && chatMsg != "exit" {
			sendMsg := "pub|" + chatMsg + "\n"
			_, err := this.conn.Write([]byte(sendMsg))
			if err != nil {
				fmt.Println("conn Write err:", err)
				break
			}
		}

	}
}
```

