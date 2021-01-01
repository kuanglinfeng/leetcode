/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    return dfs(root, sum);
};

function dfs(root, sum) {
    if (root === null) return false;
    sum = sum - root.val;
    if (sum === 0 && root.left === null && root.right === null) {
        return true;
    }
    return dfs(root.left, sum) || dfs(root.right, sum);
}

// @lc code=end
