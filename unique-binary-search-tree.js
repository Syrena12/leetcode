var numTrees = function(n) {
    let dp=[];
    dp[0]=1;
    dp[1]=1;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            dp[i] += dp[j-1]*dp[i-j];
        }
    }
    return dp[n]
};

numTrees(3);