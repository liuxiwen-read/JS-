var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');
 
/* ======================= 这个不行 ============================*/ 
// 循环三个li，给每一个li都绑定点击事件
for (var i = 0; i < navList.length; i++) {
    navList[i].onclick = function () {
        console.log(i);     // => 3
        // changeTab(i);
    }
}
/**
 *  只要JS代码加载完成才能看到页面，只要看到页面用户才能点击
 *      加载到循环这个代码了 i=0 i<3 i++
 *  i=0 navList[0].onclick=function(){...} 绑定事件的时候方法没有执行，点击第一个li的时候它才执行 i++ => 1
 *  i=1 navList[1].onclick=function(){...} i++ => 2
 *  i=2 navList[2].onclick=function(){...} i++ => 3
 *  3<3 不同步，循环结束，此时 i 已经是 3 ，所以console.log(i)输出3
 * 
 *  循环结束看到了页面，用户去点击了某一个页卡，接下来开始执行绑定的方法，方法中遇到了一个 i，但是此时 i 已经是循环结束后的 3 了
 */ 





// 封装一个函数实现选项卡的切换
// clickIndex: 创建函数的时候还不知道点的是谁，所以定义一个入口clickIndex（存储点击这一项的索引），执行方法的时候把点击这一项的索引传递进来即可
/*
    在控制台检测 changeTab 函数
    changeTab(1)
    undefined
    changeTab(2)
    undefined
    changeTab(0)
    undefined
*/ 
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







