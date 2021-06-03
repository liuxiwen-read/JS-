// let a = 12;
// console.log(a.toString());      // =>'12'  把数字12转为字符串'12'
// console.log((NaN).toString());  // =>'NaN'
// console.log(true.toString());   // =>'true'

// null 和 undefined 是禁止直接 toString 的
// (null).toString()    // => 报错
// 但是和 undefined 一样转换为字符串的结果就是 'null' / 'undefined'
/*
    null.toString()
    Uncaught TypeError: Cannot read property 'toString' of null
    undefined.toString()
    Uncaught TypeError: Cannot read property 'toString' of undefined
*/

/*
    [].toString()
    ""
    [12].toString()
    "12"
    [12.23].toString()
    "12.23"
    /^$/.toString()
    "/^$/"
*/ 

// 普通对象.toString()的结果是 "[objeck Objeck]" => 为什么
// Object.prototype.toString方法不是转换为字符串的，而是用来检测数据类型的
/*
    ({name:'xxx'}).toString()
    "[object Object]"
*/



// ============= 字符串拼接（重点）============
// 四则运算法则中，除加法之外，其余都是数学计算，只有加法可能存在字符串拼接（一旦遇到字符串，则不是数学运算，而是字符串拼接）
// console.log('10' + 10);         //=> '1010'
// console.log('10' - 10);         //=> 0
// console.log('10px' - 10);       //=> NaN

// 面试题（要搞懂）在15集
// 这一道题我没有思路（每学什么东西）
let a = 10 + null + true + [] + undefined + '珠峰' + null + [] + 10 + false;
/**
 * 解析过程：
 * 10 + null -> 10 + 0 -> 10       null转换数字为0
 * 10 + true -> 10 + 1 -> 11       true转换数字为1
 * 11 + [] -> 11 + '' -> '11'      先把空数组变成字符串，然后再转换为数字；空数组变为数字，先要经历变为空字符串，遇到字符串，啥都别想了，直接变为字符串拼接
 * '11' + undefined -> '11undefined'
 * ...
 * '11undefined珠峰null10false'
 */ 
//  let a = 10 + null + true + [12] + undefined + '珠峰' + null + [] + 10 + false;
 /**
 * 解析过程：
 * 10 + null -> 10 + 0 -> 10       null转换数字为0
 * 10 + true -> 10 + 1 -> 11       true转换数字为1
 * 11 + [] -> 11 + '12' -> '1112'      先把空数组变成字符串，然后再转换为数字；空数组变为数字，先要经历变为空字符串，遇到字符串，啥都别想了，直接变为字符串拼接
 * '1112' + undefined -> '1112undefined'
 * ...
 * '1112undefined珠峰null10false'
 */ 
// console.log(a);     // '11undefined珠峰null10false'

// 刘
let b = null + false + undefined + [12] + parseInt('12.px');



// 舒
let b = null.toSting() + false + Number({});    // Uncaught TypeError: Cannot read property 'toSting' of null



















