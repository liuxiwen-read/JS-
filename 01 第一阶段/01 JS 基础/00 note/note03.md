// 1.先来一道阿里的面试题开开胃
```
let a = {
    n: 1
};
let b = a;
a.x = a = {
    n: 2
};
console.log(a.x);
console.log(b);
```
// 扩展题
// 不能这样写，堆的嵌套，也叫内存嵌套，导致内存无限溢出 
```
let a = {n : 1};
let b = a;
a.x = b;
```

// 2. 分别写出下列表达式输出的结果（腾讯面试题）
```
var a = 'abc' + 123 + 456;
var b = '456' + '123';
var c = 100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false
console.log(a,b,c);
```



