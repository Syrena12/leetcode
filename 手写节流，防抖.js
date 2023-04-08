//防抖：在执行完后一段时间执行回调，如果在这段时间内在此执行将会取消之前的延时回调
//频繁出发后，只执行一次
function debounce(fn,delay) {
    //1.初始化定时
    let timer = 0;
    return ()=>{
        //2.清除定时
        clearTimeout(timer);
        //3.等待n秒后执行
        timer = setTimeout(()=>{
            fn()
        },delay);
    }
}

//节流：每次触发都会判断是否到达执行的延时函数
//固定时间做一件事
function throtte(fn,delay) {
    //1.记录上一次事件时间
    let lasttime = 0;
    return ()=>{
        //2.记录现在的时间
        let now = Date.now();
        //3.如果超过delay的时间执行函数，并且改变上次的时间
        if(now-lasttime>delay){
            fn();
            lasttime = now;
        }
    }
}