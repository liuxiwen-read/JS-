// 图片演示：./image/03 一道闭包(有难度).png
function fun(n, o) {
    console.log(o);
    return {
        fun : function (m) {
            return fun(m, n);
        }
    }
}


