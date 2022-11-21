var minimumOperations = function(nums) {
    let count = 0;
    const findmin = (nums)=>{
        let min = Infinity;
        for(let i =0;i<nums.length;i++){
            if(nums[i]>0){
                min = Math.min(nums[i],min);
            }
        }
        return min
    }
    const sum = (nums)=>{
        return nums.reduce(function(acr, cur){
            return acr + cur;
        })
    }
    while(sum(nums)>0){
        count++;
        dec = findmin(nums);
        for(let i=0;i<nums.length;i++){
            if(nums[i]>0){
                nums[i] = nums[i]-dec;
            }
        }
    }
    return count
};

minimumOperations([1,5,0,3,5]);