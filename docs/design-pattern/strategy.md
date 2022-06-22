---
# 这是页面的图标
icon: design

# 这是文章的标题
title: 策略模式

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



> 将一些特定的行为分别封装成类（策略类），程序运行过程中可以 **动态** 地更换行为



意图：策略模式定义了算法族，分别封装起来，让他们之间可以相互替代。

优点：算法（行为）可以自由切换、避免使用多重条件判断、扩展性良好

缺点：策略类会增多、所有策略类需要对外暴露



## 设计一个类

*这里借用书中的一些栗子*



比方说我们需要创建一些鸭子，那我们可以将鸭子的一些特征和行为封装成类。

```java
public class Duck {
	// 基本描述
	private string desc;

	// 呱呱叫
	public void quack() {}

	// 起飞
	public void fly() {}

	...
}
```





### 继承超级类

上面我们定义了一个似乎所有鸭子都具有的一些行为和特征的基类，之后我们可以继承该类去创建更加具体的鸭子。

**但很多时候行为和特征并不容易抽象，并且也不是这个类别下的所有事物就都具有该行为和特征。**

- 比如橡皮鸭，人家只是个玩具，当然不会飞啦
- 比如烤鸭，都做成菜了，还怎么叫

==因此通过继承类的方式，一定程度上能够实现代码的复用，但是大多数时候的行为和特征不容易抽象和概括。== 如果你要对某些行为和特征进行抽象，那你就必须考虑到是否所有的子类都具有这些行为和特征；如果你选择在子类中对方法进行重写，这其实变成主动抛弃代码复用的优点。



### 实现多接口

从个体特征的角度出发，或许我们可以定义一些 「行为」接口，让不同的类自主地去选择是否要实现他们。



::: tabs



@tab  行为接口

定义鸭叫和飞行两个接口，让鸭的子类选择实现

```java
public interface quackAble {
    public void quack();
}

public interface flyAble {
    public void fly();
}
```



@tab 橡皮鸭

```java
public class RubberDuck implements quackAble {
    
    @Override
    public void quack() {}
}
```



@tab 气球鸭

```java
public class BalloonDuck implements flyAble {
    
    @Override 
    public void fly() {}
}
```



:::



==实现多接口在选择上能够更加的自由，但是接口必须要亲自实现，失去了代码复用的优点。==



### 对象组合

我们可以把上面的一组行为，封装成一族算法，比如一族鸭叫，不同的鸭子拥有不同的叫法，我们可以创建不同的行为类去实现他们。



```java
pu
```







## 参考

- 《Head First 设计模式》
- [策略模式 | 菜鸟教程 (runoob.com)](https://www.runoob.com/design-pattern/strategy-pattern.html)

