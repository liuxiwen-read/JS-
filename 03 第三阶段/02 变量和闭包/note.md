### 变量提升（声）
> 当浏览器开辟出供代码执行的栈内存后，代码并没有自上而下立即执行，而是继续做了一些事情:"把当前作用域中所有带var/function关键字的进行提前的声明和定义 => 变量提升机制
    ● 带var的只是提前声明（declare）"var a;"如果只声明没有赋值，默认值是undefined
    ● 带function的不仅声明，而且还定义了（defined）"a = 13"定义其实就是赋值，准确来说就是让变量和某个值进行关联

### 带var和不带var的区别
```
    // 在全局作用域下的区别
    /**
    * 不带var的：相当于给全局对象window设置了一个属性a
    *      window.a = 13; 
    */
    a = 13;
    console.log(a); // window.a

    /**
    * 栈内存变量存储空间
    *    b
    * 带var的：是在全局作用域下声明了一个变量b（全局变量），但是在全局下声明的变量也同样相当于给window增加了一个对应的属性（只有全局作用域具备这个特点） 
    */
    var b = 14; // 创建变量b && 给window设置了属性b
    console.log(b);         // 14
    console.log(window.b);  // 14
```

### let/const和var的区别
1.let/const不存在变量提升机制
> 创建变量的六种方式中: var/function有变量提升，而let/const/class/import都不存在这个机制

2.var允许重复声明,而let是不允许的
> 在相同的作用域中(或执行上下文中)
    ● 如果使用var/function关键词声明变量并且重复声明，是不会有影响的(声明第一次之后，之后再遇到就不再重复声明了)
    ● 但是使用let/const就不行，浏览器会校验当前作用域中是否已经存在这个变量了，如果已经存在了，则再次基于let等重新声明就会报错
```
    // 在浏览器开辟栈内存供代码自上而下执行之前,不仅有变量提升的操作,还有很多其它的操作=>“词法解析”或者“词法检测”: 就是检测当前即将要执行的代码是否会出现“语法错误 SyntaxError”，如果出现错误，代码将不会再执行（第一行都不会执行）
    console.log(1); // 这行代码就已经不会再被执行了
    let a = 12;
    console.log(a);  
    let a = 13; // Uncaught SyntaxError: Identifier 'a' has already been declared
    console.log(a); 
```
```
    // 所谓重复是:不管之前通过什么办法，只要当前栈内存中存在了这个变量，我们使用let/const等重复再声明这个变量就是语法错误
    console.log(a); // Uncaught SyntaxError: Identifier 'a' has already been declared
    var a = 12;
    let a = 13;
    console.log(a); 
```

3.let能解决typeof检测时出现的暂时性死区问题(let比var更严谨)
```
    // 没有声明和赋值，就输出a，会报错
    console.log(a);     // Uncaught ReferenceError: a is not defined
    console.log(typeof a);  // undefined  这是浏览器的BUG，本应该是报错，因为没有a（暂时性死区）

    /**
    * 词法解析
    */ 
    console.log(typeof a);  // Uncaught ReferenceError: Cannot access 'a' before initialization
    let a;
```
网址：
    es6: https://es6.ruanyifeng.com/
    es5: https://wangdoc.com/javascript/   


### 闭包作用域
1.创建函数
    开辟一个堆内存
    把函数体中的代码当做字符串存储进去
    把堆内存的地址赋值给函数名/变量名
    "函数在哪创建，那么它执行时候所需要查找的上级作用域就是谁"
2.函数执行
    形成一个全新的私有作用域、执行上下文、私有栈内存（执行一次形成一个，多个之间也不会产生影响）
    形参赋值 & 变量提升
    代码执行（把所属堆内存中的代码字符串拿出来一行行执行）
    "遇到一个变量，首先看它是否为私有变量（形参和在私有作用域中声明的变量就是私有变量），是私有的就操作自己的变量即可，不是私有的则向上级作用域中查找...一直找到全局作用域为止 => 作用域链查找机制"
    私有变量和外界的变量没有必然关系，可以理解为被私有栈内存保护起来了，这种机制其实就是"闭包的保护机制"
3.关于堆栈内存释放问题(以谷歌webkit内核为例子)
    函数执行就会形成栈内存（从内存中分配的一块空间），如果内存都不销毁释放，很容易就会导致栈内存溢出（内存爆满，电脑就卡死了），堆栈内存的释放问题是学习JS的核心知识之一

> 堆内存释放问题
```
    // 创建一个引用类型值，就会产生一个堆内存
    // 如果当前创建的堆内存不被其他东西所占用了（浏览器会在空闲的时候，查找每一个内存的引用状况，不被占用的都会给回收释放掉），则会释放
    let obj = {
        name : "liuxiwen";
    }
    let oop = obj;
    // 此时obj和oop都占用着对象的堆内存，想要释放堆内存，需要手动解除变量和值的关联（null:空对象指针）
    obj = null;
    oop = null;
```

> 栈内存释放
```
    // 打开浏览器形成的全局作用域是栈内存
    // 手动执行函数形成的私有作用域是栈内存
    // 基于ES6中的let/const形成的块作用域也是栈空间
    // ...
    
    /**
    * 全局栈内存：关掉页面的时候才会销毁
    * 私有栈内存：
    *      1.一般情况下，函数只要执行完成，形成的私有栈内存就会被销毁释放掉（排除出现无限极递归、出现死循环的模式）
    *      2.但是一旦栈内存中的某个东西（一般都是堆地址）被私有作用域以外的事物给占用了，则当前私有栈内存不能立即被释放销毁（特点：私有作用域中的私有变量等信息也保留下来了） =>市面上认为的闭包：函数执行形成不能被释放的私有栈内存，这样的才是闭包
    */ 
    function fn() {
        // ...
    }
    fn();   // 函数执行形成栈内存，执行完成栈内存销毁

    function X() {
        return function () {
            // ...
        }
    }
    let f = x();    // f占用了X执行形成的栈内存中的一个东西（返回小函数对应的堆），则X执行形成的栈内存不能被释放

    // 死递归
    function fn() {
        fn();
    }
    fn();
```





### 闭包的两个作用
> 从性能角度讲，我们真实项目中应该减少对闭包的使用(因为闭包会产生不释放的栈内存，过多使用容易导致内存溢出或者降低性能)
● 保护
● 保存
1.JQuety（JQ）前端非常经典的类库 :提供了大量的方法供开发人员使用
  => 为了防止全局变量污染（解释:导入JQ后，它里面有大量的方法，如果这些方法不保护起来，用户编写的方法很容易和JQ方法名字相同产生冲突，产生冲突可以理解为全局变量污染），JQ中的方法和变量需要用闭包保护起来
```
    /*==JQ源码剖析==*/
    (function(global,factory){
        //...
        //typeof window !== "undefined" ? window : this 验证当前所处环境的全局对象是window还是global等
        //factory => function zhufeng(window,noGlobal) {}
        factory(global); //等价于=>zhufeng(window)
    })(window,function zhufeng(window,noGlobal){
        //...
        var JQuery = function(selector,context){
            //...
        };

        // 通过给全局对象增加属性:jQuery和$，把私有的jQuery方法暴露到全局作用域下，供外面使用（等价于return jQuery）（外界需要使用函数中的私有内容，我们可以基于window.xxx和return xxx两种方式实现这个需求）
        
        window.JQuery = window.$ = JQuery;
    
    });

    //=>开始使用JQ
    JQuery();   //=>window.JQuery()
    $();
```

在真实项目中，我们一般都要把自己写的内容放到一个闭包中，这样可以有效防止自己的代码和别人代码产生冲突（全局变量污染:真实项目中是要尽可能减少对全局变量的使用的）;如果需要把自己的东西给别人用，基于return和window.xxx等方式暴露给别人即可
```
    //=>原生JS
    var xxx = (function(){s
        //....A自己写的代码
        return xxx;
    })();

    (function(){
        //....B自己写的代码
        window.xxx=xxx;
    })();

    // JQ
    $(function(){
        //....这样写在某些角度上也是为了减少全局变量
    })
```





