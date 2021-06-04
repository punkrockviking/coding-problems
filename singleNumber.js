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
    const repeats = []
    for (let i = 0; i < nums.length; i++) {
      let j = i
      while (j < nums.length && stack.length === 0) {
        j++
        if (!repeats.includes(nums[i])) {
          stack.push(nums[i])
          if (nums[i] === nums[j]) {
            repeats.push(nums[i])
            console.log(stack, 'stack')
            stack.pop()
            console.log(stack, 'stack')
            console.log('found a match')
          }
          else if (j === nums.length - 1 && stack.length === 1) {
            console.log('no matches')
            console.log(stack)
            return stack
          } 
        }
        
      }
    }
    return stack[0]
  };
  
  // singleNumber([2,2,1])
  // singleNumber([4,1,2,1,2])
  // singleNumber([1])
  singleNumber([1,0,1])