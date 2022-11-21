/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let count = 1;
    let curdiff = 0;
    let prediff = 0;
    for(let i = 0;i<nums.length-1;i++){
        curdiff = nums[i+1]-nums[i];
        if((curdiff>0&&prediff<=0)||(curdiff<0&&prediff>=0)){
            count++;
            prediff = curdiff;
        }
    }
    return count;
};

wiggleMaxLength([0,0]);