/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
  let title = ''
  let rem
  let num = columnNumber
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  // alphabet is an array with each letter as an index value
  alphabet.unshift('Z')
  // add an '' to array so each index is equal to the number representation
  
  // see how many times the number is divisible by 26
  while(num > 26) {
    div = Math.floor(num / 26)
    if (div > 26) {
      title = alphabet[div % 26] + title
      num = div - 26
    } else {
      title = alphabet[div] + title
      num = num % 26
      num = num === 0 ? 26 : num
    }
    console.log(title)
  }
  // use remainder for last digit letter
  title += alphabet[num]

  return title
};

console.log(convertToTitle(2147483647))