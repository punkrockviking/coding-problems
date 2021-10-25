/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/*
Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val, 
and return the new head.
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
//1,2,6,3,4,5,6
let nodeA= new ListNode(1)
let nodeB= new ListNode(2)
let nodeC= new ListNode(6)
let nodeD= new ListNode(3)
let nodeE= new ListNode(4)
let nodeF= new ListNode(5)
let nodeG= new ListNode(6)
nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = nodeE
nodeE.next = nodeF
nodeF.next = nodeG



const removeElements = function(node, tarVal) {
  let headNode = node
  let prevNode = null
  let currNode = node
  let nextNode = node ? node.next : null
  while (currNode) {
    if (currNode.val !== tarVal) {
      prevNode = currNode
    } else if (!prevNode) {
      headNode = nextNode
    } else {
      prevNode.next = nextNode
    }
    currNode = nextNode
    nextNode = nextNode ? nextNode.next : null
  }
  return headNode
};

removeElements(nodeA, 6)