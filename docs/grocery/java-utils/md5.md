---
# 这是页面的图标
icon: tool

# 这是文章的标题
title: MD5 加密

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

```java
import java.security.MessageDigest;

public class MD5Util {

    /**
     * MD5 加密
     *
     * @param str 待加密字符串
     * @return 加密结果
     */
    public static String encrypt(String str) {
        try {
            java.security.MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] array = md.digest(str.getBytes("UTF-8"));
            StringBuilder sb = new StringBuilder();
            for (byte item : array) {
                sb.append(Integer.toHexString((item & 0xFF) | 0x100).substring(1, 3));
            }

            return sb.toString().toUpperCase();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
}
```
