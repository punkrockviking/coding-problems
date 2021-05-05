/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let palindrome = true
    // make all lowercase
    let sentence = s.toLowerCase()
    // remove spaces and punctuation from string
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
    sentence = sentence.replace(regex, '')
    for (i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        sentence = sentence.replace(sentence[i],'')
        i --
      }
    }
    // compare outsides and work way into middle
    let left = 0
    let right = sentence.length - 1
    while (left < right) {
      if (sentence[left] !== sentence[right]) {
        palindrome = false
        return palindrome
      } else if (sentence[left] === sentence[right]) {
        left += 1
        right -= 1
      }
    }
    return palindrome
  };

  // optimised solution from leetCode
//   var isPalindrome = function(s) {
//     s = s.replace(/\W+/g, "").toLowerCase();
//     return s === s.split("").reverse().join("");
// };