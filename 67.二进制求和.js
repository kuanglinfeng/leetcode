/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carried = 0;
    const result = [];
    const arr1 = a.split('');
    const arr2 = b.split('');
    while (arr1.length || arr2.length) {
        const s1 = arr1.pop() || 0;
        const s2 = arr2.pop() || 0;
        let sum = Number(s1) + Number(s2) + carried;
        if (sum >= 2) {
            carried = 1;
            sum = sum % 2;
        } else {
            carried = 0;
        }
        result.unshift(sum);
    }
    if (carried) result.unshift(carried);
    return result.join('');
};
// @lc code=end
