~function () {
    function call(context) {
        context = context || window;
        let args = [], 
            result;
        for (let i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        context.$fn = this;
        result = context.$fn(...args);  
        delete context.$fn;
        return result;
    }
    Function.prototype.call = call;
}();

function fn1() { console.log(1); }
function fn2() { console.log(2); }
fn1.call(fn2);
fn2.call.call(fn2);
Function.prototype.call(fn1);
Function.prototype.call.call(fn1);

// 两个call和三个call是一样的