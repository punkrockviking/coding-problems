/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
2
P Y A I H R N 2
A P L S I I G 2

3
P   A   H   N 4
A P L S I I G 2
Y   I   R     4

4
P     I    N 6 6
A   L S  I G 4 2
Y A   H R    2 4
P     I      6 6

5 
P       H     8  8
A     S I     6  2
Y   I   R     4  4
P L     I G   2  6
A       N     8  8

6
P         R 10  10
A       I I  8  2
Y     H   N  6  4
P   S     G  4  6
A I          2  8
L           10  10

FULL ROUND IS (numRows - 1) * 2

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
P     I    N 6
A   L S  I G 4
Y A   H R    4
P     I      6
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

const convert = function(str, numRows) {
  // establish core variables
  const letters = str.split('')
  const diagArr = []
  const maxIncreaseNum = (numRows - 1) * 2
  const findIncrease = (num) => {
    return num * 2
  }
  // iterate once through first numRows spots
  for (let i = 0; i < numRows; i++) {
    let curIndex = i
    // const firstOrLast = (i === 0 || i === numRows - 1)
    let patternIncreaseNum = maxIncreaseNum - findIncrease(i)
    while (letters[curIndex]) {
      // add to diagArr
      diagArr.push(letters[curIndex])
      // console.log('diagArr is', diagArr)
      // find where on pattern the index lies
      if (i === 0 || i === numRows - 1) {
        // increase index by pattern
        curIndex += maxIncreaseNum
      } else {
        // console.log('else statement -------')
        curIndex += patternIncreaseNum
        patternIncreaseNum = maxIncreaseNum - patternIncreaseNum
      }
      // end while loop
    }
    // end for loop
  }
  return diagArr.join('')
};

// const convert = function(str, numRows) {
//   // create matrix of arrays numRows long
//   const matrix = []
//   const createMatrix = (num) => {
//     for (let i = 1; i <= num; i++) {
//       matrix.push([])
//     }
//   }

//   let shouldCountUp = false
//   let curRowIndex = 0
  
  
//   createMatrix(numRows)
//   // console.log(matrix)
//   // loop through string pushing each letter onto matrix in zigzag order
//   for (let i = 0; i < str.length; i++) {
//     // const isFirstRow = curRowIndex === 0
//     // const isLastRow = curRowIndex === numRows - 1
//     // switch diag direction when at the top or bottom collumn
//     // console.log('curRowIndex is', curRowIndex)
//     if ((curRowIndex === 0) || (curRowIndex === numRows - 1)) {
//       shouldCountUp = !shouldCountUp
//       // console.log('flipping count direction!!!!!')
//     }
//     // console.log('shouldCountUp is', shouldCountUp)
//     // push letter into matrix
//     matrix[curRowIndex].push(str[i])
//     // curRowIndex = shouldCountUp ? curRowIndex + 1 : curRowIndex - 1
//     if (shouldCountUp) {
//       curRowIndex ++
//     } else {
//       curRowIndex --
//     }
//   }
//   // console.log(matrix)
//   // join arrays and concat to new string in order
//   let diagStr = ''
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       diagStr = diagStr.concat(matrix[i][j])
//     }
//   }
//   return diagStr
// };

const s1 = 'PAYPALISHIRING'
const num1 = 4
console.log(convert(s1, num1))

const s2 = 'A'
const num2 = 1
console.log(convert(s2, num1))