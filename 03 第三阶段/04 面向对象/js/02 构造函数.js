/**
 * 类: 函数数据类型
 * 实例: 对象数据类型
 */ 
// 图像演示: ./iamge/04 构造函数模式执行.png
// 图像演示: ./iamge/05 构造函数模式执行.png
// 图像演示: ./iamge/06 原型及原型链.png
// 图像演示: ./iamge/07 原型及原型链.png
function Fn() {
    /**
     * new执行也会把类当做普通函数执行（当然也有类执行的一面）
     *    1.创建一个私有的栈内存
     *    2.形参赋值 & 变量提升
     *    3.浏览器创建一个对象出来（这个对象就是当前类的一个新实例），并且让函数中this指向这个实例对象 => "构造函数模式中，方法中的this是指当前类的实例"
     *    4.代码执行
     *    5.在我们不设置return的情况下，浏览器会把创建的实例对象默认返回
     */ 
    this.x = 100;
    this.y = 200;
    this.say = function () {}
}
Fn.prototype.eat = function () {}
Fn.prototype.say = function () {}

let f1 = new Fn();
let f2 = new Fn();


/*
    > Fn.prototype.constructor === Fn
    < true
    > Object
    < ƒ Object() { [native code] }
    > Object.prototype
    < {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
    > Object.prototype.__proto__
    < null

    > let str = new String("liuxwen")
    > dir(str)

    > let ary = [12,23]
    > dir(ary)
*/ 







