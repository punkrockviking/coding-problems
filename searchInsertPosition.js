/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const objNums = Object.assign({}, nums);
    
    if ( target > nums[nums.length -1 ]) {
        return nums.length
    }
    for (let i = 0; i < nums.length; i++) {
     const curr = nums[i]
     if (curr === target || curr > target) {
         return i
     }
    }
};