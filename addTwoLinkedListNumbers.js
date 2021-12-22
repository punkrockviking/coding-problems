/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

 function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
  }

// Input: l1 = [2,4,3], l2 = [5,6,4]
let list1 = new ListNode(2)
let list1b = new ListNode(4)
let list1c = new ListNode(3)
list1.next = list1b
list1b.next = list1c

let list2 = new ListNode(5)
let list2b = new ListNode(6)
let list2c = new ListNode(4)
list2.next = list2b
list2b.next = list2c


const addTwoNumbers = function(l1, l2) {
  // establish the 2 nodes
  let cur1 = l1
  let cur2 = l2
  // establish 3rd node (the list i return at the end)
  let prevNode = null
  let headNode
  let carryNum = 0
  while (cur1 || cur2 || carryNum) {
    // start at first node and get sum of the two nodes
    let nodeSum = carryNum
    carryNum = 0
    if (cur1) {
      nodeSum += cur1.val
      cur1 = cur1.next
    } 
    if (cur2) {
      nodeSum += cur2.val
      cur2 = cur2.next
    }
    // if > 10, only use first digit and carry the 1 to the next node set
    if (nodeSum >= 10) {
      // carries the 1 using flag
      carryNum = 1
    }
    nodeSum = nodeSum % 10 // reduce nodeSum to 1 digit
    const tailNode = new ListNode(nodeSum)
    // got lost here
    // need to do: 
    // build upon the headNode using the prevNode and/or currNode 
    // first time head tail and curr node are all same thing
    if (!prevNode) {
      headNode = tailNode
    }
    else {
      prevNode.next = tailNode
    }
    // move on to next node
    prevNode = tailNode
  }
  // if one list ends and there is still another, carry any 1's and iterate through rest of list
  // return summed list
  return headNode
};

addTwoNumbers(list1,list2)