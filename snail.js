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

snail = function(array) {
  // horz vs vert
  // horz right on arr[0] loop through entire arr
  // vert down on last element of all arrs
  // horz left on arr[arr.length - 1] loop through entire arr
  // vert up on first element until arr[1]
  // repeat pattern with horz right

  const horz = (arr, start, end) => {
    for (let i = arr[start]; i <= arr[end], i++) {
      
    }
  }

}