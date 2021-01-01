/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                setZero(i, j, grid);
            }
        }
    }
    return count;
};

function setZero(i, j, grid) {
    if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === '0') {
        return;
    }
    grid[i][j] = '0';
    setZero(i, j + 1, grid);
    setZero(i, j - 1, grid);
    setZero(i + 1, j, grid);
    setZero(i - 1, j, grid);
}

// @lc code=end
