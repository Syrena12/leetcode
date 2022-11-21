var minDistance = function(word1, word2) {
    let res = 0;
    const [m, n] = [word1.length, word2.length];
    let dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
            res = Math.max(res, dp[i][j]);
        }
    }
    return m - res + n - res;
}
minDistance("a","b")