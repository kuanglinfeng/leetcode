/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const paths = [];
    if (!root) return paths;
    bfs([root], paths);
    return paths;
};

function bfs(nodeList, paths) {
    if (nodeList.length === 0 || nodeList[0] === null) return;
    const newNodeList = [];
    const path = [];
    for (let i = 0; i < nodeList.length; i++) {
        path.push(nodeList[i].val);
        nodeList[i].left && newNodeList.push(nodeList[i].left);
        nodeList[i].right && newNodeList.push(nodeList[i].right);
    }
    paths.push(path);
    bfs(newNodeList, paths);
    return paths;
}

// @lc code=end
