var length =10;
function fn() {
    console.log(this);
}
var obj = {
    length : 100,
    action: function (callback) {
        callback();
        arguments[0]();
    }
}

var arr = [1,2,3,4];
obj.action(fn,...arr);

var a=10;
var abj = {
    a : 99,
    f : test
}
function test() {
    console.log(a);     //undefined
    a = 100;
    console.log(this.a);     //99
    var a;
    console.log(a);       //100
}
abj.f();