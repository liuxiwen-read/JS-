// 箭头函数讲解
/**
 *  箭头函数的特点:
 *      简单 
 */
// function sum(n, m) {
//     return n + m;
// }

// // 修改成箭头函数 
// let sum = (n, m) => {
//     return n + m;
// }

// // 如果函数体中只有一行return,可以省略return和大括号，一行搞定
// let sum = (n, m) => n + m;

// console.log(sum(10,20));



// =======================================
// function fn(n) {
//     return function (m) {
//         return n + m;
//     }
// }
// // 改为箭头函数
// // 分解过程
// let fn = n => {
//     return function (m) {
//         return n + m;
//     }
// }

// let fn = n => {
//     return m =>  {
//         return n + m;
//     }
// }
// // 最终结果
// let fn = n => m => n + m;



// ================== 形参赋值默认值 =====================
// 验证n,m是否传值，用if判断，n,m没有传值把默认值设为0
// function sum(n, m) {
//     if(typeof n === 'undefined') {
//         n = 0;
//     }
//     if(typeof m === 'undefined') {
//         m = 0;
//     }
//     return n + m;
// }

// 改为箭头函数
// 形参赋值默认值(n = 0,m = 0): 当没有给形参传递实参的时候，执行默认值
// let sum = (n = 0,m = 0) => n + m;
// console.log(sum(10,20));




// ================== 箭头函数没有arguments =====================
// let sum = () => {
//     console.log(arguments); //Uncaught ReferenceError: arguments is not defined 箭头函数中没有arguments
// }
// sum(1, 2, 3, 4);

// 但是我们可以使用剩余运算符获取到传递的实参集合（它是数组）
// let sum = (...arg) => {
//     console.log(...arg);
//     return eval(arg.join('+'));
// }

// let sum = (...arg) => eval(arg.join('+'));
// console.log(sum(1, 2, 3, 4));



// ================== 箭头函数中的this某些场景也是方便我们操作的 =====================
// ================== 还有其他......等等 =====================






