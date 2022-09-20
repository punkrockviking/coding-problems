/*

3SUM LEETCODE

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  // sort array
  const sortedNums = nums.sort((a, b) => a - b)
  const sum = (a, b, c) => {
    return nums[a] + nums[b] + nums[c] === 0
  }
  console.log(sortedNums)
  // left and right pointer - left must be < right
  const triplets = []
  let leftIndex = 0
  let rightIndex = nums.length -1
  while (leftIndex < rightIndex - 1) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2)
    
    while (midIndex > leftIndex && midIndex < rightIndex) {
      if (sum(leftIndex, midIndex, rightIndex) === 0) {
        triplets.push([nums[leftIndex], nums[midIndex], nums[rightIndex]])
        console.log('pushing to triplets array!')
        console.log(triplets)
      }
      else if (sum(leftIndex, midIndex, rightIndex) < 0) {
        // move middle right
        midIndex ++
      } else {
        // move middle left
        midIndex --
      }
      
    }
  }
  // sum of left, center, and right
  // if sum 0 push array of triplets to array
  // if not, move middle right or left
  // 
};

// threeSum([-1,0,1,2,-1,-4])
threeSum([-1,0,1])
