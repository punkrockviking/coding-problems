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
  const findIndex = function(left=0, right) {
    // console.log(left, right, target)
    if (right < left) {
      return
    }
    middleIndex = left + Math.floor((right-left)/2)
    // console.log(middleIndex)
    // middle === target
    if (nums[middleIndex] === target) {
      min = Math.min(min, middleIndex)
      max = Math.max(max, middleIndex)

      findIndex(left, middleIndex - 1)
      findIndex(middleIndex + 1, right)
    }
    // middle > target
    if (nums[middleIndex] > target) {
      // either we have not found our target yet
      findIndex(left, middleIndex - 1)
      // or we have found the end of our target range
    }
    // middle < target
    if (nums[middleIndex] < target) {
      findIndex(middleIndex + 1, right)
    }
  }
  let min = Infinity
  let max = -Infinity
  let middleIndex
  findIndex(0, nums.length - 1)
  if (min > max) {
    return [-1, -1]
  }
  return [min, max]
};



let arr1 = [1,1,2,2,2,3,3,3,4,4,4,4,4,4,5]

searchRange(arr1, 4)


// const searchRange = function(nums, target) {
//   // if target is outside of range
//   if (target < nums[0] || target > nums[nums.length -1]) {
//     return [-1, -1]
//   }
//   if (nums.length === 1 && nums[0] === target) {
//     return [0,0]
//   }
//   // console.log('lowerbound')
//   const lowerbound = findIndex(nums, 0, nums.length - 1, target, true)
//   // console.log('upperbound')
//   const upperbound = findIndex(nums, 0, nums.length - 1, target, false)

//   return [lowerbound, upperbound]

//   // start at middle of array
//   const middle = Math.floor(nums.length / 2)
//   if (target > nums[middle]) {
//     const topHalf = nums.slice(middle)
//     return searchRange(topHalf, target)
//   }
//   if (target < nums[middle]) {
//     const bottomHalf = nums.slice(0, middle + 1)
//     return searchRange(bottomHalf, target)
//   }
//   // if index equals target
//   // if i return indexes of the range, it will be the indexes of whatever arr I make my argument at the level where it is true, not necessarily the indexes of the original arr argument. How should i approach this? What exactly do i need the function to return? consider making the recursive part a helper function so that I can use that returned value to create my ultimate output for the problem.
//   // check to left and right til it doesnt equal index

// };;

// const findIndex = function(nums, startIndex, endIndex, target, isLower, isFound=false) {
//   // console.log(startIndex, endIndex, target)
//   if (startIndex >= endIndex) {
//     // rounding up when we cut in half
//     // console.log('+++++++++++++++++++++')
//     // console.log(isFound, target, nums[endIndex])
//     if (isFound) {
//       return target === nums[endIndex] ? endIndex : endIndex - 1
//     }
//     return -1
//   }
  
//   const middleIndex = isLower ? Math.floor((startIndex + endIndex)/2) : Math.ceil((startIndex + endIndex)/2)
//   // console.log(middleIndex)
//   // middle === target
//   if (nums[middleIndex] === target) {
//     isFound = true
//     return isLower ? findIndex(nums, startIndex, middleIndex - 1, target, isLower, isFound) : findIndex(nums, middleIndex + 1, endIndex, target, isLower, isFound)
//   }
//   // middle > target
//   if (nums[middleIndex] > target) {
//     return findIndex(nums, startIndex, middleIndex - 1, target, isLower, isFound)
//   }
//   // middle < target
//   if (nums[middleIndex] < target) {
//     return findIndex(nums, middleIndex + 1, endIndex, target, isLower, isFound)
//   }

// }


// let arr1 = [1,1,2,2,2,3,3,3,4,4,4,4,4,4,5]

// searchRange(arr1, 4)