// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

/*
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // loop through
    for (let i = 0; i < nums.length - 1; i++) {
        const currNum = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            const nextNum = nums[j]
            // check to see if nextNum is same as currNum
            if (currNum === nextNum) {
                // splice next num out
                nums.splice(j,1)
            }
        }
    }
    // return nums.length
    return nums.length
};