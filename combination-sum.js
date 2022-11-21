/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let path = [];
    let res = [];
    const backtracking = (k,n,startIndex)=>{
        if(sum(path)>n){
            return
        }
        if(sum(path)===n&&path.length===k){
            res.push([...path]);
            return
        }
        for(let i=startIndex;i<=9;i++){
            console.log(sum(path));
            path.push(i);
            backtracking(k,n,i+1);
            path.pop();
        }
    }
    backtracking(k,n,1);
    return res
};

var sum = (arr)=>{
    let sumnum = 0;
    for(let i=0;i<arr.length;i++){
        sumnum += arr[i]
    }
    return sumnum
}

combinationSum3(9,45);