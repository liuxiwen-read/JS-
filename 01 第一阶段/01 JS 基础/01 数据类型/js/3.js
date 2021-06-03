// ===============Boolean方法转换==================
// console.log(Boolean(0));            // false
// console.log(Boolean(""));           // false
// console.log(Boolean(" "));          // true
// console.log(Boolean(null));         // false
// console.log(Boolean(undefined));    // false
// console.log(Boolean([]));           // true
// console.log(Boolean([12]));         // true
// console.log(Boolean([12,13]));      // true
// console.log(Boolean(-1));           // true
// console.log(Boolean({}));           // true



// !: 取反（先转为布尔，然后取反）
// !!: 取反在取反，只相当于转换为布尔 <=> Boolean
// console.log(!1);                    // false
// console.log(!!1)                    // true



// 如果条件只是一个值，不是 ==/===/!=/>= 等这些比较，是要把这个值先转换为布尔类型，然后验证真假
// if (1) {
//     // 1    转换布尔    true
//     console.log('哈哈');
// }
// if('3px'+3) {
//     // '3px3'   转换布尔    true
//     console.log('呵呵');
// }
// if('3px'-3) {
//     // NaN - 3 => NaN       false
//     console.log('呵呵');
// }
// if('12px' * 2) {
//     // NaN * 2 => NaN        false
//     console.log('haha');
// }