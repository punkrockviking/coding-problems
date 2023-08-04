/*
leetcode 55 Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) {
    return true
  }
  //recursive function
  const isLastJump = (startIndex, nums) => {
    //if value at start index is 0, return false
    if (nums[startIndex] === 0) {
      return false
    }
    const jumpIndex = startIndex + nums[startIndex]
    //check if index you start at plus value of that index equal array length - 1
    if (jumpIndex >= nums.length - 1) {
      return true
    }
    //return true or call recursively adding the value to the start index for new start point
    return isLastJump(jumpIndex, nums)
  }
  return isLastJump(0, nums)
};

//recursive solution, however it does not solve problem, as the problem is asking you to check each position, not just the starting position