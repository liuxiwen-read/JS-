/**
 *  编写两个方法 plus / minus 实现如下的执行效果
 *      let n = 10；
 *      let m = n.plus(10).minus(5)
 *      console.log(m);     // => 15  (10+10-5)
 */
~ function () {
    // => x:需要加减的数字（必须是有效数字）
    function checkX(x) {
        x = Number(x);
        // 当x为非有效数字的时候true，为有效数字false
        return isNaN(x) ? 0 : x;
    }

    function plus(x) {
        // this: 我们要操作的原始值数字（this=xxx我们不能给this手动赋值）
        x = checkX(x);
        return this + x;
    }

    function minus(x) {
        x = checkX(x);
        return this - x;
    }

    /* 扩展到内置类的原型上 */
    Number.prototype.plus = plus;
    Number.prototype.minus = minus;
}();
let n = 10;
let m = n.plus(10).minus(5);
console.log(m);




// 思考题：重构数组的slice方法（不能用内置的），基于原生JS实现出和内置方法一模一样的效果
// N/M的各种情况

Array.prototype.mySlice = function (n, m) {
    return this.slice(n, m);
}
