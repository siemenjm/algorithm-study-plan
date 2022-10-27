// Given the head of a linked list, remove the nth node from the end of the list and return its head.


// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

class ListNode {
    constructor(data = 0) {
        this.data = data,
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

function createLinkedList(nodes) {
    let nodeArray = [];
    for (let i = 1; i <= nodes; i++) {
        nodeArray.push(new ListNode(i));
    }

    nodeArray.forEach((node, index) => {
        if (node.data !== nodes) {
            node.next = nodeArray[index + 1];
        }
    });

    return new LinkedList(nodeArray[0]);
}

// console.log(createLinkedList(5));

function removeNthFromEnd(head, n) {
    // find the nth-from-end node
    
    // find the end node, count how many nodes there are to get there
    let end = head;
    let totalNodes = 1;
    while (end.next) {
        end = end.next;
        totalNodes++;
    }
    console.log('end: ', end);
    console.log('totalNodes: ', totalNodes);

    // use totalNodes to find nth-from-end node
    let nthFromEndNodePointer = totalNodes - n - 1;
    console.log('nthFromEndNodePointer: ', nthFromEndNodePointer)

    let nthFromEndNode = head;
    while (nthFromEndNodePointer >= 0) {
        nthFromEndNode = nthFromEndNode.next;
        nthFromEndNodePointer--;
    }
    console.log('nthFromEndNode: ', nthFromEndNode);

    // remove node
    

    // return head
}

console.log(removeNthFromEnd(createLinkedList(5).head, 2)); // [1,2,3,5]