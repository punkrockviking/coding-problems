/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
  let title = ''
  // let div
  let num = columnNumber
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  // alphabet is an array with each letter as an index value
  alphabet.unshift('Z')
  // add an '' to array so each index is equal to the number representation

  // see how many times the number is divisible by 26
  console.log('***************************')
  while (num > 26) {
    const div = Math.floor(num / 26)
    const divMod = div % 26 === 1 ? 26 : div % 26
    if (div > 26) {
      console.log('in the if statement')
      title += alphabet[divMod]
      num = div // what to do here?
    } else {
      console.log('in the else statement')
      title += alphabet[div]
      num = num % 26
      num = num === 0 ? 26 : num
    }
    console.log(title)
  }
  // use remainder for last digit letter
  title += alphabet[num]

  return title
};

console.log(convertToTitle(701))
console.log(convertToTitle(702))
console.log(convertToTitle(806))
console.log(convertToTitle(676))
console.log(convertToTitle(677))





// the number of times i have to divide by 26 is the index number i have to access to print into the str for the answer!!!