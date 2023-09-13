function top2(str){
    let tmp = [];
    for(let i=0;i<str.length;i++){
        if(typeof(str[i]) == "number"){
            tmp.push(str[i]);
            
        }
    }
    // if(tmp.length<2) return -1
    // tmp.sort((a,b)=>a-b);
    // let top1 = tmp.length-1;
    // let top2 = tmp.length-2;
    // while(tmp[top2]===tmp[top1]){
    //     if(top2<0) return -1
    //     top2-=1;
    // }
    // return tmp[top2];
}