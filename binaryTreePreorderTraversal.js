/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
*/

class Node {
  constructor(val=null, left=null, right= null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const node3 = new Node(3, null, null)
const node2 = new Node(2, node3)
const node1 = new Node(1, null, node2)

/*
    1
   /\
  *  2
     /
    3
*/

const preorderTraversalRecursive = function(root) {
  const output = []
  const traverse = function(node) {
    if (node === null) {
      return
    }
    output.push(node.val)
    console.log(output)
    traverse(node.left)
    traverse(node.right)
    return
  }
  traverse(root)
  return output
}

console.log(preorderTraversalRecursive(node1))