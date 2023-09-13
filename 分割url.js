let url = "http://pages/index/index?id=12&name=zhangsan&age=18";
let obj = {};
let arr = url.split("?")[1].split('&');
for(let i =0 ;i<arr.length;i++){
    let strs = arr[i].split("=");
    obj[strs[0]] = strs[1];
}
console.log(obj);

function  debounce( fn,delay ) {
    let timer = null;
    return (...args)=>{
        const ctx = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(ctx , args);
        },delay);
    }
}
//节流

function throlette(fn,delay) {
    let oldtime = 0;
    return ()=>{
        let nowtime = Date.now();
        if(nowtime-oldtime>delay){
            fn();
            oldtime = Date.now();
        }
    }
}

//防抖

function debounce(fn,delay) {
    let timer = null;
    return (...args)=>{
        const ctx = this;
        clearTimeout(timer);
        setTimeout(()=>{
            fn.apply(ctx,args);
        },delay)
    }
}

function binaryfind(nums){
    let left = 1;
    let right = nums.length -1;
    while(left<right){
        let mid = Math.floor((left+right)/2);
        let count =0;

        for(let num of nums){
            if(num <= mid ){
                count++;
            }
        }
        if(count > mid){
            right = mid;
        }else{
            left = mid+1;
        }
    }
    console.log( left);
}
binaryfind([1,2,3,7,4,3,3,3] );