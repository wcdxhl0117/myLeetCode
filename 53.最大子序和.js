/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.79%)
 * Total Accepted:    42.1K
 * Total Submissions: 97.3K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length <= 1) return nums[0]
    let sum = nums[0]
    let MAX = sum
    for (let i = 1; i < nums.length; i++) {
        if (sum >= 0) {
            if (sum + nums[i] >= MAX) {
                MAX = sum + nums[i]
            }
            sum = sum + nums[i]
        } else {
            if (nums[i] >= MAX) {
                MAX = nums[i]
            }
            sum = nums[i]
        }
    }
    return MAX
};

