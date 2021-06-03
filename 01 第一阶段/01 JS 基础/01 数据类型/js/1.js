// console.log([val]); 在控制台输出内容  Uncaught ReferenceError: val is not defined
// console.log('hello world~~');



// ==: 进行比较的
// console.log('AA' == NaN);   // false
// console.log(10 == NaN);     // false
// console.log(NaN == NaN);    // false



// isNaN([val])
// console.log(isNaN(10));        // FALSE
// console.log(isNaN('AA'));      // true
/*
    Number('AA') => NaN
    isNaN(NaN) => true
*/
// console.log(isNaN('10'));      // false
/*
    Number('10') => 10
    isNaN(10) => false
*/



// ==============Number==============
// 把字符串转换数字，只要字符串中包含任意一个非有效数字字符（第一个点除外）结果都是NaN，空字符串会变为数字零
// console.log(Number('12.5'));        // 12.5
// console.log(Number('12.5px'));      // NaN
// console.log(Number('12.5.4'));      // NaN
// console.log(Number(''));            // 0

// 布尔转换为数字
// console.log(Number(true));             // 1
// console.log(Number(false));            // 0
// console.log(isNaN(false));             // false
/**
 * Number(false) => 0
 * inNaN(0) => false
 */ 

// null => 0  undefined => NaN
// console.log(Number(null));             // 0
// console.log(Number(undefined));        // NaN

// 把引用数据类型转换为数字，是先把它基于 toString 方法转换为字符串，然后在转换为数字
// console.log(Number({name:'10'}));         // NaN
// console.log(Number({}));                  // NaN
// {}/{xxx:'xxx'}.toString() => "[object Object]" => NaN
/**
 * ({name:'10'}).toString()
 * "[object Object]"
 * ({}).toString()
 * "[object Object]"
 */ 
// console.log(Number([]));                  // 0
// [].toString() => ''
// console.log(Number([12]));                // 12
// [12].toString() => '12'
// console.log(Number([12,23]));             // NaN
// [12,23].toString() => '12,23'
/*
    [].toString()
    ""
    [12].toString()
    "12"
    [12,23].toString()
    "12,23"     // 逗号是非有效字符
*/

// let str = '12.5px';
// console.log(Number(str));       // NaN
// console.log(parseInt(str));     // 12
// console.log(parseFloat(str));   // 12.5
// console.log(parseFloat('width:12.5px'));   // NaN
/*
    parseFloat('12.5px')
    12.5
    parseFloat(true)
    NaN
    Number(true)
    1
*/ 

//  注意：在js中浮点数的精度是17位，计算是二进制的计算数据，所以得到的不是整数
// var a = 0.1;
// var b = 0.2;
// console.log(a + b);     // 0.30000000000000004