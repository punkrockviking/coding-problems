/*
Pascal's Triangle II
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

*/


const getRow = function(rowIndex) {
  let pascal = []
  for (i = 0; i <= rowIndex; i++) {
    const arr = [1]
    arr[i] = 1
    pascal.push(arr)    
    if (i > 1) {
      for (j = 1; j < i; j++) {
        const topLeft = pascal[i-1][j-1]
        const topRight = pascal[i-1][j]
        pascal[i][j] = topLeft + topRight
      }
    }
  }
  return pascal[rowIndex]
}



getRow(4)