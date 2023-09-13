/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1,-1], left = 0, right = nums.length-1;
    //寻找左边界值
    while(left<=right){
        mid = left + Math.floor((right-left)/2)
        if(nums[mid]===target && ( mid===0 || nums[mid-1]<target )){
            res[0] = mid;
            break
        }
        if(nums[mid]>=target){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    right = nums.length-1;
    while(left<=right){
        mid = left + Math.floor((right-left)/2)
        if(nums[mid]===target && ( mid===nums.length-1 || nums[mid+1]>target )){
            res[1] = mid;
            break
        }
        if(nums[mid]>target){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return res
};

searchRange([2,2],2);