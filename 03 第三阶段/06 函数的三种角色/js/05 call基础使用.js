// window.name = "WINDOW";
// let obj = {
//     name: "OBJ"
// }
// let fn = function () {
//     console.log(this.name);
// }
// fn();   // this:window  => "WINDOW"
// obj.fn()    // Uncaught TypeError: obj.fn is not a function  obj中并没有fn这个属性



// ===============================================================
// window.name = "WINDOW";
// let obj = {
//     name: "OBJ"
// }
// let fn = function () {
//     console.log(this.name);
// }
// // 我们的需求是想让fn执行的时候，方法中的this指向obj
// // fn添加到obj里面，
// obj.fn = fn;
// obj.fn();   // this:obj   => "OBJ"
// // 使用完把它删除
// delete obj.fn;
// console.log(obj);



// ===============================================================
// window.name = "WINDOW";
// let obj = {
//     name: "OBJ"
// }
// let fn = function () {
//     console.log(this.name);
// }
// // call: 至少要有一个参数，没有写参数在非严格模式下window，严格模式下undefined
// fn();           // this:window  => "WINDOW"     严格下是 undefined
// fn.call(obj);   // this.obj     => "OBJ"

// fn.call();      // this:window  => "WINDOW"     严格下是 undefined
// fn.call(null)   // this:window  严格下是 null（第一个参数传递的是null/undefined/不传，非严格模式下this指向window，严格模式下传递的是谁this就是谁，不传this是undefined）




// ===============================================================
// window.name = "WINDOW";
// let obj = {
//     name: "OBJ"
// }
// function fn(n, m) {
//     console.log(this.name);
//     console.log(n);
//     console.log(m);
// }
// fn(10, 20);           // this:window     n=10 m=20
// fn.call(obj);         // this:obj        n/m=undefined
// fn.call(obj,10,20);   // this:obj        n=10 m=20 
// fn.call(10,20);       // this:10         n=20 m=undefined


