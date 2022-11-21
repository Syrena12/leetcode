var threeSum = function(nums) {
    if(nums.length<3) return [];
    let res = [];
    nums.sort();
    for(i=0;i<nums.length;i++){
        if(nums[i]>0) return [];
        if(nums[i]==nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while(left<right){
            if(left<right && nums[i]+nums[left]===-nums[right]){
                res.push([nums[i],nums[left],nums[right]]);
                while(left<right && nums[left]===nums[left+1]){
                    left++;
                };
                while(left<right && nums[right]===nums[right-1]){
                    right--;
                }
                left++;
                right--;
            }else if(nums[i]+nums[left]<-nums[right]){
                left++;
            }else{
                right--;
            }
        }
    }
    return res
};

threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);