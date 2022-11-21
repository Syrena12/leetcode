/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    for(let i=n;i>=0;i--){
        if(i<10) return i;
        let flag = i;
        while(flag>0){
            let tmp = flag%10;
            let tmp1=parseInt(flag/10)%10;
            if(tmp1===tmp||tmp1<tmp){
                flag = parseInt(flag/10);
            }else{
                break
            }
        }
        if(flag===0){
            console.log(i);
            return i
        }
    }
};

monotoneIncreasingDigits(853567367);