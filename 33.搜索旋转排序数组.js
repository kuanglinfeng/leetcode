/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0) return -1;
    let peakIndex = findPeakIndex(nums);
    if (target >= nums[0] && target <= nums[peakIndex]) {
        return binarySearch(nums, 0, peakIndex, target);
    } else {
        return binarySearch(nums, peakIndex + 1, nums.length - 1, target);
    }
};

// 找到峰值的下标
function findPeakIndex(nums) {
    if (nums.length === 1) return 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return mid;
        }
        if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums.length - 1;
}

function binarySearch(nums, left, right, target) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// @lc code=end
