// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.


function sumDigits(number) {
    const digits = number.toString()
    let sum = 0
    for (let i=0; i < digits.length; i++){
      if (parseInt(digits[i]) >= 0){
        sum = sum + parseInt(digits[i])
      }
    }
    return sum
  }

  const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumDigits(10), 1);
    assert.strictEqual(sumDigits(99), 18);
    assert.strictEqual(sumDigits(-32), 5);
    })
  })
