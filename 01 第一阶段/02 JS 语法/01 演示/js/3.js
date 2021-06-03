/**
 * 1. 创建循环初始值                    var i=0
 * 2. 设置（验证）循环执行的条件        i<5
 * 3. 条件成立执行循环体中的内容        console.log(i);
 * 4. 当前循环结束执行步长累计操作      i++
 */
// for (var i = 0; i < 5; i++) {
//     console.log(i);     // 0 1 2 3 4
// }
// console.log(i);         // 5

// 10 -1 -2 = 7 -1 -2  = 4 
// for (var i = 10; i > 4; i -= 2) {
//     if(i < 7) {
//         i++;
//     }else{
//         i--;
//     }
// }
// console.log(i);         // 4 



// 循环体中的两个关键词
// continue: 结束当前这轮循环（continue后面的代码不再执行），继续执行下一轮循环
// break: 强制结束整个循环（break后面代码也不再执行），而且整个循环啥也不干直接结束

// 面试题
// for(var i = 0; i < 10; i++) {
//     if(i >= 2) {
//         i += 2;
//         continue;
//     }
//     if(i >= 6) {
//         i--;
//         break;
//     }
//     i++;
//     console.log(i);         // 1
// }
// console.log(i);             // 11


/**
 *  第一次：i=0 0<10，所以执行下列代码，0不大于2和6，执行i++，第一次循环输出：1
 *  第二次：i++ 2<10，所以执行下列代码，2大于等于2，成立2+2=4，遇到continue当前循环结束，直接i++
 *  第三次：i++ 5<10，所以执行下列代码，5大于等于2，成立5+2=7，遇到continue当前循环结束，直接i++
 *  第四次：i++ 8<10，所以执行下列代码，8大于等于2，成立8+2=10，遇到continue当前循环结束，直接i++   外循环输出：11
 */ 



// 1-100之和
var result = 0;
for (var i = 1; i <= 100; i++) {
    result =result + i;     
}
console.log(result);    // 5050



// 如果把result定义在循环里面result会重新定义并赋值
for (var i = 1; i <= 100; i++) {
    var result = 0;
    result =result + i;     
}
console.log(result);    // 100




