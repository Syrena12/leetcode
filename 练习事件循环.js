// async function async1(){
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }
//
// async function async2(){
//     console.log('async2')
// }
//
// console.log('script start')
//
// setTimeout(function(){
//     console.log('setTimeout')
// },0)
//
// async1();
//
// new Promise(function(resolve){
//     console.log('promise1')
//     resolve();
// })
//
// console.log('script end')

// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         console.log('start');
//         reject('error');
//         console.log('end');
//     })
// }
//
// async function run(){
//     const promise = getPromise();
//     promise.catch(console.log);
//     const res = await promise;
//     console.log(res);
// }
// run();

function mp(p){
    p.age = 2;
    p = {age:3};
    return p
}
// const p = {age:1};
// mp(p);
// console.log(p);

console.log(typeof(mp));

