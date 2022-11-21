/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    nums.sort((a,b)=>(a-b));
    for(i=0;i<nums.length;i++){
        if(i>0 && nums[i]==nums[i-1]) continue;
        for(j=i+1;j<nums.length;j++){
            if(j>i+1 && nums[j]==nums[j-1]) continue;
            let l = j+1, r = nums.length-1;
            while(l<r){
                if(nums[i]+nums[j]+nums[l]+nums[r]===target){
                    res.push([nums[i],nums[j],nums[l],nums[r]])
                    while(l<r && nums[l]===nums[l+1]) l++;
                    while(l<r && nums[r]===nums[r-1]) r--;
                    r--;
                    l++;
                }else if(nums[i]+nums[j]+nums[l]+nums[r]<target){
                    l++;
                }else{
                    r--;
                }
            }
        }
    }
    return res;

};

fourSum([4,-9,-2,-2,-7,9,9,5,10,-10,4,5,2,-4,-2,4,-9,5],-13);