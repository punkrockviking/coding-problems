/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let number = 0
    //iterate through string
    for (let currIndex = 0; currIndex < s.length; currIndex++) {
    // look for "-1 situations (IV or XC)"
        const nextIndex = currIndex + 1
        if (s[currIndex] === 'C' && s[nextIndex] === 'D') {
            number += 400
            currIndex += 1
        } else if (s[currIndex] === 'C' && s[nextIndex] === 'M') {
            number += 900
            currIndex += 1
        } else if (s[currIndex] === 'X' && s[nextIndex] === 'L') {
            number += 40
            currIndex += 1
        } else if (s[currIndex] === 'X' && s[nextIndex] === 'C') {
            number += 90
            currIndex += 1
        } else if (s[currIndex] === 'I' && s[nextIndex] === 'V') {
            number += 4
            currIndex += 1
        } else if (s[currIndex] === 'I' && s[nextIndex] === 'X') {
            number += 9
            currIndex += 1
        } else {
            number += romans[s[currIndex]]
        }
    }
    return number
};

// runtime beats 84%
// memory beats 37%
console.log(romanToInt("III"))