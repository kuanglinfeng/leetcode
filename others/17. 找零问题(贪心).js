// 贪心算法思想：当遇到一个求解全局最优解问题时，如果可以将全局
// 问题切分为小的局部问题，并寻求局部最优解，同时可以证明局部最优解
// 累计的结果就是全局最优解，则可以使用贪心算法

// 面试题：找零问题

// 假设你有一间小店，需要找给客户46分钱的硬币，你的货柜里只有
// 面额为25分、10分、5分、1分的硬币，如何找零才能保证数额正确
// 并且硬币数最小

function exchange(total, denominations) {
    if (total <= 0) return [];
    // 寻找最大面额，同时保证面额小于等于total
    let max = 0;
    for (let i = 0; i < denominations.length; i++) {
        const currentDenomination = denominations[i];
        if (currentDenomination > max && currentDenomination <= total) {
            max = currentDenomination;
        }
    }
    let result = [max];
    const next = exchange(total - max, denominations);
    result = [...result, ...next];
    return result;
}

const total = 51;
const denominations = [30, 25, 10, 5, 1];
const result = exchange(total, denominations);

console.log(result); // [30, 10, 10, 1]
