function sum(a,b) {
    return a + b
}
let plusTwo = sum.bind(this, 2)
let plusFive = sum.bind(this, 5)
sum(2, 3) // 5
console.log(this);
console.log(plusTwo(7));// 9
plusFive(1) // 6