// 题1
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2 start');
    return new Promise((resolve, reject) => {
        resolve();
        console.log('async2 promise');
    });
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
})
    .then(function () {
        console.log('promise2');
    })
    .then(function () {
        console.log('promise3');
    });

console.log('script end');

// 1. script start
// 2. async1 start
// 3. async2 start
// 4. async2 promise
// 5. promise1
// 6. script end
// 7. promise2
// 8. promise3
// 9. async1 end
// 10. setTimeout

console.log('###########################################################################');

// 题2：

setTimeout(() => {
    console.log('log-timeout');
}, 0);

const promise = new Promise(resolve => {
    console.log('log-promise');
    resolve('promise resolve');
});

const runner = async () => {
    console.log('async start');
    const str = await promise;
    console.log(str);
};

runner();

promise.then(() => {
    console.log('log-promise1-then');
});

console.log('log-end');

// log-promise
// async start
// log-end
// promise resolve
// log-promise1-then
// log-timeout

// 题3：

console.log(1);
setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    });
});
new Promise((resolve, reject) => {
    console.log(4);
    resolve(5);
}).then(data => {
    console.log(data);
});
setTimeout(() => {
    console.log(6);
});
console.log(7);

// 1. 1
// 2. 4
// 3. 7
// 4. 5
// 5. 2
// 6. 3
// 7. 6

// 题4：考闭包
var temp = 1;
function test() {
    temp = 10;
    return;
    function temp() {}
}
test();
console.log(temp); // 1
