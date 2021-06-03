// 没有声明和赋值，就输出a，会报错
// console.log(a);     // Uncaught ReferenceError: a is not defined
// console.log(typeof a);  // undefined  这是浏览器的BUG，本应该是报错，因为没有a（暂时性死区）



/**
 * 词法解析
 */
// console.log(typeof a);  // Uncaught ReferenceError: Cannot access 'a' before initialization
// let a;




