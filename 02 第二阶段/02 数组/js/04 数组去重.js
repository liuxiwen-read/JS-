// 在61课时 图片演示 ./image/01 数组去重.png

// let ary = [1, 2, 3, 1, 2, 1, 2, 3, 1, 2, 3];    // => [1,2,3]
/**
 * 方案一: (不兼容IE6~8)
 *      循环原来数组中的每一项，每拿到一项都往新数组中添加
 *      添加之前验证新数组中是否存在这一项，不存在在添加
 */
let newAry = [];
for (let i = 0; i < ary.length; i++) {
    // 1.循环获取原来数组中的每一项
    let item = ary[i];
    // 2.验证新数组中是否存在这一项
    // 直接使用ES6新提供的includes方法判断（检测是否有重复）
    if (newAry.includes(item)){
        // 3.存在这一项，不在增加到新数组中，继续下一轮循环即可
        continue;
    }
    // 4.新数组中不存在这一项，我们加入到新数组即可
    newAry.push(item);
}
console.log(newAry);    // [1, 2, 3]    原来的数组没有去重，新数组去重

// 代码优化
// let newAry = [];
// ary.forEach(item => {
//     // 遇到return后面代码不执行
//     if (newAry.includes(item)) return;
//     newAry.push(item);
// });
// console.log(newAry);      // [1, 2, 3]



/**
 * 方案二（兼容IE6~8）
 *      先分别拿出数组中的每一项A
 *      用这一项A和“它后面的每项”依次进行比较，如果遇到和当前项A相同的，则在原来数组中把这一项移除掉
 *      不用includes/indexOf（这样保证兼容性）    
 */
// let ary = [1, 2, 3, 1, 2, 1, 2, 3, 1, 2, 3];
// for (var i = 0; i < ary.length; i++) {
//     // item: 每一次循环拿出来的当前项
//     // i: 当前项的索引  i+1: 代表后一项
//     var item = ary[i];
//     // 让当前项和后面的每一项进行比较（循环）
//     for (var j = i + 1; j < ary.length; j++) {
//         // compare: 后面拿出来要比较的每一项
//         var compare = ary[j];
//         // 如果compare和item相等，说明这一项是重复的，我们把它删掉 
//         if (compare === item) {
//             // j索引这一项要从数组中移除
//             ary.splice(j, 1);
//             // 数组塌陷了: j后面的每一项索引都提前了一位，下一位要比较的应该还是j这个索引的内容
//             j--;
//         }
//     }
// }
// console.log(ary);    //  [1, 2, 3]




// let ary = [1, 2, 3, 1, 2, 1, 2, 3, 1, 2, 3];
// for (var i = 0; i < ary.length; i++) {
//     // 第一轮
//     // i=0  item=1  拿到第一项
//     var item = ary[i];
//     for (var j = i + 1; j < ary.length; j++) {
//         // j=1  compare=2  2!==1  j++
//         // j=2  compare=3  3!==1  j++
//         // j=3  compare=1  1===1  ary.splice(1,1)  [1, 2, 3,(1) 2,...]  j-- j++
//         // j=3  compare=2  ...
//         var compare = ary[j];
//         if (compare === item) {
//             ary.splice(j, 1);
//             j--;
//         }
//     }
// }
// console.log(ary);   //  [1, 2, 3]

