---
# 这是页面的图标
icon: tool

# 这是文章的标题
title: JsonData

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

```java
public class JsonData {

    private int code;

    private Object data;

    private String msg;

    public JsonData() {
    }

    public JsonData(int code, Object data, String msg) {
        this.code = code;
        this.data = data;
        this.msg = msg;
    }

    public static JsonData success(Object data, String msg) {
        return new JsonData(0, data, msg);
    }

    public static JsonData success(Object data) {
        return new JsonData(0, data, null);
    }

    public static JsonData success() {
        return new JsonData(0, null, null);
    }

    public static JsonData error(int code, String msg) {
        return new JsonData(code, null, msg);
    }

    public static JsonData error(String msg) {
        return new JsonData(-1, null, msg);
    }

    public static JsonData error() {
        return new JsonData(-1, null, null);
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
```
