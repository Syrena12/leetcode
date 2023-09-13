var merge = function(intervals) {
    let res = [];
    let prev = intervals[0];
    if(intervals.length === 1) return intervals
    for(let i=1;i<intervals.length;i++){
        let cur = intervals[i];
        if(prev[1]<cur[0]){
            res.push(prev);
            prev = cur
        }else{
            prev[1] = Math.max(prev[1],cur[1]);
        }
    }
    res.push(prev)
    return res
};

merge([[1,4],[5,6]]);