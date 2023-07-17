/*
88. Merge Sorted Array
Easy
11.4K
1.2K
Companies
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

const merge = function(nums1, m, nums2, n) {
  if (nums2.length === 0) {
    return 
  }
  // left num(1) and right num(2)
  let left = 0
  let right = 0
  let tempNum = nums1[0]
  // let curNum2 = nums2[0]
  
  // while both num indexes are less than length of their arrays
  while (left < m + n) {
    // if nums1[left] is 0 replace with nums2[right]
    //console.log('-----------------------------------')
    if (nums1[left] === 0) {
      nums1[left] = nums2[right]
      left++
      right++
      //console.log('if its 0')
    }
    else if (nums1[left] <= nums2[right]) {
      left++
      tempNum = nums1[left]
      //console.log('if left is smaller than right')
    }
    // finally if current nums2 is less than current nums1
    else if (nums1[left] > nums2[right]) {
      // save nums1 number
      tempNum = nums1[left]
      // replace with right number
      nums1.splice(left, 0, nums2[right])
      nums1.pop()
      // nums1[left] = nums2[right]
      left++
      right++
      //console.log('if right is the smaller!!')
    }
  }
  return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))