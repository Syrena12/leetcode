var waysToMakeFair = function(nums) {
    var qiupinghenshu = (arr) => {
        let res0 = 0;
        let res1 = 0
        // for(let j=0;j<arr.length;j+2){
        //     res0+=arr[j];
        // }
        let j =0,i=1;
        while(j<arr.length){
            res0+=arr[j];
            j+=2;
        }
        // for(let j=1;j<arr.length;j+2){
        //     res1+=arr[j];
        // }
        while(i<arr.length){
            res1+=arr[i];
            i+=2;
        }
        return res0 === res1;
    }
    let res = 0;
    for(let i=0;i<nums.length;i++){
        let tmp = nums;
        tmp.splice(i,1);
        if(qiupinghenshu(tmp)) res++;
    }
    return res;
};

waysToMakeFair([2,1,6,4]);