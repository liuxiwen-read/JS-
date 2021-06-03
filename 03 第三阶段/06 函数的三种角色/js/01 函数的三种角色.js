// 图片演示：./image/01 函数的三种角色.png
function Fn(n, m) {
    this.x = n + m;
    this.y = n - m;
    let total = n * m;
    return total;
}
Fn.prototype.say = function () {
    console.log('say');
}

// 普通函数
let total = Fn(20, 10);
// 构造函数（类和实例）
let f = new Fn(20, 10);
// 普通对象
Fn.total = 1000;