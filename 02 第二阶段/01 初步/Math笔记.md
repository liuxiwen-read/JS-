### Math
>数学函数: 但是它不是一个函数，它是一个对象，对象中存储了很多操作数字的属性和方法，因此被称为数学函数

### Math中常用的属性和方法(所有的Math函数的值最好是数字)
1. Math.abs([number value])     
> 获取绝对值（绝对值永远是正数或者零）

2. Math.ceil/floor([number value])      
> 把一个整向上取整 / 向下取整

3. Math.round([number value])
> 四舍五入

4. Math.max/min([val1],[val2],...)
> 获取一堆数中的最大值和最小值

// 思考题: 如果基于Math.max/min获取数组中的最大值最小值？
Math.max([12, 3, 45, 4, 67]);   // NaN 此处是只传了一个值，是个数组，和内置的语法要求不符
```
    // 两种方法
    // 1.Math.min.apply(null, arr)
    >>> Math.min.apply(null, [2,1,3])
    <<< 1
    唉？不是不能接收数组类型的参数吗？这是apply方法的特性，apply方法第二个参数为参数的数组，明白了吧，虽然我们传入的是数组参数，但是apply会将数组拆分并传入调用的函数。可以说是比较巧的用法了。

    // 2 . Math.min(...[v1, v2...])
    >>>Math.min(...[2,1,3])
    <<<1
    这里的…（三个点）是ES6中的用法，有兴趣的可以去了解一下，低版本的JS并不支持这种用法。
```

5. Math.sqrt/pow()
> sqrt: 给一个数开平方
> pow: 计算一个数的多少次幂

6. Math.random()
> 获取0-1之间的随机小数

扩展: 获取[n~m]之间的随机整数
> 包含n也包含m
> n < m
Math.round(Math.random()*(m-n)+n)
0 ~ 1 * 9
0 ~ 9 + 1
1 ~ 10

<!-- 在55课时64分钟解析 -->















