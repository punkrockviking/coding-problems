/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
*/

class List {
  constructor(val, next=null) {
  this.val = val
  this.next = next  
}
} 

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

const mergeTwoLists = function(l1, l2) {
  // create merged merged list, list 1, and list 2
  const cur1 = l1
  const cur2 = l2
  const mergedList = new List(null)
  const isList1Less = cur1.val <= cur2.val
  
  // compare current node of list 1 and 2
  while (cur1.val && cur2.val) {
    if (isList1less){
      
    }
  }

  // set current node.val of merged list equal to the < val

  // set the val of the list we chose equal to its .next property
    
};

// mergeTwoLists(a,aa)