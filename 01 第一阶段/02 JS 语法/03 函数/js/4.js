// function sum(a, b) {
//     var result = a + b;
//     if (result > 10) {
//         return result;
//     }
// }
// // sum(3, 4);
// console.log(sum(3, 4));     //没有返回值，undefined
// console.log(sum(10, 4));    //有返回值，输出对应的值

// function sum(n, m) {
//     var result = n + m;
//     result /= 10;
//     result *= 2;
//     return result;
// }
// sum();


// function sum(n, m) {
//     if (n === undefined || m === undefined) {
//         // 当n和m都等于undefined，直接return退出函数，后面代码不执行
//         return
//     }
//     var result = n + m;
//     return result;
// }
// console.log(sum(20));

// (function (a, b) {
//     console.log(a + b)
//     console.log("自执行函数")
// })(10,20)

// function sum(n, m) {
//     let total = null;
//     console.log(arguments);
//     for (var i = 0; i < arguments.length; i++) {
//         // 获取每一项的值并先转换成数字类型
//         let item = Number(arguments[i]);

//         // 判断是否为有效数字
//         if (isNaN(item)) {
//             // 如果不是有效数字true ，是有效数字false
//             // 跳出当前循环
//             continue;
//         }

//         // 把值相加
//         total += item;
//     }
//     return total;
// }

// // console.log(sum(10, 20))
// let total = sum(true, 20, "30");
// console.log(total);



function sum(n, m) {
    // console.log(arguments);
    
    let total = null;
    for (var i = 0; i < arguments.length; i++) {
        let item = Number(arguments[i]);
        console.log(item);
        if (isNaN(item)) {
            continue;
        }
        total += item;
    }
    return total;
}
sum(10,"20");






