var findNumberIn2DArray = function(matrix, target) {
    for(const row of matrix){
        const index = search(row,target);
        if(index>=0){
            return true
        }
    }
    return false
};

var search = function(nums,target){
    let left=0,right=nums.length-1;
    while(left<=right){
        let mid = left + Math.floor((right-left)/2);
        if(nums[mid]===target){
            return nums[mid];
        }else if(nums[mid]<target){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return -1;
}