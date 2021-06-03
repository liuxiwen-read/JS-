### JQ中常用的方法
```
    // 1.获取DOM元素
    // 操作方法: JQ选择器（根据选择器类型快速获取需要的元素）
    $([selector,[context]])
        $("#box")       => document.getElementById("box");
        $(".imgBox")    => document.getElementsByClassName('imgBox')[0]
        $(".box a")     => let box = document.getElementsByClassName('box')[0]  let list = box.getElementsByTagName('li')
        $("a",box)      => list = document.querySelectorAll(".box li")

    // 节点之间关系的属性: 用JQ选择器获取的元素，我们设置变量名的时候一般都以$开始
    //=>还可以再设置对应的选择器进行二次筛选
    let $box = $(".box");
    $box.children('a');         => 获取对应的子节点
    $box.find('a');             => 获取对应的后代元素
    $('a'.filter('.active'));   => 同级筛选（在所有的a中筛选出具备class="active"样式类的a）
    $box.prev();                => 获取一个的哥哥
    $box.prev('p');             => 获取它上一个标签名为p的哥哥
    $box.prevAll();             => 获取所有的哥哥
    $box.next();
    $box.nextAll();
    $box.siblings();            => 获取所有的兄弟
    $box.index();               => 获取索引
    $box.parent();              => 获取父元素
    $box.parents();             => 获取所有的祖先元素，一直到document

    // JQ支持的选择器：传统CSS3中的大部分都支持、还支持一些自己独有的
    :eq(n)  获取集合中索引为n的
    :gt(n)  大于这个索引的
    :lt(n)  小于这个索引的

    ---------------------------------------------------------------------

    // 2.DOM增删改
    // 原生JS
    let divBox = document.createElement('div');
    divBox.id = 'box';
    divBox.className = 'box';
    document.body.appendChild(divBox);

    let str = `<div id="box" class="box"></div>`;
    document.body.innerHTMl = str;

    // JQ
    let str = `<div id="box" class="box">
        ...
    </div>`;
    $('body').append(str);      => 追加到容器的末尾
    $('body').html(str);        => 等价于innerHTML
    => $('body').html()不传参是获取body中的HTML内容，除了这个方法还有text方法，等价于innerText
    
    $A.insertBefore($B);        => 把其放到$A放到$B的前面（注意点：$A,$B都是页面中已经存在的元素）
    $A.insertAfter($B);         => 把$A放到$B的后面
    $(`<div id="box" class="box">哈哈</div>`).insertBefore($($A))   => 需要把新增加元素放到$A前面，需要把字符串$()包起来，相当于创建了一个元素
    
    $A.appendTo($B);            => $B.appendTo($A); 在$B容器的末尾追加$A
    $A.prependTo($B);           => $B.prependTo($A); 在$B容器的开头追加$A

    $A.clone();                 => 实现元素的克隆
    $A.remove();                => 实现元素的删除
    
    // 操作表单元素的内容
    $inp.val()                  => 获取表单元素内容
    $inp.val("AAA")             => 设置表单元素内容
    // html和text方法是操作非表单元素内容的

    ---------------------------------------------------------------------

    // 3.操作自定义属性
    $box.attr("data-type")      => 获取自定义属性值
    $box.attr("data-type","B")  => 设置自定义属性值
    $box.attr({
        'type' : 1,
        'name' : 'AA'
    })                          => 批量设置
    $box.removeAttr("data-type");   => 移除自定义属性
    // 表单元素操作内置或者自定义属性一般使用prop和removeProp
    $radio.prop('checked')
    $radio.prop('checked',true)
    ...

    ---------------------------------------------------------------------

    // 4.操作CSS样式（盒子模型属性）

    // 设置样式
    $box.css('width',200);      => css方法是设置或者批量设置样式（原理是设置style行内样式）$box.css({width:200,height:200})，写的值不加单位，方法会帮我们自动设置上px单位
    $box.addClass('active');    => 设置样式类（原理是对className的操作），removeClass是移除，hasClass验证是否存在某个样式类，toggleClass之前有就是移除，没有就是新增

    // 获取样式
    $box.css('width');          => 不设置值得时候就是获取（原理是getComputedStyle，所有经过计算的样式都可以获取）
    $box.offset();              => 当前元素距离body的左偏移（left）和上偏移（top上）
    $box.position();            => 当前元素距离父参照物的左偏移和上偏移
    $box.width();               => .height()获取盒子的宽高（传递值进来就是设置）
    $box.innerWidth / .innerHeight / .outerWidth / .outerHeight()   => 等价于clientWidth/Height 和 offsetWidth/Height
    $(document).scrollTop([val]);   => 可以获取或者设置scrollTop的信息，对应的方法 .scrollLeft
```

### 除了操作DOM，JQ中还提供了其它有助于项目开发的方法
```
    // 1.事件处理
    // $元素.on([event type],[function])
    // $元素.off([event type],[function])
    // $元素.bind()   $元素.unbind()  $元素.delegate()...
    // $元素.click()    .mouseover  .mouseout   ...等常用事件的快捷绑定
    $box.on('click',function(){})
    $box.click(function(){})


    // 2.动画处理
    // .animate([目标],[总时间],[运动方式],[运动完做的事情])
    // .stop / .finish
    $box.stop().animate({
        top : 100,
        left : 200
    },1000,"linear",function(){});


    // AJAX请求处理
    let _DATA = null;
    $.ajax({
        url : "json/product.json",
        method : "GET",
        async : false,
        dataType : 'json',
        success : result => {
            // result:当请求成功执行success函数，result就是从服务器获取的结果
            _DATA=result;
        }
    })


    // $.toArray()转换为数组    $.merge()数组合并    $.makeArray()把类数组转换为数组    $uniqueSort() 去重加排列    $.type数据类型检测
    ...
```










