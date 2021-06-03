### DOM及其基础操作
> DOM : document object model 文档对象模型，提供一些属性和方法供我们操作页面中的元素

### 获取DOM元素的方法
> document.getElementById() 指定在文档中，基于元素的ID或者这个元素对象
    为什么 getElementById 它的上下文只能是 document ?
> [context].getElementsByTagName() 在指定上下文（容器）中，通过标签名获取一组元素集合
> [context].getElementsByClassName() 在指定上下文中，通过样式类名获取一组元素集合（不兼容IE6~8）
> document.getElementsByName() 在整个文档中，通过标签的name属性值获取一组节点集合（在IE中只有表单元素的name才能识别，所以我们一般只应用于表单元素的处理）
> document.head / document.body / document.documentElement 获取页面中的 head/body/html 三个元素
> [context].querySelector([selector]) 在指定上下文中，通过选择器获取到指定的元素对象
> [context].querySelectorAll([selector]) 在指定上下文中，通过选择器获取到指定的元素集合
```
    // querySelector / querySelectorAll 不兼容IE6~8
    let box = document.querySelector("#box");
    let links = document.querySelectorAll("a");
    // let links = document.querySelectorAll("#box a");

    let aas = document.querySelectorAll('.aa');
```

### JS中的节点和描述节点之间关系的属性
> 节点 : Note (页面中所有的东西都是节点)
> 节点集合 : NodeList (getElementsByName / querySelectorAll 获取的都是节点集合) 元素集合和节点集合没有区别
- 元素节点（元素节点）
    nodeType : 1
    nodeName : 大写的标签名
    nodevalue : null
- 文本节点
    nodeType : 3
    nodeName : '#text'
    nodevalue : 文本内容
- 注释节点
    nodeType : 8
    nodeName : '#commen'
    nodevalue : 注释内容
- 文档节点 document
    nodeType : 9
    nodeName : '#document'
    nodevalue : null
- ...

> 描述这些节点之间的关系属性
- childNodes : 获取所有的子节点
- children : 获取所有的元素子节点（子元素标签集合）
- parentNode : 获取父亲节点
- firstChild : 获取第一个子节点
- lastChild : 获取最后一个子节点
- firstElementChild / lastElementChild : 获取第一个和最后一个元素子节点（不兼容IE6~8）
- previousSibling : 获取上一个哥哥节点
- nextSibling : 获取下一个弟弟节点
- previousElementSibling / nextElementSibling : 获取哥哥和弟弟元素节点（不兼容IE6~8）
- ...

### 在JS中动态增删改元素
> 在JS中动态增删改元素
`createElement`: 创建元素对象
`createTextNode`: 创建文本对象
`appendChild`: 把元素添加到容器的末尾
`insertBefore`: 把元素添加到指定容器中，指定元素的前面
`cloneNode(true/false)`: 克隆元素或者节点
`removeChild`: 移除容器中的某个元素

### 自定义属性（这种方式是把自定义属性放到元素结构上）
`setAttribute`: 设置自定义属性
`getAttribute`: 获取自定义属性
`removeAttribute`: 移除自定义属性





























