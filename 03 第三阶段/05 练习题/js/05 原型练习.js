function C1(name) {
    // name : undefined
    // 这里没有私有属性 this.xxx = xxx 就是设置私有属性，
    if (name) { // 条件不成立...
        this.name = name;
    }
}
// 在原型C1.prototype上设置一个属性 name = 'Tom'
C1.prototype.name = 'Tom';
console.log(new C1());
console.log(new C1().name);



function C2(name) {
    // name : undefined
    // this.name = undefiend
    this.name = name;
}
C2.prototype.name = 'Tom';
console.log(new C2());      
console.log(new C2().name);



function C3(name) {
    // name : undefined
    // undefined 转换布尔值是 false
    // this.name = undefined || 'join'  = 'join'
    this.name = name || "join";
}
C3.prototype.name = 'Tom';
console.log(new C3());      
console.log(new C3().name);


alert((new C1().name) + (new C2().name) + (new C3().name));     // "Tomundefinedjoin"




// ==========================================
// function Fn() {
//     this.x = 100;
//     this.y = 200;
// }
// let f = new Fn;     // 返回一个实例给f，实例是对象数据类型，它天生有一个属性__proto__
// console.log(f.a);   // undefined


