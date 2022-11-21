var canJump = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]+i>=(i+1)&&nums[i]+i>=(nums.length-1)){
            return true;
        }
    }
    return false;
};

canJump([3,2,1,0,4]);