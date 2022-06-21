---
# 这是页面的图标
icon: tool

# 这是文章的标题
title: 页面响应

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: 5

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
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class WebUtils {
    /**
     * 将字符串渲染到客户端
     *
     * @param response 渲染对象
     * @param string   待渲染的字符串
     * @return null
     */
    public static String renderString(HttpServletResponse response, String string) {
        try {
            response.setStatus(200);
            response.setContentType("application/json");
            response.setCharacterEncoding("utf-8");
            response.getWriter().print(string);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```
