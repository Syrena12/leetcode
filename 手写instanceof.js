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