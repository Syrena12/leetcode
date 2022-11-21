/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let res = [];
let path = [];
var combine = function(n, k) {
    let res = [];
    let path = [];
    backtracking(n,k,1);
    return res;
};
const backtracking = (n,k,startIndex) =>{
    if(path.length===k){
        res.push([...path])
        return
    }
    for(i = startIndex;i<=n;++i){
        path.push(i)
        backtracking(n,k,i+1)
        path.pop(i)
    }
}
// let result = []
// let path = []
// var combine = function(n, k) {
//     result = []
//     combineHelper(n, k, 1)
//     return result
// };
// const combineHelper = (n, k, startIndex) => {
//     if (path.length === k) {
//         result.push([...path])
//         return
//     }
//     for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
//         path.push(i)
//         combineHelper(n, k, i + 1)
//         path.pop()
//     }
// }
combine(4,2);