/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sums =0;
    nums.sort((a,b)=>a-b);
    console.log(nums);
    nums.forEach((value)=>{
        sums+=value;
    })
    if(sums%2!=0) return false
    let sum = sums/2;
    let dp = new Array(sum+1).fill(0);
    for(let i=0;i<nums.length;i++){
        for(let j=sum;j>=nums[i];j--){
            dp[j]=Math.max(dp[j],dp[j-nums[i]]+nums[i]);
            if(dp[j]===sum) return true
        }
    }
    return dp[sum]===sum
};

canPartition([1,2,5]);