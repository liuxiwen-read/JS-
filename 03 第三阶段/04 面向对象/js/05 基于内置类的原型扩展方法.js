/**
 * 基于内置类的原型扩展方法 
 *   在内置类原型上的方法，类所对应的实例可以直接调取使用，例如: 实例.方法()  ary.push()
 *   如果我们也把自己写的方法放到原型上，那么当前类的实例也可以直接这样调取使用了，很方便
 * 
 * 但是也有需要注意的地方
 *   1.自己扩展的方法不能影响原有内置的方法（我们自己设置的方法最好加前缀:my）
 *   2.扩展方法中的this一般都是当前类的实例（也就是要操作的值）: 实例.方法()
 */
// Array.prototype.push = function () {
//     console.log("哈哈哈");
// }
// let ary = [1, 2, 3];
// ary.push(100);
// console.log(ary);



// ================= 扩展到内置类的原型上（数组去重） =================
~function () {
    /**
     *  myUnique : 实现数组去重
     *    @params
     *    @return
     *       [Array] 去重后的数组 
     */
    function myUnique() {
        // 此时没有传递要操作的ary进来，但是方法中的this是指当前要操作的数组：ary.myUnique()
        let obj = {};
        for (let i = 0; i < this.length; i++) {
            let item = this[i];
            if (typeof obj[item] !== 'undefined') {
                this[i] = this[this.length - 1];
                this.length--;
                i--;
                continue;
            }
            obj[item] = item;
        }
        obj = null;
        return this;
    }

    // 扩展到内置类的原型上
    Array.prototype.myUnique = myUnique;
}();
let ary = [56, 23, 34, 12, 23, 34, 12, 34, 23, 12];
// ary.myUnique();     // 返回去重后的数组（也是array类的实例）
// ary.sort((a, b) => a - b);      // 返回排列后的数组
// ary.myUnique().sort((a, b) => a - b);

// 链式写法
// ary = ary.myUnique().sort((a, b) => a - b).reverse().slice(2).push("珠峰").concat(12);  //Uncaught TypeError: ary.myUnique(...).sort(...).reverse(...).slice(...).push(...).concat is not a function    执行完push返回的是一个数字（新增后数组的长度），不是数组了，不能在继续使用数组的方法
ary.myUnique().sort((a, b) => a - b).reverse();

console.log(ary);




// ==================== 数组去重 ===============
// function unique(ary) {
//     let obj = {};
//     for (let i = 0; i < ary.length; i++) {
//         let item = ary[i];
//         if (typeof obj[item] !== 'undefined') {
//             ary[i] = ary[ary.length - 1];
//             ary.length--;
//             i--;
//             continue;
//         }
//         obj[item] = item;
//     }
//     obj = null;
//     return ary;
// }
// let ary = [56, 23, 34, 12, 23, 34, 12, 34, 23, 12];
// ary = unique(ary);
// console.log(ary);

/*
    查看原型上是否有unique的方法
    > 'unique' in Array.prototype
    < false
*/







// 原因 : 每一个字符串都是String的实例，substring方法在string.prototype上 
// "http://www.a.com?lx=1&name=xxx".substring();

