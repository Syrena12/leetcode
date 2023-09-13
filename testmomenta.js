//连续的会议室时间合并

/* 如何会议室的使用时间区段，如 {1,3}, {2, 4}, {5, 5}, {6, 8}, {7, 8}, {9,11} 将重叠的或者连续的区段合并，那么结果是[1,4] [5,5] [6,8] [9,11]。
注意：时间区段的开始时间是有序并且是升序，所以不需要考虑排序问题。

由于题目较简单，主要考察短时间代码书写能力和边界条件考虑情况。
尽量在原地执行，即在原数组上合并。

如C++
void merge(vector<vector> arr) {
//合并
//打印最后的结果
}

示例1：in: 空; out: 空
示例2：in: [1, 2]; out: [1, 2]
示例3：in: {1,3}, {2, 4}, {5, 5}, {6, 8}, {7, 8}, {9,11}; out:[1,4] [5,5] [6,8] [9,11]
*/
function combine(nums) {
    if(nums.length<=1) return nums
    let res = [];
    let i=0;
    while(i<nums.length){
        let cur = [nums[i][0],nums[i][1]];
        let next = i+1;
        while(next<nums.length && nums[next][0]<=cur[1]){
            cur[1] = Math.max(cur[1],nums[next][1]);
            next++;
        }
        res.push(cur);
        i=next;
    }
    console.log(res);
}

combine([[1,3],[2,4],[5,5],[6,8],[7,8],[9,11]]);