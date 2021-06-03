// 图像演示 ./image/05 原型练习.png
function Fn() {
    this.x = 100;
    this.y = 100;
}
Fn.prototype.getX = function () {
    console.log(this.x);
}
let f1 = new Fn;
Fn.prototype = {
    getY : function () {
        console.log(this.y);
    }
}
let f2 = new Fn;