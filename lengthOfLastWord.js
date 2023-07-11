/*
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.
*/

/*
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//     let length = 0
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ' && s[i+1] !== ' ' && !!s[i+1]) {
//             length = 0
//         } else if (s[i] !== ' ') {
//             length ++
//         }
//     }
//     return length
// };

const lengthOfLastWord = function(str) {
  if (str.length === 0) {
    return 0
  }
  let length = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ' && length !== 0) {
      return length
    }
    if (str[i] !== ' ') {
      length++  
    }
  }
  return length
}

