/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

var singleNumber = function(nums) {
    if (nums.length === 1) {
      return nums[0]
    }
    const stack = []
    for (let i = 0; i < nums.length; i++) {
        stack.push(nums[i])
        // console.log('pushing on ',nums[i])
      for (let j = 0; j < nums.length; j++) {
        if (i !== j){
          if (nums[i] === nums[j]) {
            // console.log('gonna pop', stack.pop(), ' off')
            stack.pop()
          }
          else if (j === nums.length - 1 && stack.length === 1) {
            // console.log('----------')
            return stack
          }
        }
      }
    }
    return stack[0]
  };

// alternate solution using linear runtime complexity.
// iterate through entire array once
// add new values to a set
// if value is already in set, delete it from set
// at the end, return the single value left in set
  
  // singleNumber([2,2,1])
  // singleNumber([4,1,2,1,2])
  // singleNumber([1])
  singleNumber([1,0,1])