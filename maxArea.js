/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/*
 * @param {number[]} height
 * @return {number}
 */

// input: array (heights)
// output: int (max area)
// constraints: 
  /* n == height.length
  2 <= n <= 105
  0 <= height[i] <= 104
  */
const testHeights = [1,8,6,2,5,4,8,3,7]
const expectedValue = 49

function maxArea(heights) {
  let biggestArea = 0
  let leftIndex = 0
  let rightIndex = heights.length - 1
  while (leftIndex < rightIndex) {
    const leftHeight = heights[leftIndex]
    const rightHeight = heights[rightIndex]
    const limitingHeight = Math.min(leftHeight, rightHeight)
    const currArea = limitingHeight * (rightIndex - leftIndex)
    biggestArea = Math.max(biggestArea, currArea)

    if (leftHeight < rightHeight) {
      leftIndex ++
    } else {
      rightIndex --
    }
  }
  return biggestArea
}
maxArea(testHeights)


// function maxArea(heights) {
//   let maxAreaBox = 0
//   for (let i = 0; i < heights.length; i++) {
//     const leftHeight = heights[i]
//     for (let j = i + 1; j < heights.length; j++) {
//       const rightHeight = heights[j]
//       console.log('*********************************')
//       console.log('Curr leftHeight is', leftHeight)
//       console.log('Curr rightHeight is', rightHeight)
//       const limitingHeight = Math.min(leftHeight, rightHeight)
//       const currArea = limitingHeight * (j - i)
//       console.log('Calculating area using', limitingHeight, 'X', j-i)
//       console.log('currArea is', currArea)
//       maxAreaBox = Math.max(maxAreaBox, currArea)
//       // console.log('maxAreaBox is', maxAreaBox)
//     }
//   }
//   return maxAreaBox
// };