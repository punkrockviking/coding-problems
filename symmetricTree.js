/*
Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?

*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const isSymmetricRecursive = function(root) {
	const compare = (leftNode, rightNode) => {
		if (!leftNode && !rightNode) {
			return true;
		}
		if (!leftNode || !rightNode) {
			return false;
		}
		if (leftNode.val !== rightNode.val) {
			return false;
		}
		return (
			compare(leftNode.left, rightNode.right) &&
			compare(leftNode.right, rightNode.left)
		);
	};

	let curLeftNode = root.left;
	let curRightNode = root.right;

	return compare(curLeftNode, curRightNode);
};


const isSymmetricItterative = function(root) {
  // define current left and right nodes
  // left goes down left first
  // right goes down right first 
  // compare left to right
  // let curLeftNode = root
  // let curRightNode = root
  // let prevLeftNode = root
  // let prevRightNode = root
  let curNode = root
  let prevNode = root
  
  while (curNode) {
    if (curNode.left) {
      curNode = curNode.left
    } else if (curNode.right) {
      curNode = curNode.right
    } else {
      
    }

    prevNode = curnode
  }

  return true

};