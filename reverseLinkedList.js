/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let list1 = new ListNode(2)
let list1b = new ListNode(4)
let list1c = new ListNode(3)
list1.next = list1b
list1b.next = list1c

const reverseList = function(head) {
  let node = head
  let temp
  let prev = null

  while (node) {
    // store next node
    temp = node.next
    // flip pointer
    node.next = prev
    // move to next node
    prev = node
    node = temp
  }
  return prev
};

reverseList(list1)