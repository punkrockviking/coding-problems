/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/

const test1 = [1,1,2]
const test2 = [17,17,17,3,17,17]

function stray(arr) {
  let outlier = arr[0]
  let duplicate = false
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) {
      outlier = arr[i]
      return outlier
    }
  }
  return outlier
}

stray(test1)
stray(test2)
