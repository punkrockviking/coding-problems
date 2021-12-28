/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
 
Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

const searchRange = function(nums, target) {
  // if target is outside of range
  if (target < nums[0] || target > nums[nums.length -1]) {
    return [-1, -1]
  }
  // start at middle of array
  // is middle > target? 
  const middle = Math.floor(nums.length / 2)
  if (target > nums[middle]) {
    const topHalf = nums.slice(middle)
    return searchRange(topHalf, target)
  }
  if (target < nums[middle]) {
    const bottomHalf = nums.slice(0, middle + 1)
    return searchRange(bottomHalf, target)
  }
  // if index equals target
  const range = [-1,-1]
    // check to left and right til it doesnt equal index
};

let arr1 = [1,1,2,2,2,3,3,3,,4,4,4,5]
