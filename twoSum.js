/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length - 1; i++){
        const currNum = nums[i]
        let nextNum = nums[i+1]
        let currSum = currNum + nextNum
        if (currSum !== target) {
            for(let j = i+2; j < nums.length; j++) {
                const nextNum = nums[j]
                const currSum = currNum + nextNum
                if (currSum === target) {
                    const result = [i,j]
                    return result
                }
            }
        } else {
            const result = [i, i+1]
            return result 
        }
    }
    return result
};