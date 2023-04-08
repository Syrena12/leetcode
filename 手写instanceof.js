function instance_of(l,right) {
    var tmp = right.prototype;
    l = l.__proto__;
    while(true){
        if(l === null){
            return false
        }
        if(tmp === l){
            return true
        }
        l = l.__proto__;
    }
 }
// function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
//     var O = R.prototype;   // 取 R 的显示原型
//     L = L.__proto__;  // 取 L 的隐式原型
//
//     while (true) {
//         if (L === null)
//             return false;
//
//         if (O === L)  // 当 O 显式原型 严格等于  L隐式原型 时，返回true
//             return true;
//
//         L = L.__proto__;
//     }
// }
function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Student(score){
    this.score = score;
}

var per = new Person("小明",20, "男");
var stu = new Student(98);
console.log(instance_of(per,Person));