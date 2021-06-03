let box = document.getElementById('box');

// 标准浏览器（非IE6~8）中会把空格和换行当做文本节点处理（childNodes包含所有节点）
// console.log(box.childNodes);

// 只想要元素节点（但是IE6~8下，使用children会把注释也当做元素节点）
// console.log(box.children);

/**
 *  children : 获取指定上下文中，所有的元素子节点
 *  @params:
 *      context [element object] 指定的上下文元素信息
 *  @return:
 *      [array] 返回所有的元素子节点集合
 */
function children(context) {
    // 1.先获取所有的子节点
    var res = [],
        nodeList = context.childNodes;
    // 2.循环遍历所有的子节点，找出元素子节点（nodeType===1），存储到res中即可
    for (var i = 0; i < nodeList.length; i++) {
        var item = nodeList[i];
        item.nodeType === 1 ? res.push(item) : null;
    }
    return res;
}
// console.log(children(box));



// ========================================================================
// firstChild / firstElementChild 也可以封装一个函数，解决IE6~8的兼容问题，模仿上面的代码
// console.log(box.firstChild);
// console.log(box.firstElementChild);

var lis = document.getElementById('lis');
// console.log(lis.previousSibling);
// console.log(lis.previousElementSibling);

// 获取上一个哥哥元素节点
function prev(context) {
    // 先找自己的哥哥
    var pre = context.previousSibling;
    // console.log(pre)
    // console.log(pre.nodeType)
    // 如果哥哥不是元素，则找哥哥的哥哥，一直找到的元素节点为止
    while (pre.nodeType !== 1) {
        pre = pre.previousSibling;
    }
    return pre;
}
// console.log(prev(lis));

// JQuery中提供一些方法提供我们获取元素: children、prev、next、prevAll、nextAll、sibling、siblings、index...


















