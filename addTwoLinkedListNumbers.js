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
  // establish curr, prev, and next nodes for each list
  // establish summed linked list
  // while curr.val of both lists
  // add numbers together
  // if >= 10 only use the single digit and add 1 to one of the .next numbers
  // return summed list
};