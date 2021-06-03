// 图像演示 ./image/03 原型练习.png
function Fn(num) {
    this.x = this.y = num;
}
Fn.prototype = {
    x : 20,
    sum : function () {
        console.log(this.x + this.y);
    }
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum);
f.sum();
Fn.prototype.sum();
console.log(f.constructor);