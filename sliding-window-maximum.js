/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const max = (nums,k) =>{
        let tmp = -1.7976931348623157E+10308;
        for(i=0;i<k;i++){
            if(nums[i]>tmp){
                tmp = nums[i];
            }
        }
        return tmp
    };
    let l = 0,r = l+k-1;
    var res = [];
    while(r<nums.length){
        num = nums.slice(l,r+1);
        res.push(max(num,k));
        l++;
        r++;
    }
    return res;
};

maxSlidingWindow([1,-1],1);