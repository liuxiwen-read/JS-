### 函数的三种角色
> 函数数据类型：
    1. 普通函数
    2. 类（内置类 or 自定义类）
> 对象数据类型：
    1. {}普通对象  []数组对象  /^$/正则对象  Math数字函数对象  arguments等类数组对象  HTMLCollection/NodeList元素或者节点集合类数组对象...
    2. 实例也是对象数据类型的
    3. 类的prototype也是对象数据类型的（Function.prototype除外，它是一个匿名空函数）
    4. 函数也是对象

> 函数有三种角色
    1. 普通函数
        + 形参、实参、arguments、return、箭头函数
        + 私有作用域（栈内存、执行上下文）
        + 作用域链
        + 栈内存的释放和不释放（闭包）
    2. 构造函数（类）
        + 类和实例
        + prototype 和 __proto__ 原型和原型链
        + instanceof
        + constructor
        + hasOwnproperty
        + ...
    3. 普通对象
        + 它是由键值对组成的
        + ...
    函数中的this也是重点需要学习的内容

> 优先级
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

### 安装JQuery过程
    npm init -y
    npm i jquery

### this
    每一个函数（普通函数/构造函数/内置类）都是Function这个内置类的实例，所以︰函数.__proto__===Function.prototype，函数可以直接调取Function原型上的方法
```
    Function.prototype => function anonymous(){}
    > Function.prototype
    < ƒ () { [native code] }
    > dir(Function.prototype)
    < ƒ anonymous()

    /*
    * call / apply / bind
    *    原型上提供的三个公有属性方法
    *    每一个函数都可以调用这个方法执行
    *    这些方法都是用来改变函数中的THIS指向的
    */ 
    function fn() {}
    fn.call();      //=> fn函数基于原型链找到Function.prototype上的call方法，并且让其执行（执行的是ca11方法:方法中的this是fn)
    fn.call.call(); //=> fn.call就是Function.prototype上的call方法，也是一个函数，只要是函数就能用原型上的方法，所以可以继续调用call来执行
    > fn.call
    < ƒ call() { [native code] }

    /*
        var c = fun(0).fun(1);
        c.fun(2);
        c.fun(3);

        Function.prototype.call = function $1() {
            // ...
        }
        fn.call => $1
        fn.call() => $1()   this:fn
        fn.call.call() => $1.call() => 继续让call执行，this:$1

        实例.方法(): 都是找到原型上的内置方法，让内置方法先执行（只不过执行的时候做了一些事情会对实例产生改变，而这也是这些内置方法的作用），内置方法中的this一般都是当前操作的实例
    */ 
```

### call方法
> 语法 : 函数.call([content],[params1],...)
> 函数基于原型链找到Function.prototype.call这个方法，并且把它执行，在call方法执行的时候完成了一些功能
    ● 让当前函数执行
    ● 把函数中的THIS指向改为第一个传递给CALL的实参
    ● 把传递给CALL其余的实参，当做参数信息传递给当前函数
> 如果执行CALL一个实参都没有传递，非严格模式下是让函数中的THIS指向window,严格模式下指向的是undefined
```
    Object.prototype.toString()             // toString方法中的this:Objeck.prototype
    Object.prototype.toString.call(100)     // toString方法中的this:100
```


