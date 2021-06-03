// var obj = {
//     name : 'Feedback',
//     age : 25,
//     num : '123',
//     10 : '上善若水，水善利万物而不争'
// }
// // 对象中的属性名有两种格式：数字和字符串
// var a = 10;
// console.log(obj.age);
// console.log(obj.num);
// console.log(obj[a]);    // => obj[10] => '上善若水，水善利万物而不争'
// console.log(obj[10]);
// // 如果中括号中是字符串就必须加单引号或双引号，才能输出，不然报错。
// console.log(obj[num]);  // Uncaught ReferenceError: num is not defined



// var obj = {
//     name : 'liuxiwen',
//     age : 'feedback',
//     back : 'feed',
//     1 : 1000,
//     2 : 3000
// }
// for in 循环是循环对象的键值对
// for (var key(变量：存储所有的属性名) in obj（对象名）)
// for(var key in obj) {
//     console.log(key);
//     console.log('属性名：' + key + '属性值：' + obj[key]);
// }


// var age = 20,
//     weight = 100,
//     obj = {
//         age,
//         name : 'liuxiwen',
//         height : 180,
//         100 : 1000,
//         200 : 2000
//     };
// console.log(obj[weight]);
// console.log(obj[age]);      // obj[20] => undefined
// console.log(obj[100]);
// console.log(obj.name);
// for (var key in obj) {
//     console.log(key);
//     console.log("属性名：" + key + "属性值：" + obj[key]);
// }


// for (var i = 0; i <= 10; i++) {
    
//     if (Math.round(Math.random()*(10-1) + 1) > 5) {
//         console.log("大于5的数")
//     } else {
//         console.log("小于等于5的数")
//     }

// }

// 1~20     20-1=19  0~1 * 19    0 ~ 19
for (var i = 0; i <= 10; i++) {
    console.log(Math.round(Math.random() * (20-1) + 1))
}








