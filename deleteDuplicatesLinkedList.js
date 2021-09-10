class ListNode {
  constructor(val) {
    this.val = val
    this.next = null                
  }
}

let node1 = new ListNode(1)
let node2 = new ListNode(1)
let node3 = new ListNode(2)
node1.next = node2
node2.next = node3

const deleteDuplicates = function(node) {
  if (!node) {
    return node
  }
  let headNode = node
  let prevNode = null
  let currNode = node
  let nextNode = node.next
  // while loop - as long as there is a next property on the current node
  while (nextNode) {
    // const shouldDeleteNode = currNode.val === nextNode.val
    // // check if curr value is equal to next val
    // if (shouldDeleteNode && !prevNode) {
    //   headNode = nextNode
    // } else if (shouldDeleteNode) {
    //   prevNode.next = nextNode
    // } else {
    //   prevNode = currNode
    // }


    if (currNode.val !== nextNode.val) {
      prevNode = currNode
    } else if (!prevNode) {
      headNode = nextNode
    } else {
      prevNode.next = nextNode
    }


    currNode = nextNode
    nextNode = nextNode.next
    // reassign the curr to be the next
    // reassign next prop of prev node to be the new current node
    // continue loop
    // reassign prev, curr, and next
  }

  // while (currentNode) {
  //   if (nextNode && currentNode.val === nextNode.val) {
  //     curruntNode.next = nextNode.next
  //   } else {
  //     currentNode = nextNode
  //   }
  // }


  return headNode
}
  




  // const linkedList = node
  // const checkNode = (node) => {
  //   console.log('calling function')
  //   if (!node.next) {
  //     console.log('no next')
  //     return node
  //   }
  //   console.log(node.next.val)
  //   // check current number against next number value
  //   if (node.val !== node.next.val) {
  //     console.log('not equal, continuing')
  //     return deleteDuplicates(node.next.val)
  //   }
  //   // if equal delete current value
  //   console.log(`nodes are equal`)
  //   console.log(node)
  //   node = node.next
  //   console.log(`new value for current node`)
  //   console.log(node)
  //   return deleteDuplicates(node)
  //   // next value becomes new current value
  //   // check again
  //   };
  // return checkNode(linkedList)
  // // console.log('returning linkedList')
  // // return linkedList
  // }


deleteDuplicates(node1)

// instead of recursive do it iterative with while loop. create new linked list as we go and return that new one