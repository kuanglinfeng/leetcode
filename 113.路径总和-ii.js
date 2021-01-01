/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    const paths = [];
    const path = [];
    dfs(root, sum, path, paths);
    return paths;
};

function dfs(root, sum, path, paths) {
    if (root === null) return;
    path.push(root.val);
    sum = sum - root.val;
    if (sum === 0 && !root.left && !root.right) {
        paths.push(path);
        return;
    }
    root.left && dfs(root.left, sum, [...path], paths);
    root.right && dfs(root.right, sum, [...path], paths);
}

// @lc code=end
