/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/


/*
 * @param {number} x
 * @return {boolean}
 */
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