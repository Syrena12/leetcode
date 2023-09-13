function loss(n){
    let tmp1 = n;
    let mul = 1, sum = 0;
    while(tmp1>0){
        mul *= (tmp1%10);
        sum += (tmp1%10);
        tmp1 = Math.floor(tmp1/10);
    }
    return mul-sum;
}

console.log(loss(4421));

function uglyNum(num){
    if(num<=0){
        return false;
    }
    while(num % 2=== 0){
        num /= 2;
    }
    while(num % 3 === 0){
        num /= 3;
    }
    while(num % 5 === 0){
        num /= 5;
    }
    return num === 1;
}
console.log(uglyNum(1));

function is(nums) {
        const n = nums.length;
        let maxReach = 0;
        for(let i=0;i<n;i++){
            if(maxReach<i){
                return false;
            }

            maxReach = Math.max(maxReach,i+nums[i])

            if(maxReach >= n-1){
                return true
            }
        }
        return false;

}

function isReachable(nums){
    let n = nums.length;
    let dp = [];
    dp[0] = nums[0];
    for(let i=1;i<nums.length;i++){
        dp[i] = Math.max(nums[i]+i,dp[i-1]);
        if(dp[i]<i+1){
            return false
        }
    }
    return dp[nums.length-1] >= n-1
}

console.log(isReachable([3,2,1,0,4]));