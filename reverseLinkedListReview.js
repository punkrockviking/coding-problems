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
  console.log(head)
  let curNode = head
  let prevNode = null
  let nextNode

  while (curNode) {
    // store next node for ref
    nextNode = curNode.next
    // move pointer of curNode
    curNode.next = prevNode
    // reassign for next loop
    prevNode = curNode
    curNode = nextNode
  }
  return prevNode
};

console.log(reverseList(list1))