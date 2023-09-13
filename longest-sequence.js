var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max=0;
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i]-1)) continue
        let count = 1;
        let value = nums[i];
        while(set.has(value+1)){
            count++;
            value++;
        }
        max = Math.max(count,max);
    }
    return max
};

longestConsecutive([100,4,200,1,3,2]);