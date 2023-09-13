var maxSubArray = function(nums) {
    if(nums.length===1) return nums[0]
    let res = -Infinity;
    let max = 0;
    for(let i=0;i<nums.length;i++){
        max+=nums[i]
        res = Math.max(res,max);
        if(max<0){
            max=0
            continue
        }
    }
    return res
};

maxSubArray([1]);