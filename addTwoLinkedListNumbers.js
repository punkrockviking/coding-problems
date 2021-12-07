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
  let currNode = new ListNode()
  let prevNode = null
  let headNode = currNode
  let carryNum = 0
  while (cur1 && cur2) {
    // start at first node and get sum of the two nodes
    let nodeSum = cur1.val + cur2.val + carryNum
    carryNum = 0
    // if > 10, only use first digit and carry the 1 to the next node set
    if (nodeSum >= 10) {
      // carries the 1 using flag
      carryNum = 1
    }
    nodeSum = nodeSum % 10
    const tailNode = new ListNode(nodeSum)
    // got lost here
    // need to do: 
      // build upon the headNode using the prevNode and/or currNode 
    currNode.val = tailNode.val // dont use this
    // move on to next node
    cur1 = cur1.next
    cur2 = cur2.next
    prevNode = currNode // what am i trying to do here?
    
    // if one list ends and there is still another, carry any 1's and iterate through rest of list
    

  }

  // return summed list
};