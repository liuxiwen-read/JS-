// 图像演示 ./image/04 原型练习.png
function Fn() {
    let a = 1;
    this.a = a;
}

Fn.prototype.say = function () {
    this.a = 2;
}

Fn.prototype = new Fn;
let f1 = new Fn;

Fn.prototype.b = function () {
    this.a = 3;
}

console.log(f1.a);
console.log(f1.prototype);
console.log(f1.b);      // f1.b 是一个函数
console.log(f1.hasOwnProperty('b'));
console.log('b' in f1);
console.log(f1.constructor == Fn);
console.log(f1.say());













