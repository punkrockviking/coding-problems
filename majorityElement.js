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