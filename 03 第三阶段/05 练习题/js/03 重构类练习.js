// 图像演示 ./image/02 重构类练习.png
function fun() {
    this.a = 0;
    this.b = function () {
        alert(this.a);
    }
}
fun.prototype = {
    b : function () {
        this.a = 20;
        alert(this.a);
    },
    c : function () {
        this.a = 30;
        alert(this.a);
    }
}
var my_fun = new fun();
my_fun.b(); 
my_fun.c();





















