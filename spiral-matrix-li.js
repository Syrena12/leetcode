let generateMatrix = function(n) {
    let l=0,r=n-1,t=0,b=n-1;
    let arr = new Array(n).fill(0).map(()=>new Array(n).fill(0));
    // console.log(arr);
    let num=1;
    while (l<=r&&t<=b){
        for(i=l;i<=r;i++){
            arr[t][i]=num++;
            // t+=1;
        }
        t+=1;
        // console.log(arr);
        for(i=t;i<=b;i++){
            arr[i][r]=num++;
            // r-=1;
        }
        r-=1;
        console.log(arr);
        for(i=r;i>=l;i--){
            arr[b][i]=num++;
            // b-=1;
        }
        b-=1;
        for(i=b;i>=t;i--){
            arr[i][l]=num++;
            // l+=1;
        }
        l+=1;
    }
    return arr;

};

generateMatrix(3);