// 图像演示: ./image/03 私有作用域下的变量提升.png
// console.log(a, b);          // undefined undefined
// var a = 12,
//     b = 12;
// function fn() {
//     console.log(a, b);      // undefined 12
//     var a = b = 13;
//     console.log(a, b);      // 13 13
// }
// fn();
// console.log(a, b);          // 12 13



// 图像演示: ./image/04 私有作用域下的变量提升.png
// console.log(a, b, c);           // undefined undefined undefined
// var a = 12,
//     b = 13,
//     c = 14;
// function fn(a) {
// console.log(a, b, c);       // 10 13 14
// a = 100;
// c = 200;
// console.log(a, b, c);       // 100 13 200
// }
// b = fn(10);
// console.log(a, b, c);           // 12 undefined 200



// function sum(a) {
//     console.log(a);
//     let a = 100;        // Uncaught SyntaxError: Identifier 'a' has already been declared
//     console.log(a);
// }
// sum(200);



// 图像演示: ./image/05 私有作用域下的变量提升.png
// var ary = [12, 23];
// function fn(ary) {
//     console.log(ary);
//     ary[0] = 100;
//     ary = [100];
//     ary[0] = 0;
//     console.log(ary);
// }
// fn(ary);
// console.log(ary);



// 图像演示: ./image/06 作用链机制png.png
// var n = 1;
// function fn() {
//     var n = 2;
//     function f() {
//         n--;
//         console.log(n);
//     }
//     f();
//     return f;
// }
// var x = fn();
// x();
// console.log(n);



// var i = 0;
// function A() {
//     var i = 10;
//     // 函数x是在A的私有作用域中创建的
//     function x() {
//         console.log(i);
//     }
//     return x;
// }
// var y = A();    // y = x
// y();

// function B() {
//     var i = 20;
//     y();
// }
// B();



// 图像演示: ./image/07 闭包的机制.png
// var i = 5;
// function fn(i) {
//     return function (n) {
//         console.log(n + (++i));
//     }
// }
// var f = fn(1);
// f(2);
// fn(3)(4);
// fn(5)(6);
// f(7);
// console.log(i);



// var i = 20;
// function fn() {
//     i -= 2;
//     return function (n) {
//         console.log((++i) - n);
//     }
// }
// var f = fn();
// f(1);
// f(2);
// fn()(3);
// fn()(4);
// f(5);
// console.log(i);



// a 和 a() 是同一个变量名，执行的时候会变量冲突
// var a = 10;
// function a(a) {
//     console.log(a)
// }

// a(12);  //  Uncaught TypeError: a is not a function
// console.log(a)  










