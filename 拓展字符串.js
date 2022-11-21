
let obj = {id:'1',name:'zhangsan',info:{id:'1',age:28}}
let br = {...obj}
console.log(br);
obj.name='lisi'
console.log(br);
console.log(obj);

