// console.log(typeof Math);   // "object"
// console.dir(Math);
/**
 *  Math = {
 *      PI: 3.141592653589793
 *      abs: function(){[native code]}
 *      ceil: function(){[native code]}
 *  } 
 * 
 *  Math.abs()      abs是方法，后面加小括号，调用这个方法
 *  Math.PI         PI是属性，可以直接使用
 */



// ======================= Math.abs([number value]) 获取绝对值==============================
// console.log(Math.abs(-12.5));       // 12.5
// console.log(Math.abs(12));          // 12
// console.log(Math.abs(0));           // 0
// // 传递的不是数字类型的值: 先基于 Number() 转换为数字再处理
// console.log(Math.abs('-1'));        // 1
// console.log(Math.abs('-1px'));      // NaN
// console.log(Math.abs(true));        // 1



// =================== Math.ceil/floor([number value]) 向上取整 / 向下取整================
// 向上取整
// console.log(Math.ceil(12));            // 12
// console.log(Math.ceil(12.1));          // 13
// console.log(Math.ceil(12.9));          // 13
// console.log(Math.ceil(-12.1));         // -12
// console.log(Math.ceil(-12.9));         // -12

// 向下取整
// console.log(Math.floor(12));            // 12
// console.log(Math.floor(12.1));          // 12
// console.log(Math.floor(12.9));          // 12
// console.log(Math.floor(-12.1));         // -13
// console.log(Math.floor(-12.9));         // -13



// ======================== Math.round([number value]) 四舍五入 ===========================
// console.log(Math.round(12))                // 12
// console.log(Math.round(12.1))              // 12
// console.log(Math.round(12.5))              // 13    正数中，5属于入
// console.log(Math.round(12.9))              // 13
// console.log(Math.round(-12.1))             // -12
// console.log(Math.round(-12.5))             // -12   负数中，5属于舍
// console.log(Math.round(-12.9))             // -13



// ================= Math.max/min([val1],[val2],...) 最大值和最小值 ======================
// console.log(Math.max(12, 3, 45, 4, 67));      // 67
// console.log(Math.min(12, 3, 45, 4, 67));      // 3
/**
    Math.max()
    -Infinity
    Math.min()
    Infinity
 */ 




// =============== Math.sqrt/pow() sqrt:开平方 pow: 计算一个数的多少次幂 =================
// sqrt:开平方
// console.log(Math.sqrt(9));      // 3    符号N*N=M 这样的M才能整开平方
// console.log(Math.sqrt(-9));     // NaN  负数开不了平方

// pow: 计算一个数的多少次幂 
// console.log(Math.pow(2, 10))    // 1024 2的10次幂是1024



// ======================= Math.random() 获取0-1之间的随机小数 ==========================
// for (let i = 1; i <= 10; i++) {
//     console.log(Math.random());
// }


//  获取1-10之间的随机整数
// for (let i = 1; i <= 10; i++) {
//     let ran = Math.round(Math.random() * (10 - 1) + 1);
//     console.log(ran);
// }


//  获取25-30之间的随机整数
// for (let i = 1; i <= 10; i++) {
//     let ran = Math.round(Math.random() * (30 - 25) + 25);
//     console.log(ran);
// }


//  获取50-70之间的随机整数
// for (let i = 1; i <= 10; i++) {
//     let ran = Math.round(Math.random() * (70 - 50) + 50);
//     console.log(ran);
// }


