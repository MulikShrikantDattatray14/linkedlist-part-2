// Definition for singly-linked list.
function Node(data) {
    this.data = data;
    this.next = null;
}

function reverseList(A) {
    let h2 = null;// new linked list
    let h1 = A;
    let t;
    while (h1 != null) {
        t = h1;
        h1 = h1.next;
        t.next = h2;
        h2 = t;
    }
    return h2;
};

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Log the original linked list
console.log("Original List:");
let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}

// Reverse the linked list using the encapsulated method
const reversedHead =reverseList(head);

// Log the reversed linked list
console.log("\nReversed List:");
current = reversedHead;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
