console.log(1);
setTimeout(function() {
    console.log(2);
}, 0);

const intervalId = setInterval(function() {
    console.log(3);
}, 0);

setTimeout(function() {
    console.log(10);

    setTimeout(function() {
        console.log(14);
    }, 0);

    new Promise(function(resolve) {
        console.log(11);
        resolve();
    }).then(function() {
        console.log(12);
    }).then(function() {
        console.log(13);
        clearInterval(intervalId);
    })
}, 0);

Promise.resolve().then(function() {
    console.log(7);
}).then(function() {
    console.log(8);
});

Promise.resolve().then(function() {
    console.log(15);
}).then(function() {
    console.log(16);
});

console.log(9);
