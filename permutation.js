/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let path = [];
    let res = [];
    const backtracking = (used)=>{
        if(path.length===nums.length){
            res.push(Array.from(path));
            return
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            backtracking(used);
            path.pop();
            used[i] = false;
        }
    }
    backtracking([]);
    return res;
};

permute([1,2,3]);