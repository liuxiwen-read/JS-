function C1(name) {
    // name : undefined
    if (name) { // 条件不成立...
        this.name = name;
    }
}

function C2(name) {
    // name : undefined
    // this.name = undefiend
    this.name = name;
}

function C3(name) {
    // name : undefined
    // undefined 转换布尔值是 false
    // this.name = undefined || 'join'  = 'join'
    this.name = name || "join";
}

C1.prototype.name = 'Tom';
C2.prototype.name = 'Tom';
C3.prototype.name = 'Tom';

// new C1().name    // => 'Tom'
// new C2().name    // => undefined
// new C3().name    // => 'join'
alert((new C1().name) + (new C2().name) + (new C3().name));     // "Tomundefinedjoin"