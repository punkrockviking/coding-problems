/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const sortedNums = nums.sort((a,b) => a-b)
  let curMaj = 1
  let maxMaj = 1
  let maxNum = sortedNums[0]
  let curNum = sortedNums[0]
  let prevNum
  for (let i = 0; i < sortedNums.length; i++) {
    curNum = sortedNums[i]
    if (curNum === prevNum) {
      curMaj += 1
    }
    if(curMaj > maxMaj) {
      maxMaj = curMaj
      maxNum = curNum
    }
    if (maxMaj > nums.length / 2) {
      return curNum
    }
    prevNum = curNum
  }

  return maxNum
};

console.log(majorityElement([1,2,5,2]))

const majorityElementTest = (nums) => {
  // sort nums
  // track max repeats
  // track max repeated value (stack or single value)
  // track cur repeats
  // if repeat +1
  // if new num reset and count again

  nums = nums.sort()
  let maxRep = 0
  let maxRepNum = nums[0]
  let curNum = nums[0]
  let curRep = 0

  const isRep = (val, tar) => {
    return val === tar
  }
  
  for (let i = 1; i < nums.length; i++) {
    if (isRep(nums[i], curNum)) {
      curRep++
      if (curRep > maxRep) {
        maxRep = curRep
        maxRepNum = curNum
      }
    } else {
      curNum = nums[i]
      curRep = 0
    }
  }
  return maxRepNum
}

console.log(majorityElementTest([1,2,5,2]))