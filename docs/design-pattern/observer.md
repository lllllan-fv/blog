---
# 这是页面的图标
icon: design

# 这是文章的标题
title: 观察者模式

# number | boolean
# 侧边栏按 indx 从小到大排序，false 则不出现在侧边栏
index: 2

# 写作日期
# date: 2022-01-01

# 一个页面可以有多个分类
category: 

# 一个页面可以有多个标签
tag: 

# 你可以自定义页脚
# footer: 这是测试显示的页脚
---





> 多个对象之间存在 **一对多** 的依赖关系，当一个对象（**主题对象**）发生改变时，所以依赖于它的对象（**观察者对象**）都将得到通知并自动更新。



意图：定义对象间的一对多的依赖关系，松耦合、提高代码的复用

优点：观察者和被观察者之间是抽象耦合的

缺点：一对多的通知会消耗很多时间、循环依赖会增加系统复杂度、主题对象的变化通知不够具体



## 代码实现



::: tabs



@tab 观察者

```java
interface Observer {
    // 观察到主题变化之后的响应
    void response():
}

class ObserverA implements Observer {
    public void response() {
        System.out.println("观察者 A 做出响应");
    }
}

class ObserverB implements Observer {
    public void response() {
        System.out.println("观察者 B 做出响应");
    }
}
```



@tab  主题

```java
abstract class AbsSubject {
    private List<Observer> observers = new ArrayList<>();
    
    // 添加观察者
    public void add(Observer observer) {
        observers.add(observer);
    }
    
    // 删除观察者
    public void remove(Observer observer) {
        observers.remove(observer);
    }
    
    // 通知观察者
    public abstract void notify();
}

class Subject extends AbsSubject {
    public void notify() {
        // todo 对象自身的变化
        
        // 通知观察者
        for (Observer observer : observers) {
            observer.response();
        }
    }
}
```



:::



## 使用场景

- 一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将这些方面封装在独立的对象中使它们可以各自独立地改变和复用。
- 一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度。
- 一个对象必须通知其他对象，而并不知道这些对象是谁。
- 需要在系统中创建一个触发链，A对 象的行为将影响 B 对象，B 对象的行为将影响 C 对象……，可以使用观察者模式创建一种链式触发机制。



## 参考

- [观察者模式 | 菜鸟教程 (runoob.com)](https://www.runoob.com/design-pattern/observer-pattern.html)
- [观察者模式（Observer模式）详解 (biancheng.net)](http://c.biancheng.net/view/1390.html)
