// Given two values in a tree
// Want to find their first common ancestor

/*
     1
    / \
   /   \
  2     \
 / \     3
4   5   / \
       9   \
            8
           / \
          6   7
*/

//input 2 values and root node
//output 1st common ancestor (value)
//constraints linear runtime complexity, if parent & child return parent

class Node {
  constructor(value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const checkForTargetValue = (target, node, pathArray=[]) => {
  if (!node) {
    return
  }
  // store value in path array
  pathArray.push(node.value)
  // console.log('red dot pathArray at ',node.value, pathArray)

  if (target === node.value) {
    return pathArray
  }
  checkForTargetValue(target, node.left, pathArray)
  if (pathArray[pathArray.length - 1] !== target) {
    checkForTargetValue(target, node.right, pathArray)
  }
  if (pathArray[pathArray.length - 1] !== target) {
    pathArray.pop()
  }
  console.log(pathArray)
  return pathArray
}

const findCommonAncestor = (targetVal1, targetVal2, rootNode) => {
  const path1 = checkForTargetValue(targetVal1, rootNode)
  const path2 = checkForTargetValue(targetVal2, rootNode)
  for (let i = 0; i < Math.max(path1.length, path2.length); i++) {
    if (path1[i] !== path2[i]) {
      return path1[i-1]
    }
  }
  return path1[path1.length - 1]
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(8);
const g = new Node(6);
const h = new Node(7);
const i = new Node(9);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = i;
c.right = f;
f.left = g;
f.right = h;

console.log(findCommonAncestor(10, 7, a))