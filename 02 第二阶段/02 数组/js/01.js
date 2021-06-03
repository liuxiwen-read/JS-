// let ary = [12, 23, 34, 45];
// console.log(typeof ary);    // 数据类型 "objeck"
// console.log(ary);
/**
 *  ary = {
 *      0 : 12,
 *      1 : 23,
 *      2 : 34,
 *      3 : 45,
 *      length : 4
 *  }
 * 
 *  数字作为索引（key 属性名）
 *  length 代表长度
 *  
 *  ary[0] 根据索引获取指定项的内容
 *  ary.length 获取数组的长度
 *  ary.length-1 最后一项的索引
 */



// #################################################################
/*
    push
        向数组末尾追加内容
        @params(参数)
            多个任意类型
        @return(返回值)
            新增后数组的长度
*/
// let ary = [10, 20];
// let res = ary.push(33, 'AA', {
//     name : 'liuxiwen'
// })
// // 基于原始JS操作键值对的方法，也可以向末尾追加一项新的内容
// ary[ary.length] = '40';     // => ary[ary.length-1+1]   最后一项
// console.log(res,ary);       // 5 [10, 20, 33, "AA", {name:'liuxiwen'}, "40"]



// #################################################################
/*
    unshift
        向数组开始位置增加内容
        @params(参数)
            多个任意类型
        @return(返回值)
            新增后数组的长度
*/
// let ary = [10, 20];
// let res = ary.unshift(33, 'AA');    // [33, "AA", 10, 20]
// 基于原生ES6展开运算符，把原生的ary克隆一份，在新的数组中创建第一项，其余的内容使用原始ary中的信息即可，也算实现了向开始追加的效果
// ary = [100, ...ary];        // ...ary 克隆一份
// console.log(res,ary);       // [100, 33, "AA", 10, 20]



// #################################################################
/*
    shift
        删除数组中的第一项
        @params(参数)
            没有参数
        @return(返回值)
            删除的那一项
*/
// let ary = [10, 20, 30, 40];
// let res = ary.shift();    
// console.log(res,ary);       // 10   [20, 30, 40]

// 基于原生JS中的delete，把数组当做普通的对象，确实可以删除某一项内容，但是不会影响数组本身的结果特点（length长度不会跟着修改），真实项目中杜绝这样的删除使用
// delete ary[0];
// console.log(ary);



// #################################################################
/*
    pop
        删除数组中的最后一项
        @params(参数)
            没有参数
        @return(返回值)
            删除的那一项
*/
// let ary = [10, 20, 30, 40];
// let res = ary.pop();
// console.log(res, ary);       // 40   [10, 20, 30]

// 基于原生JS让数组长度干掉一位，默认干掉的就是最后一项
// ary.length--;       // ary.length-- = ary.length - 1
// console.log(ary);



// #################################################################
/*
    splice
        实现数组的增加、删除、修改
        @params(参数)
            n,m 都是数字    从索引n开始删除m个元素（m不写，是删除到末尾）
        @return(返回值)
            把删除的部分用新数组存储起来返回
*/
// let ary = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let res = ary.splice(2, 4);
// console.log(res, ary);  // [30, 40, 50, 60]     [10, 20, 70, 80, 90]

// 基于这种方法可以清空一个数组，把原来数组中的内容以新数组存储起来（有点类似数组的克隆: 把原来数组克隆一份一模一样的给新数组）
// res = ary.splice(0);
// console.log(res, ary);  //  [10, 20, 70, 80, 90]    []

// 删除最后一项和第一项
// ary.splice(ary.length - 1);
// ary.splice(0, 1);
// console.log(ary);



// #################################################################
/*
    splice
        实现数组的增加、修改
        @params(参数)
            n,m,x     从索引n开始删除m个元素，用x占用删除的部分
            n,0,x     从索引n开始，一个都不删，把x放到索引n的前面
        @return(返回值)
            把删除的部分用新数组存储起来返回
*/
// let ary = [10, 20, 30, 40, 50];
// 修改数组元素
// let res = ary.splice(1, 2, '珠峰', '培训');
// console.log(res, ary);      // [20, 30]     [10, "珠峰", "培训", 40, 50]

// 增加数据元素（指定位置添加元素）
// ary.splice(3, 0, 'hahaha');
// console.log(ary);           // [10, "珠峰", "培训", "hahaha", 40, 50]

// 向数组末尾追加
// ary.splice(ary.length, 0, "AAA");
// console.log(ary);           // [10, "珠峰", "培训", "hahaha", 40, 50, "AAA"]

// 向数组开始追加
// ary.splice(0, 0, "BBB");
// console.log(ary);           // ["BBB", 10, "珠峰", "培训", "hahaha", 40, 50, "AAA"]














