~function () {
    /*
     *  call: 改变函数中的this指向
     *    @params : 可以不传参，传递必须是引用类型值（因为后面要给它加$fn的属性）
     */
    function call(context) {
        /*
            Boolean(null)
            false
            Boolean(undefined)
            false
        */
        // undefined || window / null || window : 都是执行window
        context = context || window;
        // this : sum 也就是当前要操作的这个函数实例
        let args = [],  // 除第一个参数外剩余传递到信息值
            result;
        // 除了第一个值，其他的值全部循环添加给args
        for (let i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        context.$fn = this;
        result = context.$fn(...args);  // args=[10,20] ...是ES6中的扩展运算符，把数组中的每一项分别的展开传递给函数 => context.$fn(10,20)
        delete context.$fn;
        return result;
    }

    /* 扩展到内置类的原型上 */
    Function.prototype.call = call;
}();

let obj = {
    name: "OBJ"
}

function sum(n, m) {
    console.log(this);
    return n + m;
}

// 如果call不传，默认是undefined
let total = sum.call(obj, 10, 20);
console.log(total);


// obj.$fn = sum;
// obj.$fn();
// delete obj.$fn;








// ====================================================
// ~function () {
//     function call(context) {
//         context = context || window;

//         let args = [], 
//             result;
//         for (let i = 1; i < arguments.length; i++) {
//             args.push(arguments[i]);
//         }
//         context.$fn = this;
//         result = context.$fn(...args);  
//         delete context.$fn;
//         return result;
//     }

//     Function.prototype.call = call;
// }();

