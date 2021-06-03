/**
 * 基于 typeof 检测出来的结果
 *      1. 首先是一个字符串
 *      2. 字符串中包含对应的类型
 * 局限性
 *      1. typeof null => "object"  但是null并不是对象，它是空对象指针
 *      2. 基于 typeof 无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都是"object"
 */

// 两种方法
// console.log(typeof 1);      // number
// let a = NaN;
// console.log(typeof a);      // number
/*
    typeof a
    "number"
*/ 

// 面试题
// console.log(typeof typeof typeof []);
// => typeof [] => "object"
// => typeof "object" => "string"
// 因为 typeof 检测的结果都是字符串，所以只要两个及以上同时检测，最后结果必然是"string"，必须加引号，细节
// 在23课时，数据类型检测