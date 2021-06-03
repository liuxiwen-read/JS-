### JS中的DOM操作:盒子模型属性
> DOM : document object model 文档对象模型，提供系列的属性和方法，让我们能在JS中操作页面中的元素

### 获取元素的属性和方法
```
    // ---------------------------- 获取元素的方法 ----------------------------
    document.getElementById([ID]) 
    [context].getElementsByTagName([tag-name]) 
    [context].getElementsByClassName([class-name])    // 在IE6-8中不兼容
    document.getElementsByName([name])    // 在IE浏览器中只对表单元素的name有作用
    [context].querySelector([selector])       // 在IE6-8中不兼容
    [context].querySelectorAll([selector])    // 在IE6-8中不兼容

    // ---------------------------- 获取元素的属性 ----------------------------
    document
    document.documentElement
    document.head
    document.body
    childNodes  所有子节点
    children    所有元素节点    //=> IE6-8中会把注释节点当做元素节点获取到
    parentNode  
    firstChild / firstElementChild
    lastChild / lastElementChild
    previousSibling / previousElementSibling 
    nextSibling / nextElementSibling    
    // 所有带Element的，在IE6-8中不兼容
```

### DOM的增删改操作
```
    document.createElement([tag-name])
    document.createTextNode([text content])
    字符串拼接（模板字符串），然后基于innerHTML/innerText存放到容器中

    [parent].appendChild([new-element])
    [parent].insertBefore([new-element],[element])

    [element].cloneNode([true/false])
    [parent].removeChild([element])

    // 设置自定义属性
    [element].xxx = xxx;
    console.log([element].xxx);

    [element].setAttribute('xxx',xxx);
    console.log([element].getAttribute('xxx'))
    [element].remoteAttribute('xxx');
```

### 获取元素样式和操作样式
```
    // 修改元素样式
    [element].style.xxx = xxx;      // 修改和设置它的行内样式
    [element].className = xxx;      // 设置样式类

    // 获取元素的样式
    console.log([element].style.xxx);   // 获取的是当前元素写在行内上的样式，如果有这个样式，但是没有写在行内上，则获取不到
```

### JS盒子模型属性
基于一些属性和方法，让我们能够获取到当前元素的样式信息，例如：clientWidth、offsetHeight等
    ● client
        ○ width / height
        ○ top / left
    ● offset
        ○ width / height
        ○ top / left
        ○ parent
    ● scroll
        ○ width / height
        ○ top / left

    方法：window.getComputedStyle([element],[伪类]) / [element].currentStyle

```
    let box = document.getElementById("box");

    //=>获取盒子可视区域的宽高（内容宽度+左右padding）
    // 1.内容溢出与否对它无影响
    // 2.获取的结果是没有单位的（其余的盒模型属性也是）
    // 3.获取的结果是整数，它会自己进行四舍五入（其余的盒模型属性也是）
    box.clientWidth
    box.clientHeight

    //=>获取当前页面一屏幕（可视化）区域的宽高
    let winW = document.documentElement.clientWidth || document.body.clientWidth;
    let winH = document.documentElement.clientHeight || document.body.clientHeight;

    //=>获取盒子左边框和上边框的大小
    box.clientLeft
    box.clientTop
```

```
    let box = document.getElementById("box");

    //=>获取盒子可视区域的宽高（内容宽度+左右padding+左右border）
    box.offsetWidth
    box.offsetHeight

    // 在没有内容溢出的情况下，获取的结果和client是一样的
    // 在有内容溢出的情况下，获取的结果约等于真实内容的宽度（上/左/padding + 真实内容的高度/宽）
    // 1.不同浏览器获取的结果不尽相同
    // 2.设置overflow属性值对最后的结果也会产生一定的影响
    box.scrollWidth
    box.scrollHeihgt

    // 获取整个页面真实的高度
    document.documentElement.scrollHeight() || document.body.scrollHeight()

    //---------------------------------------------------------------------
    let box = document.getElementById("box");
    // 竖向滚动条卷去的高度
    // 横向滚动条卷去的宽度
    // 1.边界值
    // min = 0
    // max = 整个的高度scrollHeight - 一屏幕高度clientHeight
    box.scrollTop
    box.scrollLeft

    // 13个盒子模型属性，只有这两个是“可读写”的属性（即可以获取也可以设置对应的值），其余的都是“只读”属性（不能设置值，只能获取）
```

```
    // offsetParent: 获取它的父参照物（不一定是父元素）
    // 父参照物和它的父元素没有必然的联系，父参照物查找：同一个平面中，最外层元素是所有后代元素的父参照，基于position:relative/absolute/fixed可以让元素脱离文档流（一个新的平面），从而改变元素的父参照物
    document.body.offsetParent === null;

    // offsetTop : 距离其父参照物的上偏移
    // offsetLeft : 距离其父参照物的左偏移（当前元素的外边框到父参照物的里边框）
```

### getComputedStyle / currentStyle
> 获取当前元素所有经过浏览器计算过的样式
    ● 只要元素在页面中呈现出来，那么所有的样式都是经过浏览器计算的
    ● 哪怕你没有设置和见过的样式也都计算了
    ● 不管你写或者不写，也不论写在哪，样式都在这，可以直接获取
> 在IE6~8浏览器中不兼容，需要基于currentStyle来获取
```
    // 第一个参数是操作的元素   第二个参数是元素的伪类:after/:before
    // 获取的结果是CSSStyleDeclatation这个类的实例（对象），包含了当前元素所有的样式信息
    let styleObj = window.getComputedStyle([element],null);
    // 获取元素
    styleObj['backgroundColor']
    styleObj.display

    // 在控制台输出
    window.getComputedStyle(box,null)

    // 在IE6~8，使用currentStyle
    styleObj = [element].currentStyle
```