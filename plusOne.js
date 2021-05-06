/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

* @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const overNine = function(arr,i) {
    while (i >= 0) {
      if (i === 0 && arr[i] > 9) {
        arr[i] = 0
        arr.unshift(1)
        return arr
      } else if (arr[i] > 9) {
          arr[i] = 0
          arr[i-1] += 1
          i -= 1
          overNine(digits, i)
      }
      else {
        return arr
      }
    }
  }

  let lastIndex = digits.length -1
  digits[lastIndex] += 1  
  if (digits[lastIndex <= 9]) {
    return digits
  } else {
    return overNine(digits, lastIndex)
  }
};