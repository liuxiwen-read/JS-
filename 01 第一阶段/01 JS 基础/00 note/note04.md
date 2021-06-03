
### 关于null和undefined的细节问题
> 网络地址: https://blog.csdn.net/u010297791/article/details/77374732
```
    null === null       //=> true       全等于: 类型一样，值一样
    null == null        //=> true       等于: 类型不一样，值一样
    null == undefined   //=> true       
    null === undefined  //=> false
    if (null === null) {    
        console.log("null全等于null");
    }
```