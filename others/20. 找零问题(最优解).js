// 假设你有一间小店，需要找给客户46分钱的硬币，你的货柜里只有
// 面额为25分、10分、5分、1分的硬币，如何找零才能保证数额正确
// 并且硬币数最小（贪心法无法保证找零的硬币数是最小的）
// 如果无解，返回false

function exchange(total, denominations) {
    // 1. 看total是不是0，如果是，不需要任何找零
    if (total === 0) return [];
    if (total < 0) return false;
    if (denominations.length === 0) return false;
    const denomination = denominations[0];
    const left = denominations.slice(1); // 剩下的面值
    // 2. 看total是不是等于第一个面值，如果等于，用第一张面值作为找零
    if (total === denomination) return [denomination];
    // 3. total比第一个面值小，第一张面值无法用于找零，看后续面值
    if (total < denomination) return exchange(total, left);
    // 4. total比第一个面值大，分为找和不找，分别求解，比较解的结果，得到最终结果
    if (total > denomination) {
        // 找了这张面值后，剩下的最优解
        let result1 = exchange(total - denomination, denominations);
        // 不找这张面值后，剩下的最优解
        let result2 = exchange(total, left);
        // 对比两种结果
        if (result1 === false && result2 === false) {
            return false;
        }
        if (result1 === false && result2 !== false) {
            return result2;
        }
        if (result1 !== false && result2 === false) {
            return [denomination, ...result1];
        }
        if (result1 !== false && result2 !== false) {
            // 都有解，让找自己的情况加入自己这种面额
            result1 = [denomination, ...result1];
            return result1.length < result2.length ? result1 : result2;
        }
    }
}

// const total = 51;
// const denominations = [30, 25, 10, 5, 1];
// const result = exchange(total, denominations);

// console.log(result); // [25, 25, 1]

// 使用动态规划优化时间效率

// 只需要看，要不要找第一个面值
function exchangePlus(total, denominations) {
    const cache = [];
    function _exchangePlus(total, index) {
        // 只需要看，要不要找第i个面值
        // 1. 看total是不是0，如果是，不需要任何找零
        if (total === 0) return [];
        if (total < 0) return false;
        // i这个位置没有任何面值
        if (index >= denominations.length) return false;
        // 查看是否命中缓存
        for (let i = 0; i < cache.length; i++) {
            const c = cache[i];
            if (c.total === total && c.index === index) {
                return c.result;
            }
        }
        let result; // 缓存结果
        // 2. 看total是不是等于第index个面值，如果等于，用第一张面值作为找零
        const denomination = denominations[index];
        if (total === denomination) result = [denomination];
        // 3. total比第一个面值小，第一张面值无法用于找零，看后续面值
        if (total < denomination) {
            return _exchangePlus(total, index + 1);
        }
        // 4. total比第一个面值大，分为找和不找，分别求解，比较解的结果，得到最终结果
        if (total > denomination) {
            // 找了这张面值后，剩下的最优解
            let result1 = _exchangePlus(total - denomination, index);
            // 不找这张面值后，剩下的最优解
            let result2 = _exchangePlus(total, index + 1);
            // 对比两种结果
            if (result1 === false && result2 === false) {
                result = false;
            }
            if (result1 === false && result2 !== false) {
                result = result2;
            }
            if (result1 !== false && result2 === false) {
                result = [denomination, ...result1];
            }
            if (result1 !== false && result2 !== false) {
                // 都有解，让找自己的情况加入自己这种面额
                result1 = [denomination, ...result1];
                result = result1.length < result2.length ? result1 : result2;
            }
        }
        cache.push({ total, index, result });
        return result;
    }
    return _exchangePlus(total, 0);
}

const total = 51;
const denominations = [30, 25, 10, 5, 1];
const result = exchangePlus(total, denominations);

console.log(result); // [25, 25, 1]
