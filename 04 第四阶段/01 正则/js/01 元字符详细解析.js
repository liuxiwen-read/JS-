// ======================== ^ $ ========================
/**
 *  ^    以那一个元字符作为开始
 *  $    以那一个元字符作为结束
 *  \d   0~9之间的一个数字
 *  {n}  出现n次   \d{5}：一个五位数
 */ 
// let reg = /^\d/;    // 必须以数字开头
// console.log(reg.test("zhufeng"));       // fasle
// console.log(reg.test("2021zhufeng"));   // true
// console.log(reg.test("zhufeng2021"));   // false    

// let reg = /\d$/;    // 必须以数字结尾
// console.log(reg.test("zhufeng"));       // fasle
// console.log(reg.test("2021zhufeng"));   // false
// console.log(reg.test("zhufeng2021"));   // true

// //=> ^ $两个都不加：字符串中包含符合规则的内容即可
// let reg1 = /\d+/
// //=> ^ $两个都加：字符串只能是和规则一致的内容
// let reg2 = /^\d+$/
// //=> 举个例子：验证手机号码（11位，第一个数字是1即可）
// let reg = /^1\d{10}$/   // 以1开头，以任意数字结尾，{10}添加10位数



// ======================== \ 转义字符 ========================
/**
 *  .   除\n（换行符）以外的任意字符
 */ 
// . 不是小数点，是除\n以外的任意字符
// let reg = /^2.3$/;
// console.log(reg.test("2.3"));       // true
// console.log(reg.test("2@3"));       // true
// console.log(reg.test("23"));        // false

// 基于转义字符，让其只能代表小数点
// let reg = /^2\.3$/;
// console.log(reg.test("2.3"));       // true
// console.log(reg.test("2@3"));       // false


// let str = "\d";
// let reg = /^\d$/;   // \d代表0-9的数字
// console.log(reg.test(str));     // false

// str = "\\d";
// reg = /^\\d$/;      // 把特殊符号转换为普通的
// console.log(reg.test(str));     // true

// str = "\d";
// reg = /^\\d$/;
// console.log(reg.test(str));     // false

 
// console.log("珠峰\n培训");
// /*
//     珠峰
//     培训
// */
// console.log("珠峰\\n培训");
// // 珠峰\n培训




// ======================== x|y ========================
/**
 *  x|y  x或者y中的一个字符
 */ 
// let reg = /^18|29$/;    // 以1开头，以9结尾
// console.log(reg.test("18"))      // true
// console.log(reg.test("29"))      // true
// console.log(reg.test("129"))     // true
// console.log(reg.test("189"))     // true
// console.log(reg.test("1829"))    // true
// console.log(reg.test("829"))     // true
// console.log(reg.test("182"))     // true
// ----直接x|y会存在很乱的优先级问题，一般我们写的时候都伴随着小括号进行分组，因为小括号改变处理优先级 => 小括号：分组
// let reg = /^(18|29)$/;    // 以18开头，以29结尾，以其中任意两个数都可以
// console.log(reg.test("18"))      // true
// console.log(reg.test("29"))      // true
// console.log(reg.test("129"))     // false
// console.log(reg.test("189"))     // false
// console.log(reg.test("1829"))    // false
// console.log(reg.test("829"))     // false
// console.log(reg.test("182"))     // false
//=> 只能是18或者29中的一个




// ======================== x|y ========================
/**
 *  [xyz]  x或者y或者z中的一个字符
 *  +     一到多次   \d+ ：一到多个数字
 */ 
// ----------------------------------------------
// 1.中括号中出现的字符一般都代表本身的含义
// let reg = /^[@+]$/;  //以@开头，以+结尾，中括号表示@和+任意一个，只能有一个 
// console.log(reg.test("@"));      // true
// console.log(reg.test("+"));      // true
// console.log(reg.test("@@"));     // false
// console.log(reg.test("++"));     // false

// let reg = /^[@+]+$/;  //以@开头，以+结尾，中括号表示@和+任意一个，只能有一个 
// console.log(reg.test("@"));      // true
// console.log(reg.test("+"));      // true
// console.log(reg.test("@@"));     // true
// console.log(reg.test("++"));     // true

// reg = /^[\d]$/;     // \d在中括号中还是0~9
// console.log(reg.test("d"));      // false
// console.log(reg.test("\\"));     // false
// console.log(reg.test("9"));      // true

// reg = /^[\\d]$/;     // \d在中括号中还是0~9，\\ 双斜杠是为了转换一个斜杠 \
// console.log(reg.test("d"));      // true
// console.log(reg.test("\\"));     // true
// console.log(reg.test("9"));      // false

// ----------------------------------------------
// 2.中括号中不存在多位数
// let reg = /^[18]$/; 
// console.log(reg.test("1"));         // true
// console.log(reg.test("8"));         // true
// console.log(reg.test("18"));        // false

// let reg = /^[10-29]$/;  // => 1或者0-2或者9
// console.log(reg.test("1"));         // true
// console.log(reg.test("9"));         // true
// console.log(reg.test("0"));         // true
// console.log(reg.test("2"));         // true
// console.log(reg.test("-"));         // false
// console.log(reg.test("10"));        // false

// let reg = /^[(10-29)]$/;
// console.log(reg.test("("));            // true
// console.log(reg.test("-"));            // false
// console.log(reg.test("10"));           // false
// console.log(reg.test("29"));           // false





