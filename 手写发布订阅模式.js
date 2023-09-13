class EventEmitter{
    constructor() {
        //事件缓存列表
        this.list = {}
    }
    on(name,fn){//订阅
        if(this.list[name]){
            this.list[name].push(fn);
        }else{
            this.list[name] = [fn];
        }
    }
    emit(name,...args){ //发布
        if(this.list[name]){
            //创建副本，如果回调函数内部继续注册相同事件会造成死循环
            let tasks = this.list[name].slice();
            for(let fn of tasks){
                fn(...args)
            }
        }
    }}
let ee = new EventEmitter();
let fn1 = (name,age) =>{ console.log(`${name}${age}`) }
let fn2 = (name,age) =>{ console.log(`hello,${name}${age}`) }
ee.on('1',fn1);
ee.on('1',fn2);
ee.emit('1','xiaolan',12)


