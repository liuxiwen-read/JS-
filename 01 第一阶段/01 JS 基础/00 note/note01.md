### 我还是很弱

### JS做客户端语言
> 按照相关的 JS 语法，去操作页面中的元素，有时还要操作浏览器里面的一些功能
- ECMAScript3/5/6... : JS 的语法规范（变量、数据类型、操作语句...）
- DOM（document object model）: 文档对象模型，提供一些 JS 的属性和方法，用来操作页面中的 DOM 元素
- BOM（browser object model）: 浏览器对象模型，提供一些 JS 的属性和方法，用来操作浏览器



### JS中的变量 variable
> 变量: 可变的量，在编程语言中，变量其实就是一个名字，用来存储和代表不同值的东西
```
    // 这里是 ES3 创建变量的方式
    var a = 12;
    console.log(a); // => 输出的是a 代表的值12

    var a = 12;
    a = 13;     // 可以改变前面的变量
    console.log(a); // => 输出的是a 代表的值13

    // ES6 创建变量的方式
    let b = 100;
    b = 200;

    const  c = 1000;    
    c = 2000;           // => 报错：CONST 创建的变量，存储的值不能被修改（可以理解为叫做常量）
    console.log(c);     // Uncaught TypeError: Assignment to constant variable.

    // 创建函数也相当于在创建变量
    function fn() {}
    // 创建类也相当于创建变量
    import B from './B.js';

    // Symbol 创建唯一值（基本不用）
    let n = Symbol(100);
    let m = Symbol(100);
    n == m      // false

    // 案例
    let a = 100;
    let b = 100;
    a == b      // true
```



### JS中的命名规范
- 严格区分大小写
```
    let Test = 100;
    console.log(test);  // => 无法输出，因为第一个字母小写了
```
- 使用数字、字母、下划线、$，数字不能作为开头
```
    let $box;       // => 一般用 JQ 获取的以 $ 开头
    let _box;       // => 一般公共变量都是 _ 开头
    let 1box;       // => 不可以，但是可以写 box1
```
- 使用驼峰命名法: 首字母小写，其余每一个有意义单词的首字母都要大写（命名尽可能语义化明显，使用英文单词）
```
    let studentInformation;
    let studentInfo
    //常用的缩写: add/insert/create/new（新增）、 updata（修改）、 delete/del/remove/rm（删除）、rel/select/query/get（查询）

    // 不正确的写法
    let xueshengInfo;     // 拼音和英文
    let xueshengxinxi;    // 拼音
    let xsxx;             // 拼音简写
```
- 不能使用关键字和保留字
```
    当下有特殊含义的是关键字，未来可能会成为关键字的叫做保留字
    var let const function ...

    var var = 10;   // Uncaught SyntaxError: Unexpected token 'var'     肯定不行的

    // => 代码强迫症（代码洁癖）：良好的编程习惯、极客精神（了解极客精神）

    搜索：当下ES6那些是关键字,那些是保留字（有可能出错）
    ECMAScript 关键字
        break、case、catch、continue、default、delete、do、else、finally、function、in、instanceof、new、throw、return、typeof、switch、try、void、while、with、var
    
    ECMAScript 保留字
        abstract、boolean、byte、char、class、const、debugger、double、enum、export、extends、final、float、goto、implements、import、int、interface、long、native、package、private、protected、short、public、static、synchronized、super、throws、transient、volatile
```



### JS中常用的数据类型（要背熟，记忆到0.01秒给背出来）
- 基本数据类型
    + 数字(数值) number
        常规数字和NaN
        Number类型包含整数和浮点数（浮点数数值必须包含一个小数点，且小数点后面至少有一个数字）两种值
    + 字符串 string
        所有用单引号、双引号、反引号（撇）包起来的都是字符串    '{ name:10 }'  这是字符串
    + 布尔值 boolean
        true / false
    + 空对象指针 null
    + 未定义 undefined
- 引用数据类型
    + 对象数据类型 object
        + {} 普通对象
        + [] 数组对象
        + /^[+-]?(\d|([1-9]\d+)/)(\.\d+)?$/ 正则对象    （正则很重要） 两个斜杠包起来叫做正则对象
        + Math 数学函数对象
        + 日期对象
        + ...
    + 函数数据类型 function
- 记忆时长（8秒）
    + 1分8秒
    + 40秒