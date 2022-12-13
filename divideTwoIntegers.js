/* 
DIVIDE TWO INTEGERS
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  if (Math.abs(dividend) > 2147483647) {
    if (dividend < 0) {
      if (divisor === 1) return dividend
      if (divisor === -1) return 2147483647
    }
    if (dividend > 0) {
      if (divisor === 1) return 2147483647
      if (divisor === -1) return -dividend
    }
  }
  if (dividend === 0) {
    return 0
  }
  if (divisor === 1) {
    return dividend
  }
  if (divisor === -1) {
    return 0 - dividend
  }
  let lilNum = Math.abs(divisor)
  let bigNum = Math.abs(dividend)
  let quotient = 0
  let sum = 0
  const isPositive = () => {
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
      return false
    }
    return true
  }

  while (sum + lilNum <= bigNum) {
    sum += lilNum
    quotient++
  }

  // quotient = quotient > 2147483647 ? 2147483647 : quotient
  quotient = isPositive() ? quotient : 0 - quotient

  return quotient

};

console.log(divide(7, 2))
console.log(divide(-7, 2))
console.log(divide(7, -2))
console.log(divide(-2147483648, -1))

