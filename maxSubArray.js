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

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums2 = [5, 4, -1, 7, 8]
const nums3 = [1]
const nums4 = [-2, -1]


// NEED TO FIX SOLUTION TO WORK FOR MAXSUM UNDER 0

const maxSubArray = (nums) => {
  let currSum = -Infinity
  let maxSum = -Infinity
  // iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    // is currSum negative?
    currSum = Math.max(0, currSum)
    // add to currSum
    currSum += num
    console.log('adding', num, 'so currSum is now ', currSum)
    // check currSum vs maxSum
    console.log('comparing maxSum to currSum. maxSum is ', maxSum)
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
};

maxSubArray(nums4)