var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');

/* ===================== 解决办法一: 自定义属性解决办法（常用方式） ====================   */ 
// 循环三个li，给每一个li都绑定点击事件
for (var i = 0; i < navList.length; i++) {
    // navList[i] : 当前循环下我们要操作的那个li（i变量存储的值是我们需要获取指定元素的索引）
    // console.log(typeof navList[i]);     // object
    // 在循环给每个li绑定点击事件的时候，我们给每一个li（元素对象）设置一个自定义属性myIndex，属性值存储的是当前li的索引
    navList[i].myIndex = i;
    navList[i].onclick = function () {
        // 我想用的是点击这个li的索引，但是i不是
        // this 是当前点击的这个元素li，this.myIndex 获取的就是之前绑定在元素自定义属性上的索引值;
        changeTab(this.myIndex);
    }
}
/**
 *  只要JS代码加载完成才能看到页面，只要看到页面用户才能点击
 *      加载到循环这个代码了 i=0 i<3 i++
 *      i=0 
 *          navList[0].myIndex = 0;
 *          navList[0].onclick=function(){...}  i++ => 1
 *      i=1
 *          navList[1].myIndex = 1;
 *          navList[1].onclick=function(){...}  i++ => 2
 *      ...
 */ 





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







