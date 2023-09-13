var flat = function (arr) {
    let res = [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flat(arr[i]);
        }else{
            res.push(arr[i]);
        }
    }
    return res;
};

//
// function flattern(arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             flattern(arr[i])
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(flattern([1, [2, [3, 4]]]));

function flatten(arr) {
    return arr.reduce((result,item)=>{
        return result.concat(Array.isArray(item) ? flatten(item):item)
    },[]);

}

console.log(flatten([1, [2, [3, 4]]]));
flat([1, [2, [3, 4]]]);