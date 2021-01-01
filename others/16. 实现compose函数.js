const fn1 = num => num + 10;
const fn2 = num => num * 2;
const fn3 = num => num - 1;

// const fn = compose(fn1, fn2, fn3);

// 输出 12
// fn(2);

function compose(...fns) {
    return function (initValue) {
        let res = initValue;
        for (var i = fns.length - 1; i >= 0; i--) {
            res = fns[i](res);
        }
        return res;
    };
}

function composePlus(...fns) {
    return fns.reduce((a, b) => initValue => a(b(initValue)));
}

const x = compose(fn1, fn2, fn3);
const y = composePlus(fn1, fn2, fn3);

console.log(x(2));
console.log(y(2));
