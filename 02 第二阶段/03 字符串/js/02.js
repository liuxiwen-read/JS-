// let time = "2021-5-3 12:6:23"
// 时间字符串的格式化处理
// 变为自己需要呈现的格式，例如：
// "2021年05月03日 12时06分23秒"
// "2021年05月03日"
// "2021/05 12:06"
// ...


// 方案一：一路replace
// time = time.replace("-","年").replace("-","月").replace(" ","日").replace(":","时").replace(":","分") + "秒";
// console.log(time);          // "2021年5月3日12时6分23秒"


// 方案二：获取到年月日小时分钟秒这几个值后，最后想拼成什么效果就拼成什么
let time = "2021-5-3 12:6:23";

// 获取值得方法：基于indexOf获取指定符号索引，基于substring一点点截
// let n = time.indexOf("-");
// let m = time.lastIndexOf("-");
// let x = time.indexOf(" ");
// let y = time.indexOf(":");
// let z = time.lastIndexOf(":");
// let year = time.substring(0, n);
// let month = time.substring(n + 1, m);
// let day = time.substring(m + 1, x);
// console.log(year, month, day);          // "2021 5 3"

// 获取值得方法：基于split一项项的拆分
// let n = time.split(" ");    // ["2021-5-3", "12:6:23"]
// let m = n[0].split("-");    // ["2021", "5", "3"]
// let x = n[1].split(":");    // ["12", "6", "23"]
// console.log(m[0] + "年" + m[1] + "月" + m[2] + "日");   // 2021年5月3日

// 获取值得方法：基于正则表达式
// let ary = time.split(/(?: |-|:)/g);     // ["2021", "5", "3", "12", "6", "23"]
// time = ary[0] + '年' + ary[1] + '月' + ary[2] + '日';
// console.log(time);      // "2021年5月3日"

// 整合正则表达式方案：
// 不足十位补零
// let addZerp = val => {
//     if (val.length < 2) {  // val.length 获取val位数值
//         val = '0' + val;
//     }
//     return val;
// }
// 简化版本
// let addZero = val => val.length < 2 ? '0' + val : val;

// let ary = time.split(/(?: |-|:)/g);     // ["2021", "5", "3", "12", "6", "23"]
// time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
// console.log(time);      // "2021年05月03日"







