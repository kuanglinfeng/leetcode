/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                let area = getIslandArea(grid, i, j);
                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
    }
    return maxArea;
};

function getIslandArea(grid, i, j) {
    if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === 0) {
        return 0;
    }
    grid[i][j] = 0;
    return (
        1 +
        getIslandArea(grid, i, j + 1) +
        getIslandArea(grid, i, j - 1) +
        getIslandArea(grid, i + 1, j) +
        getIslandArea(grid, i - 1, j)
    );
}

// @lc code=end
