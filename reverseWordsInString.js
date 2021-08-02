// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
  let fullReversedStr = ''
  let fullArr = str.split('')
  let wordArr = []
  let reverseArr = []
  let joinArr = ''
  const doTheFlip = function() {
    // reverse the wordArr
    reverseArr = wordArr.reverse()
    // join reverseArr
    joinArr = reverseArr.join('')
    // concat into fullReversedStr
    fullReversedStr = fullReversedStr.concat(joinArr)
  }
  // iterate through til space
  for(i = 0; i < fullArr.length; i++){
    if (fullArr[i] === ' ') {
      // do the flip
      doTheFlip()
      // reset wordArr and reverseArr
      wordArr = []
      reverseArr = []
      // concat the space
      fullReversedStr = fullReversedStr.concat(fullArr[i])
    } else {
      //push fullArr[i] onto wordArr
      wordArr.push(fullArr[i])
    }
    if (i === fullArr.length - 1 && fullArr[i] !== ' ') {
      // do the flip
      doTheFlip()
    }
  }
  return fullReversedStr
}
reverseWords('omg man')