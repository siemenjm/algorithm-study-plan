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

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function middleNode(head) {
    let middle = Math.floor(head.length / 2);

    return head.slice(middle);
}

let head = [];
let length = 5;
for (let i = 1; i <= length; i++) {
    if (i === length) {
        head.push(new ListNode(i));
    } else {
        head.push(new ListNode(i, i+1));
    }
}
console.log(middleNode(head)); // [3,4,5]

head = [];
length = 6;
for (let i = 1; i <= length; i++) {
    if (i === length) {
        head.push(new ListNode(i));
    } else {
        head.push(new ListNode(i, i+1));
    }
}
console.log(middleNode(head)); // [4,5,6]