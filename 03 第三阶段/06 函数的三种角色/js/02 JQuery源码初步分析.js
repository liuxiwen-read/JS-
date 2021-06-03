(function (global, factory) {
    // global : window（浏览器下运行） or global（node下运行）
    // factory : function (window, noGlobal) {...}
    
    "use strict";
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // node下运行
        // ...
    } else {
        // 浏览器下运行
        factory(global);
    }
})( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    // window : window
    // noGlobal : undefined

    var jQuery = function (selector,context) {
        return new jQuery.fn.init(selector,context);
    }

    var init;
    init = jQuery.fn.init = function (selector,context,root) {
        // ...
    }
    init.prototype = jQuery.fn = jQuery.prototype;

    if (!noGlobal) {
        // !undefined
        window.jQuery = window.$ = jQuery;
    }

});
/**
 *  jQuery是一个构造函数: jQuery.prototype上有很多供实例操作的方法，例如css...
 *    $().css()
 *  jQuery也是一个普通的对象，在它的堆空间中也存在很多的方法，例如ajax...
 *    $.ajax()
 */ 
$();    // 创建了jQuery这个类的一个实例，可以调取jQuery.prototype（jQuery.fn）上的方法