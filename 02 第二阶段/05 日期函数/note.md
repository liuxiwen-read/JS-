### 日期对象的基本操作
```
    let time = new Date();
    /*
     * 获取当前客户端（本机电脑）本地的时间
     *     这个时间用户是可以自己修改的，所以不能作为重要的参考依据
     * Mon May 03 2021 19:17:44 GMT+0800 (中国标准时间)
     *     获取的结果不是字符串是对象数据类型的，属于日期对象（或者说是Date这个类的实例对象）
     * typeof time;     // "object"
     */

    // 控制台
    new Date()
    Mon May 03 2021 19:17:44 GMT+0800 (中国标准时间)
    typeof new Date()
    "object"

    // 查看日期函数的方法
    let time = new Date()
    dir(time)
```

### 标准日期对象中提供了一些属性和方法，供我们操作日期信息
> getFullYear()         获取年
> getMonth()            获取月 结果是0~11代表第一月到第十二月
> getDate()             获取日
> getDay()              获取星期 结果是0~6代表周日到周六
> getHours()            获取时
> getMinutes()          获取分
> getSeconds()          获取秒
> getMilliseconds()     获取毫秒
> getTime()             获取当前日期距离 1970/1/1 00:00:00 这个日期之间的毫秒差
> toLocaleDateString()  获取年月日（字符串）
> toLocaleString()      获取完整的日期字符串
```
    > let time = new Date()
    < undefined
    > time.getTime()
    < 1620041483121
    > time.getDay()
    < 1
    > time.getFullYear()
    < 2021
    > time.toLocaleString()
    < "2021/5/3下午7:31:23"
```

### new Date() 除了获取本机时间，还可以把一个时间格式字符串转换为标准的时间格式
```
    > new Date("2019/7/26");
    < Fri Jul 26 2019 00:00:00 GMT+0800 (中国标准时间)
    > new Date("2019-7-26");
    < Fri Jul 26 2019 00:00:00 GMT+0800 (中国标准时间)
    > new Date("2019-7-26 10:20:20");
    < Fri Jul 26 2019 10:20:20 GMT+0800 (中国标准时间)

    /*
     * 支持的格式
     *     yyyy/mm/dd
     *     yyyy/mm/dd hh:mm:ss
     *     yyyy-mm-dd 这种格式在IE下不支持，新版本除外
     */
```












