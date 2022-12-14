// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

/*
 *
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  // count down
  // subtract an ammount for each letter you add
  let romanNum = ''
  let intNum = num

  while (intNum >= 1000) {
    intNum -= 1000
    romanNum += 'M'
  }
  if (intNum >= 900) {
    intNum -= 900
    romanNum += 'CM'
  }
  if (intNum >= 500) {
    intNum -= 500
    romanNum += 'D'
  }
  if (intNum >= 400) {
    intNum -= 400
    romanNum += 'CD'
  }
  while (intNum >= 100) {
    intNum -= 100
    romanNum += 'C'
  }
  if (intNum >= 90) {
    intNum -= 90
    romanNum += 'XC'
  }
  if (intNum >= 50) {
    intNum -= 50
    romanNum += 'L'
  }
  if (intNum >= 40) {
    intNum -= 40
    romanNum += 'XL'
  }
  while (intNum >= 10) {
    intNum -= 10
    romanNum += 'X'
  }
  if (intNum >= 9) {
    intNum -= 9
    romanNum += 'IX'
  }
  if (intNum >= 5) {
    intNum -= 5
    romanNum += 'V'
  }
  if (intNum >= 4) {
    intNum -= 4
    romanNum += 'IV'
  }
  while (intNum >= 1) {
    intNum -= 1
    romanNum += 'I'
  }

  return romanNum
};

