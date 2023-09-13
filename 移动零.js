var moveZeroes = function(nums) {
    let left=0,right=0
    while(right<nums.length){
        if(nums[right]!==0){//遇上非0元素，交换left和right对应的元素
            swap(nums,left,right)
            left++//交换之后left++
        }
        right++
    }
};
function swap(nums,l,r){
    let temp=nums[r]
    nums[r]=nums[l]
    nums[l]=temp
}
moveZeroes([1,0,2,9,9,0,3,4,2,7]);