/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let result = [];
    sum = 0;
    result.push(1);
    for(let i=1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]){
            result[i] = result[i-1]+1;
        }else{
            result[i] = 1;
            if(result[i-1]===1&&ratings[i-1]!==ratings[i]){
                result[i-1] = result[i-1]+1
            }
        }
    }
    result.forEach(function(value){
        sum+=value
    })
    console.log(result);
    return sum
};

candy([1,3,2,2,1]);