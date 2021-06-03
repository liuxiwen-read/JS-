let a = 5;
switch(a) {
    // 如果a的值是 1 或 5 都会执行 a += 2 
    case 1 :
    case 5 :
        a += 2; 
        break;
    default :
        a--;
}
console.log(a);  // 7

switch (a) {
    case 1 :
        a++;
        break;
    case 5 :
        a += 5;
        console.log("a的结果" + a);
        break;
    default :
        console.log("没有结果")
}

console.log(a);     // 7




