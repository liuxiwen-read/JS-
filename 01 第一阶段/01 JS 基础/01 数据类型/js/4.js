let person = {
    name: '刘喜文',
    age: 18,
    height: '185CM',
    weight: '70KG',
    1: 100
};
// 直接在控制台输入对象名，就可以对象的信息


// 获取属性名对应的属性值
// => 对象.属性名
// => 对象[属性名]      属性名是数字或者字符串格式的
// => 如果当前属性名不存在，默认的属性值是 undefined
// => 如果属性名是数字，则不能使用点的方式获取属性值
// console.log(person.name);
// console.log(person['age']);
// console.log(person.sex);        // undefined
// console.log(person[1]);
// console.log(person.1);          // Uncaught SyntaxError(语法错误): missing ) after argument list     翻译：未捕获SyntaxError(语法错误):参数列表后失踪)
/*
    Uncaught : 未捕获
    Caught /kɔ:t/ : 捕捉，身陷，纵身，抓住；
    SyntaxError : 语法错误
    Syntax /＇sɪntæks/ : 语法，句法；
    Error /＇erə/ : 误差，出错，错误，过失；
    Missing /＇mɪsɪŋ/ : 缺失，丢失，缺少的；
    After // : 在...之后，此后；
    Argument /＇ɑːgjʊmənt/ :争论，论证，争吵；
    arguments : 参数，命令行参数，对象，争论；
    List /lɪst/ : 列表，目标；
 */ 
// Uncaught SyntaxError: Invalid shorthand property initializer

// 设置属性名属性值
// => 属性名不能重复，如果属性名已经存在，不属于新增，属于修改属性值
// person.GF = '圆圆';
// person.name = '李易峰';
// console.log(person['GF']);
// console.log(person['name']);



// 删除属性
// => 真删除：把属性彻底干掉
// delete person[1];
// => 假删除：属性还在，值为空
// person.weight = null;           // 这里是自己可以控制的最好用 null
// person.weight = undefined;
// console.log(person);




// ============数组==============
/**
 *  数组是特殊的对象
 *      1. 我们中括号中设置的是属性值，它的属性名是默认生成的数字，从零开始递增，而且这个数字代表每一项的位置，我们把其称为"索引" => 从零开始，连续递增，代表每一项位置的数字属性名
 *      2. 天生默认一个属性名 length，存储数组的长度
 */ 
let ary = [12,'哈哈',true,13];
// console.log(ary);
// console.log(ary.length);        
// console.log(ary['length']);   
 
// 获得属性值
// console.log(ary[1]);
// 第一项索引0  最后一项索引ary.length-1
// console.log(ary[0]);            // 12
// console.log(ary[ary.length-1]); // 13

// 向数组末尾追加内容
// ary[ary.length] = 100;
// console.log(ary);

