// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     let x=-1;
//     let y=-1;
//     let dp=[];
//     for(let i=0;i<obstacleGrid.length;i++){
//         for(let j=0;j<obstacleGrid[0].length;j++){
//             if(obstacleGrid[i][j]===1){
//                 x=i;
//                 y=j;
//             }
//         }
//     }
//     //初始化
//     dp = new Array(obstacleGrid.length).fill(1).map(()=>new Array(obstacleGrid[0].length).fill(1))
//     if(x>-1&&y>-1){
//         for(let i=0;i<dp.length;i++) dp[i][y]=0;
//         for(let i=0;i<dp[0].length;i++) dp[x][i]=0;
//     }
//     for(let i=1;i<obstacleGrid.length;i++){
//         for(let j=1;j<obstacleGrid[0].length;j++){
//             dp[i][j]=dp[i-1][j]+dp[i][j-1]
//         }
//     }
//     console.log(dp);
//     return dp[dp.length-1][dp[0].length-1]
// };
//

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // let x=-1;
    // let y=-1;
    let dp=[];
    dp = new Array(obstacleGrid.length).fill(1).map(()=>new Array(obstacleGrid[0].length).fill(1));
    for(let i=0;i<obstacleGrid.length;i++){
        for(let j=0;j<obstacleGrid[0].length;j++){
            if(obstacleGrid[i][j]===1){
                for(let k=0;k<dp[0].length;k++) dp[i][k]=0;
                for(let l=0;l<dp.length;l++) dp[l][j]=0;
            }
        }
    }
    //初始化

    // if(x>-1&&y>-1){
    //     for(let i=0;i<dp.length;i++) dp[i][y]=0;
    //     for(let i=0;i<dp[0].length;i++) dp[x][i]=0;
    // }
    for(let i=1;i<obstacleGrid.length;i++){
        for(let j=1;j<obstacleGrid[0].length;j++){
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }
    console.log(dp);
    return dp[dp.length-1][dp[0].length-1]
};
uniquePathsWithObstacles([[0,1]]);