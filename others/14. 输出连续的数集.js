// 请写一个函数，完成以下功能
// 输入 1, 2, 3, 5, 7, 8, 10
// 输出 1~3, 5, 7~8, 10

const helper = (tempArr, result) => {
    if (tempArr.length > 1) {
        result.push(tempArr[0] + '~' + tempArr[tempArr.length - 1]);
    } else {
        result.push(tempArr[0]);
    }
};

function format(arr) {
    let tempArr = [];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (tempArr.length && arr[i] - tempArr[tempArr.length - 1] >= 2) {
            helper(tempArr, result);
            tempArr = [arr[i]];
        } else {
            tempArr.push(arr[i]);
        }
    }
    helper(tempArr, result);
    return result.join(',');
}

const testArr = [1, 2, 3, 5, 7, 8, 10];

console.log(format(testArr));
