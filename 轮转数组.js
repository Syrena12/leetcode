var rotate = function(nums, k) {
    if(nums.length==1) return
    function reverse(arr,start,end){
        while(start<end){
            let tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start+=1;
            end-=1
        }
        return arr
    }
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
}

rotate()