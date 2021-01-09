// 动态规划思想：分治法有一个问题，就是容易重复计算已经计算过的值
// 使用动态规划，可以将每次分支时计算过的值记录下来，防止重发计算
// 从而利用空间换取时间效率

//  爬楼梯问题

// 有n级楼梯，一次可以爬1级或者2级，一共有多少种爬法可以爬完楼梯？

// 非递归
function climbStairs(n) {
    const cache = [];
    cache[1] = 1;
    cache[2] = 2;
    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
}

// 递归
function climbStairs(n) {
    const cache = {};
    function _climbStairs(n) {
        if (cache[n]) return cache[n];
        let result;
        if (n === 0) result = 0;
        else if (n === 1) result = 1;
        else if (n === 2) result = 2;
        else result = _climbStairs(n - 1) + _climbStairs(n - 2);
        cache[n] = result;
        return result;
    }
    return _climbStairs(n);
}
