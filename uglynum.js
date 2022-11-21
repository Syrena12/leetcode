var nthUglyNumber = function(n) {
    let dp = new Array(n+1).fill(1);
    let p2=1,p3=1,p5=1;
    for(let i=2;i<n;i++){
        const n2=dp[p2]*2,n3=dp[p3]*3,n5=dp[p5]*5;
        dp[i] = Math.min(Math.min(n2,n3),n5);
        if(n2===dp[i]){
            p2++;
        }
        if(n3===dp[i]){
            p3++;
        }
        if(n5===dp[i]){
            p5++;
        }
    }
    return dp[n];
};

nthUglyNumber(11)