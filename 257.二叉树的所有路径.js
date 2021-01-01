/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let paths = [];
    dfs(root, paths, '');
    return paths;
};

function dfs(root, paths, path) {
    if (!root) return;
    path += root.val;
    if (!root.left && !root.right) {
        paths.push(path);
        return;
    }
    root.left && dfs(root.left, paths, `${path}->`);
    root.right && dfs(root.right, paths, `${path}->`);
}
// @lc code=end
