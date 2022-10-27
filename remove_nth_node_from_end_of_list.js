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
    constructor(val = 0) {
        this.val = val,
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
        if (node.val !== nodes) {
            node.next = nodeArray[index + 1];
        }
    });

    return new LinkedList(nodeArray[0]);
}

// console.log(createLinkedList(5));

function removeNthFromEnd(head, n) {
    // two pointers, a fast and slow
    // fast finds the end of the list
    // slow waits for fast to move n times before starting
    // when fast reaches end, stop. slow will be the nth-from-end node

    let fast = head;
    let slow = head;
    
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) {
        return head.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
}

console.log(removeNthFromEnd(createLinkedList(5).head, 2)); // [1,2,3,5]
console.log(removeNthFromEnd(createLinkedList(1).head, 1)); // []
console.log(removeNthFromEnd(createLinkedList(2).head, 1)); // [1]