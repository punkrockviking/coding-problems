/*
Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
*/

function repeater(str, n){
  let repeatedStr = ''
  for (let i = 1; i <= n; i++) {
    repeatedStr += str
  }
  return repeatedStr
}