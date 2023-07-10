/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const containsDuplicate = function(nums) {
//   let hasDup = false
//   const numSet = new Set()
//     for (let i = 0; i < nums.length; i++){
//       if (numSet.has(nums[i])) {
//         hasDup = true
//       } 
//       numSet.add(nums[i])
//       console.log(numSet)
//     }
//   return hasDup
// };

const containsDuplicate = function(nums) {
  if (nums.length < 2) {
    return false
  }
  if (nums.length === 2) {
    return nums[0] === nums[1]
  }
  const sortedNums = nums.sort()
  console.log(sortedNums)
  for (let i = 1; i < nums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i-1] || sortedNums[i] === sortedNums[i+1]) {
      return true
    }
  }
  return false
};

console.log(containsDuplicate([3,5,6,778,99,5]))
console.log(containsDuplicate([1,1]))
console.log(containsDuplicate([7,2,4,6,1,5]))
console.log(containsDuplicate([7]))
console.log(containsDuplicate([]))
console.log(containsDuplicate([2,14,18,22,22]))





