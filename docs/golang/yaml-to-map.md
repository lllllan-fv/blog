---
# 这是页面的图标
icon: golang

# 这是文章的标题
title: 读取 yaml 文件转成 map

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: 1

# 写作日期
# date: 2022-01-01

# 一个页面可以有多个分类
category: 

# 一个页面可以有多个标签
tag: 

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---



## yaml 文件内容

```yaml
# 格式说明：
# <调用模块>:
#   <方法名>: true

turingstar.iam.v1.Authentication:
  CreateSession: true
turingstar.iam.v1.Identity:
  GetCurrentUser: true
```



## 读取文件并转成 map

```go
func init() {
	f, err := os.Open("/etc/turingstar/filterMethodList.yaml")
	if err != nil {
		log.Println("open filterMethodList.yaml err:", err)
		return
	}

	input, _ := ioutil.ReadAll(f)
	// base64 编码
	encodeString := base64.StdEncoding.EncodeToString(input)

	// base64 解码
	decodeBytes, err := base64.StdEncoding.DecodeString(encodeString)
	if err != nil {
		log.Fatalln(err)
		return
	}

	if err := yaml.Unmarshal(decodeBytes, &filterdList); err != nil {
		log.Println("yaml unmarshal err:", err)
	}
}
```

