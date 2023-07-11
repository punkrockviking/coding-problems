// leetcode 242 validAnagram 

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

var isAnagram = function(str1, str2) {
  const addLetter = () => {
    // adds letter to hashmap
  }
  const isMatchingLetter = (char, hash) => {
    // checks if letter is in hashmap
    return !!hash[char]
  }
  const letterMap = (str) => {
    const hash = {}
    for (let s in str) {
      if (str[s] in hash) {
        hash[str[s]]++
      }
      else {
        hash[str[s]] = 1
      }
    }
    return hash
  }
  const isEmpty = (hash) => {
    for (let prop in hash) {
      if (hash[prop]) {
        return false
      }
    }
    return true
  } 
  
  // check if strings are lame length (edge case)
  if (str1.length !== str2.length) {
    console.log('returning at length check')
    return false
  }
  // go through str1 and add letters into hashmap keeping track of number of times letter is seen
  const letterCount = letterMap(str1)
  // check str2 
  for(let i = 0; i < str2.length; i++) {
    const curLetter = str2[i]
  // if letter not in hashmap return false
    if (isMatchingLetter(curLetter, letterCount === false)) {
      console.log('returning at match check')
      return false
    }
    else {
      // if letter is in hashmap reduce the count by 1
      letterCount[curLetter] --
      // if key in hashmap becomes 0, remove it from hashmap
      if (letterCount[curLetter] === 0) {
        delete letterCount[curLetter]
      }
    }
  }
  // if hashmap is empty return true
  console.log('returning at end')
  console.log('letterCount is', letterCount)
  return isEmpty(letterCount)
};

console.log(isAnagram('racecar', 'carrace'))
console.log(isAnagram('raccar', 'carrace'))
console.log(isAnagram('spam', 'pame'))

//solved 110 ms runtime (slow) and 51MB memory (high)