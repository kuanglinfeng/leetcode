/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
    if (isIPv4(IP)) {
        return 'IPv4';
    }
    if (isIPv6(IP)) {
        return 'IPv6';
    }
    return 'Neither';
};

function isIPv4(IP) {
    const charMap = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
    };
    const arr = IP.split('.');
    if (arr.length !== 4) return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3 || arr[i].length === 0) return false;
        if (arr[i].length > 1 && arr[i][0] === '0') return false;
        if (Number(arr[i]) > 255 || Number(arr[i]) < 0) return false;
        for (let j = 0; j < arr[i].length; j++) {
            if (!charMap[arr[i][j]]) return false;
        }
    }
    return true;
}

function isIPv6(IP) {
    const charMap = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        A: true,
        a: true,
        B: true,
        b: true,
        C: true,
        c: true,
        D: true,
        d: true,
        E: true,
        e: true,
        F: true,
        f: true,
    };
    const arr = IP.split(':');
    if (arr.length !== 8) return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4 || arr[i].length === 0) return false;
        for (let j = 0; j < arr[i].length; j++) {
            if (!charMap[arr[i][j]]) return false;
        }
    }
    return true;
}

// @lc code=end
