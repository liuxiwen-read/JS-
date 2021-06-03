// let ary = [10, 20, 30];
// console.log("0" in ary);        // true              
// console.log("push" in ary);     // true   
// console.log(ary.hasOwnProperty('0'));       // true
// console.log(ary.hasOwnProperty('push'));    // false   push是它公有的属性不是私有的

// console.log(Array.prototype.hasOwnProperty('push'));    // true  是公有还是私有属性，需要看相对谁来说的
// console.log(Array.prototype.hasOwnProperty('hasOwnProperty'));      // false
// console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));     // true
// 自己堆中有的就是私有属性，需要基于__proto__查找的就是公有属性(__proto__在IE浏览器(edge除外)中给保护起来了，不让我们在代码中操作它)



// =============================================================================
// function Fn() {
//     this.x = 100;
//     this.y = 200;
//     this.say = function () {}
// }
// Fn.prototype.eat = function () {
//     console.log("吃饭睡觉");
// }
// Fn.prototype.say = function () {}

// var f1 = new Fn();
// var f2 = new Fn();

// console.log(f1.__proto__ === Fn.prototype);     // true

// console.log(f1.__proto__.eat());
// f1.__proto__.eat();




// =============================================================================
/**
 *  检测某个属性是否为对象的公有属性：hasPubProperty
 *  方法：是它的属性，但是不是私有的
 */ 
// 基于内置类原型扩展方法
Object.prototype.hasPubProperty = function (property) {
    // 验证传递的属性名合法性（一般只能是数字或字符串等基本值）
    // if (!['string','number','boolean'].includes(typeof property)) return false;
    // 也可以使用&&
    let x = ["string","number","boolean"],
        y = typeof property;
    if (!x.includes(y)) return false;
    // 开始校验是否为公有的属性（方法中的this就是要校验的对象）
    let n = property in this,
        m = this.hasOwnProperty(property);
    // return n === true && m === false;
    return n && !m;
}
console.log(Array.prototype.hasPubProperty('push'));    // false
console.log([].hasPubProperty('push'));    // true
















