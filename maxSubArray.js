/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

*/

const nums1 = [-2,1,-3,4,-1,2,1,-5,4]
const nums2 = [5,4,-1,7,8]
const nums3 = [1]

const maxSubArray = function(nums) {
  let currSum
  let maxSum 
  // iterate through
  for (let i = 0; i < nums.length; i++) {
    if (i = 0) {
      currSum = nums[i]
      maxSum = currSum
    }
    // add to currSum
    currSum += nums[i]
    // if current num brings currSum to <= 0 
    if (currSum <= 0) {
      // check currSum vs maxSum
      currSum -= nums[i]
      maxSum = maxSum > currSum ? maxSum : currSum
    }
  }
  maxSum = maxSum > currSum ? maxSum : currSum
  return maxSum
};

maxSubArray(nums1)