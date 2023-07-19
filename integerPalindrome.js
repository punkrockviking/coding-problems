/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/


/*
 * @param {number} x
 * @return {boolean}
 */
// solve starting from outsides and moving in to middle
var isPalindrome = function(x) {
    const s = x.toString()
    let palindrome = true
    if (s.length === 1) {
        palindrome = true
        return palindrome
    }
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) {
            palindrome = false
            return palindrome
        } else if (s[left] === s[right]) {
            left += 1
            right -= 1
        }
    }
    return palindrome
};

// solved with middle out approach
const isPalindromeInt = function (int) {
  const str = int.toString()
  const isEqual = (leftIndex, rightIndex) => {
    return str[leftIndex] === str[rightIndex]
  }

  if (str.length < 2) {
    return false
  }
  let right = Math.ceil(str.length / 2)
  let left = Math.floor(str.length / 2 - 1)

  while (left >= 0) {
    if (!isEqual(left, right)) {
      return false
    }
      left --
      right ++
  }
  return true
}

console.log(isPalindromeInt([1,2,3,2,1]))
console.log(isPalindromeInt([1,2,3,3,2,1]))
console.log(isPalindromeInt([1,2,3,3,1]))
console.log(isPalindromeInt([1,2,3,1]))