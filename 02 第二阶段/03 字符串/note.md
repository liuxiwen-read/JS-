### 字符串中的常用的方法
> 索引用 单引号、双引号、反引号 包起来的都是字符串

`字符串的基本操作`
```
    let str = 'liuxiwen';
    // 每一个字符串都是由零到多个字符组成的
    str.length;             // 字符串长度
    str[0];                 // 
    str[str.length-1]       // 获取最后一个字符 str.length-1 最后一项索引
    str[10000]              // undefined 不存在这个索引

    // 循环输出字符串中的每一个字符
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(char);
    }
```

`charAt / charCodeAt`
charAt: 根据索引获取指定位置的字符
charCodeAt: 获取指定字符的ASCII码值（Unicode编码值）
@params（参数）
    n [number]      获取字符指定的索引
@return（返回值）   
    返回查找到的字符
    找不到返回的是空字符不是undefined，或者对应的编码值

`substr` / `substring` / `slice`
都是为了实现字符串截取（在原来字符串中查找到自己想要的）
    substr(n,m): 从索引n开始截取m个字符，m不写截取到末尾（后面方法也是）
    substring(n,m): 从索引n开始找到索引为m处（不含m）
    slice(n,m): 和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个方法是不可以的

`indexOf` / `lastIndexOf` / `includes`
验证字符是否存在
    indexOf(x,y): 获取x第一次出现位置的索引，y是控制查找的起始位置索引
    lastIndexOf(x): 最后一次出现位置的索引
    没有这个字符，返回的结果是 -1

`toUpperCase` / `toLowerCase`
字符串中字母的大小写转换
    toUpperCase(): 转大写
    toLowerCase(): 转小写

`split`
split([分隔符]): 把字符串按照指定的分隔符拆分成数组（和数组中join对应）

`replace`
replace(老字符,新字符): 实现字符串的替换（经常伴随着正则而用）


`match`
`localCompare`
`trim / trimLeft / trimRight`
...
控制台输出 String.prototype 查看所有字符串中提供的方法

### 实现一些常用的需求
> 时间字符串的处理
```
    let time = "2021-5-3 12:6:23"
    // 变为自己需要呈现的格式，例如：
    // "2021年05月03日 12时06分23秒"
    // "2021年05月03日"
    // "2021/05 12:06"
    // ...
```

### queryURLParameter
> 实现一个方法 queryURLParameter 获取一个URL地址问号后面专递的参数信息
```
    https://sports.qq.com/kbsweb/game.html?mid=100008:100024498
    https://sports.qq.com/kbsweb/game.html?mid=100008:100024496
```















