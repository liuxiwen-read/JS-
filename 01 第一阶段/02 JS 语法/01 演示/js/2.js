// let a = 10;
// if(!a) {
//     // 条件可以多样性: 等于、大于、小于的比较/一个值或者取反等 => 最后都是要计算出是true还是false
// }

// if (a <= 0) {
//     console.log('哈哈');
// } else if(a > 0 && a < 10) {
//     // A && B：A和B都成立才为TRUE
//     // A || B：A或者B只有一个成立就为TRUE
//     console.log('呵呵');
// } else if (a == 10) {
//     console.log('嘿嘿');
// } else {
//     console.log('嘻嘻');
// }



// ===============三元运算符：简单IF/ELSE的特殊处理方式================
// 条件 ? 条件成立处理的事件 : 不成立处理的事件;
// let a = 10;
// a >= 10 ? console.log('呵呵') : console.log('哈哈');

// if(a >= 10) {
//     console.log('呵呵');
// } else {
//     console.log('哈哈');
// }

// 在24课时
// 1. 如果处理的事件比较多，我们用括号包起来，每一件事情用逗号分隔
// 2. 如果不需要处理事件，可以使用 null/undefined 占位
// let a = 10;
// a > 0 && a < 20 ? (a++,console.log(a)) : null;

// if(a > 0 && a < 20) {
//     a++;    //=> a+=1 a=a+1  =>自身累加 1
//     console.log(a);     // 11
// }

// 练习题（把if/else语句转换为三元运算符）
// let a = 10;
// a > 0 ? (a < 10 ? a++ : a--) : (a > -10 ? a += 2 : null);
// 如果不加小括号，有能执行单行语句;添加小括号，可以执行多行语句。
// 错误案例演示
// a > 0 ? a < 10 ? a++ : a--,console.log('111') : a > -10 ? a += 2 : null;


// if (a > 0) {
//     if (a < 10) {
//         a++;
//     }else {
//         a--;
//     }
// }else {
//     if (a > -10) {
//         a += 2;
//     }
// }
// console.log(a);



// ============== switch case ====================
// 1.每一种case情况结束后最好都加上break
// 2.default等价于else，以上都不成立干的事件
// 3.每一种case情况的比较用的都是 === “绝对相对”
// let a = '10';
// 把 a 修改为数字10，switch 会输出 '嘿嘿'，if会输出 '嘿嘿'
// 把 a 修改为字符串'10'，switch 会输出 '嘻嘻'，if会输出 '嘿嘿'
// switch(a) {
//     case 1 : 
//         console.log('呵呵');
//         break;
//     case 5 :
//         console.log('哈哈');
//         break;
//     case 10 :       // 此处 '5' case 5  => false 
//         console.log('嘿嘿');
//         break;
//     default :
//         console.log('嘻嘻');
// }
// if(a == 1) {
//     console.log('呵呵');
// } else if(a == 5) {
//     console.log('哈哈');
// } else if(a == 10) {    // => '5' == 5 => 先把字符串转换成数字，再进行比较，true
//     console.log('嘿嘿');
// } else {
//     console.log('嘻嘻');
// }

// 不加break，当前条件成立执行完成后，后面条件不论是否成立都要执行，直到遇到break为止（不加break可以实现变量在某些值得情况下做相同的事件 => 编程开发人员要具备探索尝试之心）
// let a = 1;
// switch(a) {
//     case 1 :
//         a++;    // a = 1 + 1 =2
//     case 5 :
//         a += 2; // a = 2 + 2 = 4
//         break;
//     default :
//         a--;
// }
// console.log(a);     // 4

// let a = 5;
// switch(a) {
//     // 如果a的值是 1 或 5 都会执行 a += 2 
//     case 1 :
//     case 5 :
//         a += 2; 
//         break;
//     default :
//         a--;
// }
// console.log(a);     // 7



