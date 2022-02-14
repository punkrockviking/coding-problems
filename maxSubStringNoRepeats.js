/* 
longest substring without repeating characters

Given a string s, find the length of the longest substring without repeating characters.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/*
 * @param {string} s
 * @return {number}
 */

const ex1 = 'dvdf'

const lengthOfLongestSubstring = function(str) {
  // greedy algorythm to track longest substring found thus far
  let maxSubLength = 0
  let currSubLength = 0
  let currSubSet = new Set()
  let i = 0
  while (i < str.length) {
    if (currSubSet.has(str[i])) {
      currSubSet = new Set()
      currSubLength = 0
    }
    currSubSet.add(str[i])
    console.log(currSubSet)
    currSubLength += 1
    maxSubLength = Math.max(maxSubLength, currSubLength)
    i += 1
  }
  console.log('maxSubLength is', maxSubLength)
  return maxSubLength
};

lengthOfLongestSubstring(ex1)