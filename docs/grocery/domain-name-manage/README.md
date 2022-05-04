---
# 这是页面的图标
icon: page

# 这是文章的标题
title: Apache 域名管理

# 一个页面可以有多个分类
category:

# 一个页面可以有多个标签
tag:

# 你可以自定义页脚
# footer: 这是测试显示的页脚b
---



> Apache 上管理不同的域名对应不同的项目



找到 `/apache/httpd.conf` ，在文件末添加你需要管理的域名

```xml-dtd
<VirtualHost *:80>
	DocumentRoot "*/data/www/default/project" 	# 项目的路径
	ServerName project.lllllan.cn 				# 域名
</VirtualHost>
```



**重启服务器**

```bash
service httpd restart
```

