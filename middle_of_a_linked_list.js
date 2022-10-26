// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 
// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

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

console.log(createLinkedList(5));

// function middleNode(head) {
//     let fast = head;
//     let slow = head;

//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//     }

//     return slow;
// }

// console.log(middleNode(createLinkedList(5)));