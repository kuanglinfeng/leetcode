// 1. 从1000到990000找到所有的对称整数1001、1111、1221、1331....12321....时间复杂度越低越好

function getSymmetryNumbers() {
    const arr = [];
    for (let i = 1000; i < 990000; i++) {
        isSymmetryNumber(i) && arr.push(i);
    }
    return arr;
}

function isSymmetryNumber(num) {
    return String(num) === String(num).split('').reverse().join('');
}

console.log(getSymmetryNumbers());
