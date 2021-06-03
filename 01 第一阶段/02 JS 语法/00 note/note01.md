案例演示：../01 数据类型检测/image/typeof01.jpg     图片演示
案例演示：../01 数据类型检测/image/typeof02.jpg     图片演示
案例演示：../01 数据类型检测/js/1.js                typeof讲解
案例演示：../01 数据类型检测/js/2.js                if/else讲解
### JS中的数据类型检测
- typeof[val]: 用来检测数据类型的运算符
- instanceof:  用来检测当前实例是否率属于某个类
- constructor: 基于构造函数检测数据类型（也是基于类的方法）
- Object.prototype.toString.call(): 检测数据类型最好的办法
```
    Type /taɪp/ : 类型
    Typeof : 返回变量类型
    Instance /ˈɪnstəns/ : 实例，例子，建议，情况； 
    Instanceof : 运算符
    Constructor : 构造函数
    Prototype : 原型模式，原型；
    Tostring : 方法，将数值转换成字符串
    Call /kɔːl/ : 呼叫，拜访，打电话；
```

### JS中的操作语句：判断、循环
```
    If /ɪf/ : 如果，假如
    Else /els/ : 其他，否则，另外；
    Switch /swɪtʃ/ : 开关，交换机，切换；
    Case /keɪs/ : 案例，情况，箱；
    Default /dɪˈfɔːlt/ : 违约，默认，默认值；
    Break /breɪk/ : 打破，打断，跳出循环
    Continue  /kənˈtɪnjuː/: 继续，连续，继续循环
    For /fə(r); fɔː(r)/: 为了，循环，循环语句；
    In /ɪn/: 在...内，输入，入口；
    Of  /əv : 属于
    While /waɪl/ : 表达式，循环
```

### 判断
> 条件成立做什么？不成立做什么？
- if/else if/else
- 三元运算符
- switch case

1. if/else
```
if(条件) {
    条件成立执行
}else if(条件2) {
    条件2成立执行
}
...
else {
    以上条件都不成立
}
```

2. == VS ===
==: 相等（如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较）
'5' == 5  => true

===: 绝对相等（如果类型不一样，肯定不相等，不会默认转换数据类型）
'5' === 5  => false

项目中为了保证业务的严谨，推荐使用 === 



### 循环
> 重复做某些事情就是循环
- for 循环
- for in 循环
- for of 循环（ES6新增）
- while 循环
- do while 循环

