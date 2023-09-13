var findLength = function (a,b) {
    let max = 0;
    let dp = Array.from(a.length+1,()=>{
        new Array(b.length+1).fill(0);
    Math.random()
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]){
                dp[i+1][j+1] = dp[i][j]+1;
                max = Math.max(dp[i][j],max);
            }
        }
    }
    return max
}