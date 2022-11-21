var maxSubArray = function(nums) {
    let res = Number.MIN_VALUE;
    let startIndex = 0;
    if(!nums.length) return
    if(nums.length==1) return nums[0];
    for(let i=0;i<nums.length;i++){
        startIndex =0;
        while(startIndex<=i){
            res = Math.max(res,sumnum(nums.slice(startIndex,i+1)));
            startIndex++;
        }
    }
    return res;
};

const sumnum = (num)=>{
    let sum = 0;
    for(item of num){
        sum+=item;
    }
    return sum;
}

maxSubArray([-2,-1]);

