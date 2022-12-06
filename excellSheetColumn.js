/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
  let title = ''
  let num = columnNumber
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  // alphabet is an array with each letter as an index value
  alphabet.unshift('')
  // add an '' to array so each index is equal to the number representation
  
  // see how many times the number is divisible by 26
  while(num > 26) {
    title += alphabet[Math.floor(num / 26)]
    console.log(title)
    num = num % 26
  }
  // use remainder for last digit letter
  title += alphabet[num]

  return title
};

console.log(convertToTitle(30))