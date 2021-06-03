// 数据类型的区别（堆栈底层机制）第20课时
// ../image/01数据类型之间的区别.png      图片解析
// 面试题要重点学习
// let a = 12;
// let b = a;
// b = 13;
// console.log(a);     // 12

// let n = {
//     name:'珠峰'
// };
// let m = n;
// m.name = '新城';
// console.log(n.name);    // 新城






// 堆栈内存课堂练习题
// 要十秒出答案，掌握
// ../image/02课堂练习题.png      图片解析
// let n = [10,20];
// let m = n;
// let x = m;
// m[0] = 100;
// x = [30,40];
// x[0] = 200;
// m = x;
// m[1] = 300;
// n[2] = 400;
// console.log(n,m,x);



// 阿里的面试题
// ../image/03阿里的面试题.png      图片解析
// let a = {
//     n: 1
// };
// let b = a;
// a.x = a = {
//     // a.x : 是给 a 设置一个属性叫 x
//     n: 2
// };
// console.log(a.x);       // undefined
// console.log(b);
// console.log(b.n);       // 1
// console.log(b.x.n);     // 2

// 扩展题
// ../image/04阿里的面试题扩展.png      图片解析
// 不能这样写，堆的嵌套，也叫内存嵌套，导致内存无限溢出
// let a = {n : 1};
// let b = a;
// a.x = b;
// console.log(a.x);



// var a = 'abc' + 123 + 456;
// var b = '456' + '123';
// var c = 100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false
// console.log(a,b,c);