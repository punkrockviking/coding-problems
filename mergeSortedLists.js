/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
*/

class List {
  constructor(val, next=null) {
    this.val = val
    this.next = next  
  }
} 


const mergeTwoLists = function(l1, l2) {
  // create merged merged list, list 1, and list 2
  let cur1 = l1
  let cur2 = l2
  let mergedList = new List(null)
  let head = mergedList
  
  while (cur1 && cur2) {
    // compare current node of list 1 and 2
    if (cur1.val <= cur2.val) {
      // set current node.val of merged list equal to the < val
      mergedList.next = new List(cur1.val)
      // set the val of the list we chose equal to its .next property
      cur1 = cur1.next
    } else {
      mergedList.next = new List(cur2.val)
      cur2 = cur2.next
    }
    mergedList = mergedList.next
  }
  mergedList.next = cur1 ? cur1 : cur2

  return head.next    
};

//1,2,4
//1,3,4
const a = new List(1)
const b = new List(2)
const c = new List(4)
a.next = b
b.next = c

const aa = new List(1)
const bb = new List(3)
const cc = new List(4)
aa.next = bb
bb.next = cc
mergeTwoLists(a,aa)