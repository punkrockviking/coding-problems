/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

function TreeNode(val=0, left=null, right=null) {
  this.val = val
  this.left = left
  this.right = right
}



const hasPathSum = function(root, targetSum) {
  //helper function
  let runningSum = 0
  const recurse = function (node) {
    if (!node) {
      return false
    }
    // add values on a particular path       
    runningSum += node.val
    // console.log(`Sum at ${node.val} is equal to ${runningSum}`)
    // if we are at a leaf node and our running sum equals our target sum - true
    const isLeafNode = !node.left && !node.right
    if (isLeafNode && (runningSum === targetSum)) {
      return true
    }
    // recursive calls
    if (recurse(node.left) || recurse(node.right)) {
      return true
    } 
    // if we traverse entire tree and sums dont match - false
    runningSum -= node.val
    return false
  }
  return recurse(root)
};

const nodeA = new TreeNode(1)
const nodeB = new TreeNode(2)
const nodeC = new TreeNode(3)
const nodeD = new TreeNode(4)
const nodeE = new TreeNode(5)
const nodeF = new TreeNode(6)
const nodeG = new TreeNode(7)
const nodeH = new TreeNode(8)
const nodeI = new TreeNode(9)


nodeF.left = nodeB
nodeF.right = nodeG

nodeB.left = nodeA
nodeB.right = nodeD

nodeD.left = nodeC
nodeD.right = nodeE

nodeG.right = nodeI

nodeI.left = nodeH

hasPathSum(nodeF, 30)