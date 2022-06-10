/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

const convert = function(str, numRows) {
  // create matrix of arrays numRows long
  const matrix = []
  const createMatrix = (num) => {
    for (let i = 1; i <= num; i++) {
      matrix.push([])
    }
  }

  let shouldCountUp = false
  let curRowIndex = 0
  
  
  createMatrix(numRows)
  // console.log(matrix)
  // loop through string pushing each letter onto matrix in zigzag order
  for (let i = 0; i < str.length; i++) {
    // const isFirstRow = curRowIndex === 0
    // const isLastRow = curRowIndex === numRows - 1
    // switch diag direction when at the top or bottom collumn
    // console.log('curRowIndex is', curRowIndex)
    if ((curRowIndex === 0) || (curRowIndex === numRows - 1)) {
      shouldCountUp = !shouldCountUp
      // console.log('flipping count direction!!!!!')
    }
    // console.log('shouldCountUp is', shouldCountUp)
    // push letter into matrix
    matrix[curRowIndex].push(str[i])
    // curRowIndex = shouldCountUp ? curRowIndex + 1 : curRowIndex - 1
    if (shouldCountUp) {
      curRowIndex ++
    } else {
      curRowIndex --
    }
  }
  // console.log(matrix)
  // join arrays and concat to new string in order
  let diagStr = ''
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      diagStr = diagStr.concat(matrix[i][j])
    }
  }
  return diagStr
};


const s1 = 'PAYPALISHIRING'
const num1 = 4
console.log(convert(s1, num1))