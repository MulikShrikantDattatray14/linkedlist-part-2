function Node(data) {
    this.data = data;
    this.next = null;
}

function reverselastknodes(head, k) {
    if (head == null || k == 0) {
        return head;
    }

    let length = 0;
    let current = head;

    // Find the length of the linked list
    while (current !== null) {
        length++;
        current = current.next;
    }

    // If k is greater than or equal to the length, reverse the whole list
    if (k >= length) {
        return reverseList(head);
    }

    let h1 = head;
    let h2 = null;
    let h3 = head;

    // Move to the node before the start of the last k nodes
    for (let i = 0; i < length - k; i++) {
        h3 = h1;
        h1 = h1.next;
    }
 // now h1 is at the start node of the part that is going to reverse 
    // Reverse the last k nodes
    for (let i = 0; i < k; i++) {
        let t = h1;
        h1 = h1.next;
        t.next = h2;
        h2 = t;
    }

    h3.next = h2;
    return head;
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
}

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

// Reverse the last k nodes of the linked list using the encapsulated method
let k = 3;
const reversedHead = reverselastknodes(head, k);

// Log the reversed linked list
console.log("\nReversed List (last k nodes):");
current = reversedHead;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
