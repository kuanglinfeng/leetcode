// 最长公共子序列问题（LCS）

// 有时候，我们需要比较两个字符串的相似程度，通常就是比较两个字符串
// 有多少相同的公共子序列。
// 例如：
// s1 = "前端开发者的知识和实践应该相辅相成。"
// s2 = "前端工程师应该掌握基础知识和框架知识。"
// 以上两个字符串的最长公共子序列为 => 前端知识

// 思路：
// 情况1：第1位相同，第1位一定进入最长公共子序列，只需要搞定后续的即可
// 情况2：第1位不同：
//       1. 去掉第1个字符串的首字母，和第2个字符串比较，LCS1
//       2. 去掉第2个字符串的首字母，和第1个字符串比较，LCS2
//       3. 比较LSC1 和 LCS2谁更长

function LCS(str1, str2) {
    // 特殊情况去掉
    if (!str1 || !str2) return '';
    if (str1[0] === str2[0]) {
        return str1[0] + LCS(str1.substr(1), str2.substr(1));
    } else {
        const lcs1 = LCS(str1.substr(1), str2);
        const lcs2 = LCS(str1, str2.substr(1));
        return lcs1.length > lcs2.length ? lcs1 : lcs2;
    }
}

// const str1 = '前端开发者的知识和实践应该相辅相成。';
// const str2 = '前端工程师应该掌握基础知识和框架知识。';

// const result = LCS(str1, str2);
// console.log(result); // 前端知识和。（隔了好久才得到结果）

// 使用动态规划优化时间效率
function LCSPlus(str1, str2) {
    const cache = []; // {str1: xxx, str2: xxx, result: xxx}
    function _LCSPlus(str1, str2) {
        // 特殊情况去掉
        if (!str1 || !str2) return '';
        // 查看缓存，命中则直接返回
        for (let i = 0; i < cache.length; i++) {
            if (cache[i].str1 === str1 && cache[i].str2 === str2) {
                return cache[i].result;
            }
        }
        // 没命中，设置缓存
        let result;
        if (str1[0] === str2[0]) {
            result = str1[0] + _LCSPlus(str1.substr(1), str2.substr(1));
        } else {
            const lcs1 = _LCSPlus(str1.substr(1), str2);
            const lcs2 = _LCSPlus(str1, str2.substr(1));
            if (lcs1.length > lcs2.length) {
                result = lcs1;
            } else {
                result = lcs2;
            }
        }
        cache.push({ str1, str2, result });
        return result;
    }
    return _LCSPlus(str1, str2);
}

const str1 = '前端开发者的知识和实践应该相辅相成。';
const str2 = '前端工程师应该掌握基础知识和框架知识。';

const result = LCSPlus(str1, str2);
console.log(result); // 前端知识和。 （一下就得出结果了）
