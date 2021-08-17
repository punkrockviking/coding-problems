/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters. 
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let prefix = ''
  for (let i = 0; i < strs[0].length; i++) {
    // create helper function to compare strs[0][i] to strs[0+1][i] etc
    let word = 1
    while (word < strs.length) {
      if (strs[0][i] !== strs[word][i]) {
      return prefix
      }
      word ++
    }
    prefix = prefix.concat(strs[0][i])
  }
  return prefix
};

const test1 = ["flower","flow","flight"]
const test2 = ["dog","racecar","car"]

console.log(longestCommonPrefix(test1))
console.log(longestCommonPrefix(test2))