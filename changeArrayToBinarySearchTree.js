/* Convert a sorted array into a binary search tree

*/
/*
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
[1, 2, 3, 4]

[7, 4, 2, 1, 3, 6, 5, 11, 9, 8, 10, 13, 12]
*/

class Node {
  constructor(val, left=null, right=null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const changeToBinarySearchTree = (arr) => {
  if (arr.length === 0) {
    return null
  } 
  // find middle node for root node round down for even number of .length
  const rootIndex = Math.floor(arr.length / 2) 
  const rootNode = new Node(arr[rootIndex])
  console.log('Created node with value:', rootNode.val)
  // leftArr is from beginning to rootIndex
  const leftArr = arr.slice(0, rootIndex)
  // rightArr is from rootIndex to end
  const rightArr = arr.slice(rootIndex + 1, arr.length)

  rootNode.left = changeToBinarySearchTree(leftArr) 
  rootNode.right = changeToBinarySearchTree(rightArr)  

  return rootNode
}
// split array into 2
// resursive call inputing the current value index as the last index in the array passed in as argument
// left node is the middle between current node and beginning of array (round down)
// right node is middle of current node and end of split array +1  and then rounded down

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
changeToBinarySearchTree(testArr2)
// changeToBinarySearchTree(testArr)
