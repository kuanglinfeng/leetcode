// 请为所有数组对象添加一个findRepeat，用于返回该数组中出现频率>=n的元素列表

Array.prototype.findRepeat = function (n) {
    const list = [];
    const map = {};
    for (let i = 0; i < this.length; i++) {
        if (!map[this[i]]) {
            map[this[i]] = 1;
        } else {
            map[this[i]] += 1;
        }
    }
    for (let i in map) {
        if (map.hasOwnProperty(i)) {
            if (map[i] >= n) {
                list.push(Number(i));
            }
        }
    }
    return list;
};

const arr = [1, 2, 2, 1, 3, 4, 5, 1];

console.log(arr.findRepeat(1));
console.log(arr.findRepeat(2));
console.log(arr.findRepeat(3));
