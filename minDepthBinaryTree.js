/*
Minimum depth of binary tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/

class Node {
  constructor(value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const traverse = function(node, depthArr, depth=1) {
  console.log('*************************************************')
  let currDepth = depth 
  if (!node) {
    return
  }
  if (!node.left && !node.right) {
    // if (currDepth !== depthArr[depthArr.length - 1]) {
    depthArr.push(currDepth)
    // console.log(`end of the line! depth = `, currDepth)
    // console.log(depthArr)
    // }
    return depthArr
  }
  // console.log('There is a left at ', node.value)
  traverse(node.left, depthArr, currDepth + 1)
  // console.log('There is a right at ', node.value)
  traverse(node.right, depthArr, currDepth + 1)
  // console.log('---------------------------------------------')
  return depthArr
}

const minDepth = function(root) {
  // call helper function
  const depths = traverse(root, [])
  // sort array
  if (!root) {
    return 0
  }
  const sortedDepths = depths.sort((a,b) => {
    return a - b
  })
  // console.log(sortedDepths)
  return sortedDepths[0]
};

const a = new Node(3)
const b = new Node(9)
const c = new Node(20)
const d = new Node(15)
const e = new Node(7)
a.left = b
a.right = c
c.left = d
c.right = e
const f = new Node(1)
const g = new Node(2)
const h = new Node(3)
const k = new Node(4)
const l = new Node(5)
f.left = g
f.right = h
g.left = k
g.right = l



// minDepth(a)
minDepth(f)
