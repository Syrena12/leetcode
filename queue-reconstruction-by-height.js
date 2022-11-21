/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let result = [];
    people.sort((a,b)=>{
        if(a[0]!==b[0]){
            //按高度从大到小拍排序
            return b[0]-a[0]
        }else{
            //按个数从小到大排序
            return a[1]-b[1]
        }
    })
    console.log(people);
    for(let i=0;i<people.length;i++){
        result.splice(people[i][1],0,people[i])
    }
    console.log(result);
    return people;
};

reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]);