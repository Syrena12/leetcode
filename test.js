var arr = ['a','b','c','d'];

arr.forEach(function(item,index,arr){//item表示数组中的每一项，index标识当前项的下标，arr表示当前数组
    console.log(item);
    console.log(index);
    console.log(arr);
    console.log(this);
},123);　　　　　　//这里的123参数，表示函数中的this指向，可写可不写，如果不写，则this指向window


arr.map(function(item,index,arr){   //参数含义同forEach
    console.log(item);
    console.log(index);
    console.log(arr);
    console.log(this);
},123);