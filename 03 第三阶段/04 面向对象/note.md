### 面向对象
标记语言: HTML5/CSS3
编程语言: 编程思想 汇编(编程之祖)
    ● 面向过程 C (编程之父)
    ● 面向对象 JAVA (编程之母)、PHP、C#(ASP.NET)、javascript...

### 单例设计模式(Singleton Pattern)
```
    let name = "liuxiwen";
    let age = 20;
    let sex = "男";

    let name = "liudan";
    let age = 18;
    let sex = "女";

    //=>把描述当前事务特征的信息进行分组归类（减少全局变量的污染）<变量污染就是变量冲突>
    //=>这就是JS中的单例设计模式
    /*
     * beautiGir1不仅仅被叫做变量(对象名），也被称为"命名空间"
     *   单例模式:把描述事务的信息放到一个命名空间中进行归组，防止全局变量的污染
     */
    let beautiGirl = {
        name : "liuxiwen",
        age : 20
    };
    let oldMan = {
        name : "liudan",
        age : 18
    };
```
> 为了让单例模式变的高大上一些，真实项目中的单例模式都这样处理
```
    let namespace = (function(){
        // 创建一些方法（闭包中的私有方法）
        let fn = function(){
            //...
        };
        ...
        return {
            name : 'xxx',
            fn : fn
        }
    })();

    // 使用namespace里面的方法和属性
    namespace.name;
    namespace.fn();
```
> 例如 : 完成一个需要团队协作开发的案例（百度首页）
```
    /*
     * 公共模块
     */
    // utils 是一个闭包
    let utils = (function(){
        // queryElement是闭包私有的方法
        let queryElement = function(){...}

        // 可以把return看作闭包的一个出口
        return {
            // queryElement : queryElement
            queryElement
        }
    })();

    // 调用utils里面的方法（必须要在return里面返回queryElement）
    utils.queryElement();

    /*
     * read负责的页卡模块
     */ 
    let pageTabModule = (function(){
        //=>获取元素（调用其它命名空间下的方法）
        let tabBox=utils.queryElement(".tabBox");
        let show=function(){...}
        ...
        return {
            init : function(){
                //调用自己模块下的方法
                show();
            }
        }
    })();
    pageTagModule.init();
```

### 工场模式(Factory Pattern)
> 批量化生产 : 把实现某个功能的代码进行封装，后期在想实现这个功能，我们直接执行函数即可
    ● 底耦合 : 减少页面中冗(rong)余的代码
    ● 高内聚 : 提高代码的重复使用率
```
    function createPerson(name,age){
        let person = {}
        person.name = name;
        person.age = age;
        return person;
    }
    let beautyGirl = createPerson("liuxiwen",20);
    let oldMan = createPerson("liudan",18);
    // 输出函数里的方法和属性
    beautyGirl.name;
    oldMan.name;
```

### 构造原型模式（正统面向对象编程）(Object Oriented Programming)

### 原型及原型链模型
> 1.每一个函数数据类型的值，都要一个天生自带的属性 : prototype（原型），这个属性的属性值是一个对象（"用来存储实例公用属性和方法"）
    ○ 普通的函数
    ○ 类（自定义类和内置类）
> 2.在prototype这个对象中，有一个天生自带的属性 : constructor，这个属性存储的是当前函数本身
    Fn.prototype.constructor = Fn
> 3.每一个对象数据的值，也有一个天生自带的属性 : __proto__，这个属性指向"所属类的原型prototype"
    ○ 普通对象、数组、正则、Math、日期、类数组等等
    ○ 实例也是对象数据类型的值
    ○ 函数的原型prototype属性的值也是对象类型的
    ○ 函数也是对象数据类型的值

### 原型链查找机制
> 1.先找自己私有的属性，有则调取使用，没有继续找
> 2.基于__proto__找所属类原型上的方法（Fn.prototype）,如果还没有则继续基于__proto__往上找...一直找到Object.prototype为止（null）

### hasOwnProperty
> 检测某一个属性名是否为当前对象的私有属性
> "in" : 检测这个属性是否属于某个对象（不管是私有属性还是公有属性，只要是它的属性，结果就为TRUE）






