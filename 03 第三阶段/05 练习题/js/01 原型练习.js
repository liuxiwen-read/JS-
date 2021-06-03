// 图像演示: ./image/01 原型练习.png
function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype.getX = function () {
    console.log(this.x);
}
Fn.prototype.getY = function () {
    console.log(this.y);
}
let f1 = new Fn;
let f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();

// f1.__proto__.getX();
// ->找的是公有方法
// ->this.f1.__proto__ === Fn.prototype
// ->console.log(f1.__proto__.x)
// ->undefined

// f2.getY();
// ->找的是公有方法
// ->this : f2
// ->console.log(f2.y)
// ->200

// Fn.prototype.getY();
// ->找的是公有方法
// ->this : Fn.prototype
// ->console.log(Fn.prototype.y)
// ->undefined

// 基于constructor实现数据类型检测就是这样来玩的
// 但是这种方式有很大的弊端:因为用户可以去随意修改对应的constructor值或者是手动给ary增加一个私有的constructor属性等
// let ary = [];
// console.log(ary.constructor === Array);     // true

// 给Fn添加属性
// Fn.prototype.constructor = "AAA";
// ary.__proto__.constructor = "BBB";