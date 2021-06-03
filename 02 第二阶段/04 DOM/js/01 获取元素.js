// 获取元素对象
// let tabBox = document.getElementById('tabBox');

// 基于 getElementsByClassName / getElementsByTagName 获取到的是元素集合，想要操作某一个元素需要在集合中根据索引取出来才可以使用
// let tabBox = document.getElementsByClassName('tabBox')[0];

// querySelector 获取的是一个元素对象，那怕页面中有多个符合的，也只获取第一个
// querySelectorAll 获取的是一个集合，那么只有一个集合，也是一个集合，集合中有一项
// let tabBox = document.querySelector('.tabBox');
// console.log(tabBox);



// 获取元素集合
// getElementsByTagName 是获取指定上下文后代中所有的标签名为li的元素集合
// let navList = tabBox.getElementsByTagName('li');

// let tab = tabBox.querySelector('.tab');
// let navList = tab.getElementsByTagName('li');
// 等价于
// let navList = document.querySelectorAll(".tab li");
// 获取集合中的第二项
// let navList = tabBox.querySelectorAll(".tab li:nth-child(2)");
// console.log(navList);

// let divList = document.querySelectorAll(".tabBox>div");
// console.log(divList);



// jquery 一个操作DOM元素的类库
// var $navList = $('.tab li');
// var $divList = $('.tabBox>div');
// console.log($navList,$divList);



// getElementsByName 第一种方法用到最多
var sexList = document.getElementsByName('sex');
var submit = document.getElementById('submit');
// 等价于
// var sexList = document.querySelectorAll('[name=sex]');
// var submit = document.querySelector('#submit');
// console.log(sexList,submit);

submit.onclick = function () {
    let res = null;
    for (var i = 0; i < sexList.length; i++){
        var item = sexList[i];
        // console.log(item.checked);
        if (item.checked) {
            // 被选中
            res = item.value;
            break;
        }
    }
    alert(res);
}





