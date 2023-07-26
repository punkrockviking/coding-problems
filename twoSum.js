/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



// var twoSum = function(nums, target) {
    
//     for(let i = 0; i < nums.length - 1; i++){
//         const currNum = nums[i]
//         let nextNum = nums[i+1]
//         let currSum = currNum + nextNum
//         if (currSum !== target) {
//             for(let j = i+2; j < nums.length; j++) {
//                 const nextNum = nums[j]
//                 const currSum = currNum + nextNum
//                 if (currSum === target) {
//                     const result = [i,j]
//                     return result
//                 }
//             }
//         } else {
//             const result = [i, i+1]
//             return result 
//         }
//     }
//     return result
// };

var twoSum = function(nums, target) {
  //object to store num and index as we touch it
  const store = {}
  //iterate through nums
  for (let i = 0; i < nums.length; i++) {
  const num1 = nums[i]
  const num2 = target - nums[i]
  //if we have already touched our matching num (num2 is already in store)
    if (num2 in store) {
      // return
      return [i, store[num2]]
    }
    // if not in store add to store
    store[num1] = i
  }


  // leet code runtime beats 97% memory beats 33%