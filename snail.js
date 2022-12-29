/*

Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

*/

snail = function(nums) {
  // horz vs vert
  // horz right on arr[0] loop through entire arr
  // vert down on last element of all arrs
  // horz left on arr[arr.length - 1] loop through entire arr
  // vert up on first element until arr[1]
  // repeat pattern with horz right

  const snailArr = []

  const horz = (arr, start, end, constant, isRight) => {
    // arr[constant][loop]
    if (isRight) {
      for (let i = start; i <= end, i++) {
        snailArr.push(nums[constant][i])
      }
    } else {
      for (let i = end; i >= start, i--) {
        snailArr.push(nums[constant][i])
      }
    }
    return snailArr
  }

  const vert = (arr, start, end, constant, isDown) => {
    // arr[loop][constant]
    if (isDown) {
      for (let i = start; i <= end; i++) {
        snailArr.push(nums[i][constant])
      }
    } else {
      for (let i = end; i >= start; i--) {
        snailArr.push(nums[i][constant])
      }
    }
    return snailArr
  }

  // flags/variables to track which row, col, horz direction, vert direction will be input into method calls
  // alternatively use Set for row and Set for col to track which ones have been navigated
}