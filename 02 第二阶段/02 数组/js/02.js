/*
    slice
        实现数组的查询
        @params(参数)
            n,m 都是数字    从索引n开始，找到索引为m的地方（不包含m这一项）
        @return(返回值)
            把找到的内容以一个新数组的形式返回
*/
// let ary = [10, 20, 30, 40, 50];
// let res = ary.slice(1, 3);
// console.log(res);       // [20, 30]

// // m不写是找到末尾
// res = ary.slice(1);
// console.log(res);       // [20, 30, 40, 50]       

// // 数组的克隆，参数0不写也可以（浅克隆）
// res = ary.slice(0);
// console.log(res);       // [10, 20, 30, 40, 50]

/**
 * 思考: 
 *      1.如果n/m为负数会怎样，如果n>m会怎样，如果是小数会怎样，如果是非有效数字会怎样，如果m或者n的值比最大索引还大会怎样
 *      2.这种克隆方式叫浅克隆，可以回去先看看深度克隆如果处理！
 */



// #################################################################
/*
    concat
        实现数组的拼接
        @params(参数)
            多个任意类型值
        @return(返回值)
            拼接后的新数组（原来数组不变）
*/
// let ary1 = [10, 20, 30]; 
// let ary2 = [40, 50, 60]; 
// let res = ary1.concat('珠峰',ary2);
// // 自己和自己拼接
// // res = ary1.concat(ary1);
// console.log(res);   // [10, 20, 30, "珠峰", 40, 50, 60]



// #################################################################
/*
    toString
        把数组转换为字符串
        @params(参数)
            没有参数
        @return(返回值)
            转换后的字符串，每一项用逗号分隔（原来数组不变）
*/
// let ary1 = [10, 20, 30]; 
// let res = ary1.toString();
// console.log(res);                 // "10,20,30"
// console.log([].toString());       // ""
// console.log([12].toString());     // "12"


/*
    join
        把数组转换为字符串
        @params(参数)
            指定的分隔符（字符串格式）
        @return(返回值)
            转换后的字符串（原来数组不变）
*/
// let ary1 = [10, 20, 30]; 
// let res = ary1.join("");
// console.log(res);       // "102030"

// res = ary1.join();
// console.log(res);       // "10,20,30" 默认

// res = ary1.join("|");
// console.log(res);       // "10|20|30"

// res = ary1.join("+");
// console.log(res);       // "10+20+30"
// console.log(eval(res)); // 60   eval把字符串变为JS表达式执行



// #################################################################
/*
    indexOf / lastIndexOf
        检测当前项在数组中第一次或者最后一次出现位置的索引值（在IE6~8中不兼容）
        @params(参数)
            要检测的这一项的内容
        @return(返回值)
            这一项出现的位置索引值（数字），如果数组中没有这一项，返回的结果是-1，原来数组不变
*/
// let ary = [10, 20, 30, 10, 20, 30];
// console.log(ary.indexOf(20));        // 1
// console.log(ary.lastIndexOf(20));    // 4

// // 想验证ary中是否包含"珠峰"
// if (ary.indexOf('珠峰') === -1) {    // 不包含
//     // 如果数组中没有这一项，返回的结果是-1
//     console.log('这里没有这个数')
// }

// // 也可以直接使用ES6新提供的includes方法判断
// if (ary.includes('珠峰')) {
//     // 包含: 如果存在返回的是 turn
//     console.log('这里有这个数')
// } else {
//     console.log('这里没有这个数')
// }


