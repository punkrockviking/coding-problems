/*
Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/


const generate = function(numRows) {
  let pascal = []
  for (i = 0; i < numRows; i++) {
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
  return pascal
}



generate(5)