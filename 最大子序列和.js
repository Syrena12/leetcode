var maxSubArray = function(nums) {
    let maxsum = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]+maxsum<0){
            maxsum = 0;
            continue
        }
        maxsum = Math.max(maxsum+nums[i],0);
    }
    return maxsum
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);