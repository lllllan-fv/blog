---
# 这是页面的图标
icon: page

# 这是文章的标题
title: Apache 设置 http 自动跳转 https

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
# index: 3

# 写作日期
# date: 2022-01-01

# 一个页面可以有多个分类
category: 

# 一个页面可以有多个标签
tag: 

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---



## 修改配置文件

> 找到 `Apache/conf/httpd.conf`



1. 取消以下注释（如果行首有 `#`，把井号删除）

```xml-dtd
LoadModule rewrite_module modules/mod_rewrite.so
```

2. 将所有 `AllowOverride None` 为 `AllowOverride All`

```xml-dtd
AllowOverride All
```



## 网站目录下添加文件

> 到你我的网站目录下，新建文件 `.htaccess`，写入以下内容



```xml-dtd
RewriteEngine on
RewriteCond %{SERVER_PORT} !^443$
RewriteRule (.*) https://%{SERVER_NAME}/$1 [R]
```



