// function CreatePerson(name,age) {
//     // 函数没有执行之前this指的是一堆字符""
//     this.name = name;
//     this.age = age;
// }
// CreatePerson("张三",20);    // this 指得是 window  普通函数执行
// let person1 = new CreatePerson("liuxiwen",20);
/**
 * new CreatePerson()执行和普通函数执行的联系
 *   1.new这种执行方式叫做"构造函数执行模式"，此时的CreatePerson不仅仅是一个函数名，被称为"类"，而返回的结果（赋值给person1的）是一个对象，我们称之为"实例"，而函数体中出现的this指的是这个实例
 */




// 图像演示: ./iamge/03 构造函数模式执行.png
function CreatePerson(name, age) {
    // this=>person1
    this.name = name;
    this.age = age;
    // return 100;     //=>返回的还是实例
    // return {
    //     xxx : 'xxx'
    // };      //=>如果手动return的是一个基本值，对返回的实例无影响；如果手动return的是一个引用类型的值，会把默认返回的实例给替换掉（所以在构造函数模式执行下，我们一般都不要手动写return，防止把返回的实例给替换）
}
let person1 = new CreatePerson("liuxiwen", 20);
console.log(person1);

/**
 * instanceof: 用来检测某个实例是否属于这个类
 *    实例 instance 类，属于返回true，不属于返回false
 * [局限性]
 *    1.要求检测的实例必须是对象数据类型的，基本数据类型的实例是无法基于它检测出来的
 */
// console.log(person1 instanceof CreatePerson);       //=> true
// let ary = [12, 23];
// console.log(ary instanceof Array);      //=> true
// console.log(ary instanceof RegExp);     //=> false
// console.log(ary instanceof Object);     //=> true

/**
 * 基本数据类型在JS中的特殊性 
 *   1.一定是自己所属类的实例
 *   2.但是不一定是对象数据类型的
 */
// 字面量创建方式（也是number类的实例，也可以调用内置的公有方法）
// let n = 10;
// console.log(n.toFixed(2));      //=>"10.00"
// console.log(typeof n);          //=>"number"

// 构造函数创建模式（创建出来的实例是对象类型的）
// let m = new Number("10");
// console.log(m.toFixed(2));      //=>"10.00"
// console.log(typeof m);          //=>"object"

// console.log(1 instanceof Number);       //=> false




// 图像演示: ./iamge/04 构造函数模式执行.png
// =====================================================
// 构造函数执行，因为也具备普通函数执行的特点
// 1.和实例有关系的操作一定是 this.xxx=xxx，因为this是当前类创造出来的实例
// 2.私有变量和实例没有必然的联系
// function Fn(n) {
//     let m = 10;
//     this.total = n + m;
//     this.name = "liuxiwen";
//     this.say = function () {
//         console.log(this.total);
//     }
// }
// let f1 = new Fn(10);
// let f2 = new Fn(20);
// let f3 = new Fn; // new的时候不论是否加小括号，都相当于把Fn执行了，也创建了对应的实例，只不过不加小括号是不能传递实参的（当前案例中的形参n=undefined）

// console.log(f1.m);  // undefined
// console.log(f2.n);  // undefined
// console.log(f1.total);  // 20
// console.log(f2.say());  // 30   this.f2（因为say执行前面有点.） console.log(f2.total) => 30
// console.log(f1 === f2); // false  （因为是两个不同的实例对象，也就是不同的堆地址）
// console.log(f3.name);   // "liuxiwen"











