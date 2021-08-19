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

const traverse = function(node, depth=0, minDepth) {
  console.log('*************************************************')
  let currDepth = depth 
  if (minDepth && currDepth < minDepth) {
      minDepth = currDepth
      console.log('minDepth is ', minDepth)
    }
  //WTF do i establish the minDepth? i think i have to pass it down recursively
  // is there a left?
  if (node.left) {
    // call again with depth + 1
    console.log('There is a left at ', node.value)
    traverse(node.left, currDepth + 1)
  }
  // is there a right?
  if (node.right) {
    // call again with depth + 1
    console.log('There is a right at ', node.value)
    traverse(node.right, currDepth + 1)
  }
  if (!node.left && !node.right) {
    // add one to depth and return depth
    currDepth += 1
    console.log(`end of the line at ${node.value}! depth = `, currDepth)
    traverse(node, currDepth, minDepth)
  }
  console.log('---------------------------------------------')
  return minDepth
}

const minDepth = function(root) {
  
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


traverse(a)
