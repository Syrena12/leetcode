/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result=[];
    let right=0;
    let left =0;
    for(let i=1;i<intervals.length;i++){
        //重合区间
        if(intervals[i][0]<right){
            result.push([intervals[i-1][0],intervals[i][1]])
        }else{
            result.push(intervals[i]);
            right = Math.min(intervals[i][1],intervals[i-1][1]);
        }
    }
    return result
};

merge([[1,3],[2,6],[8,10],[15,18]]);