---
# 这是页面的图标
icon: Apache

# 这是文章的标题
title: Apache 域名管理

index: 1

# 一个页面可以有多个分类
category:

# 一个页面可以有多个标签
tag:

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---



## HTTP



找到 `/apache/conf/httpd.conf` ，在文件末添加你需要管理的域名

```sh
<VirtualHost *:80>
	DocumentRoot "*/data/www/default/project" 	# 项目的路径
	ServerName project.lllllan.cn 				# 域名
</VirtualHost>
```



## HTTPS

配置证书见👉 [Apache配置SSL证书](config-ssl-certificate)

```sh
<VirtualHost 0.0.0.0:443>
		#你自己项目存放的目录
        DocumentRoot "/data/www/default/personal_data/course/"
        
        #填写证书名称
        ServerName course.lllllan.cn
        
        #启用 SSL 功能
        SSLEngine on 
        
        #证书文件的路径
        SSLCertificateFile /usr/local/apache/conf/ssl/course.lllllan.cn.crt 
        
        #私钥文件的路径
        SSLCertificateKeyFile /usr/local/apache/conf/ssl/course.lllllan.cn.key 
        
        #证书链文件的路径
        SSLCertificateChainFile /usr/local/apache/conf/ssl/root_bundle.crt 
</VirtualHost>
```



## 重启服务器

```sh
service httpd restart
```

