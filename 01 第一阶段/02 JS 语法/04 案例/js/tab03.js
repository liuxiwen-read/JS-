var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');

/* ============================== 其它方式（不常用）========================================= */ 
// 闭包解决方案
// for (var i = 0; i < navList.length; i++) {
//     navList[i].onclick = (function (i) {
//         return function () {
//             changeTab(i);
//         }
//     })(i);
// }

// 这是ES6中let解决方案
// 把 var 改为 let 就可以了
for (let i = 0; i < navList.length; i++) {
    navList[i].onclick = function () { 
        changeTab(i);
    }
        
}


// 封装一个函数实现选项卡的切换
// clickIndex: 创建函数的时候还不知道点的是谁，所以定义一个入口clickIndex（存储点击这一项的索引），执行方法的时候把点击这一项的索引传递进来即可
function changeTab(clickIndex) {
    // 1. 先让所有的li和div都没有选中的样式
    for (var i=0; i<navList.length;i++) {
        navList[i].className = '';
        tabList[i].className = '';
    }
    // 2. 点击的是谁就给谁加
    navList[clickIndex].className = 'active';
    tabList[clickIndex].className = 'active';
}







