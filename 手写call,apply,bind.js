//call,apply,bind 用来改变this指针；
// call把调用的对象this传给第一个参数，后面的参数作为传参
// apply把调用的对象this传给第一个参数，后面的参数必须存放为一个数组
// bind传参方式同call，但是不会立即执行

//手写call
let obj = {
    name:'123',
    age:12,
    sayHello:function (job,hobby){
        console.log(`我叫${this.name},我今年${this.age}岁啦，我的职业是${job}，我的爱好是${hobby}`)
    }
}
Function.prototype.$call =function () {
    //1.存储当前this指针，对当前环境进行保护
    let newThis = this;
    //2.存储要改变的对象
    let fn = arguments[0];
    //3.存储要传入的参数（切片处理splice(1):取第二个开始的参数）
    let params = [...arguments].splice(1);
    //改变指针方向：要指向的对象的当前新的this赋值
    fn.newThis = newThis;
    //传入参数
    fn.newThis(...params);
}
let obj1={
    name:'lihua',
    age:11
}
obj.sayHello.$call(obj1,'程序员');

Function.prototype.$apply = function (){
    let newThis = this;
    let newObj = arguments[0];
    let params = arguments[1];
    newObj.newThis = newThis;
    newObj.newThis(...params)
}
obj.sayHello.$apply(obj1,['程序员','游泳']);

//bind没有立即执行，所以返回的是一个函数
Function.prototype.$bind = function () {
    let newThis = this;
    let newObj = arguments[0];
    let params = [...arguments].splice(1);
    return function (){
        // newThis.call(newObj === [] ? newObj:newObj,...params)
        newThis.call(newObj,...params)

    }
}

obj.sayHello.$bind(obj1,'程序员','游泳')();