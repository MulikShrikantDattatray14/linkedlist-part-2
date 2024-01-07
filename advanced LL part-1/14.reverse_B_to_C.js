class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
function reverseBetween(head, B, C) {
    if (!head || B === C) {
        return head;
    }
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    // Move to the node just before the reversal starts
    for (let i = 0; i < B - 1; i++) {
        pre = pre.next;
    }
    let start = pre.next; // Start of the reversal
    let curr = start.next;
    // Reverse nodes from B to C
    for (let i = 0; i < C - B; i++) {
        start.next = curr.next;
        curr.next = pre.next;
        pre.next = curr;
        curr = start.next;
    }
    return dummy.next;
}

// Example usage:
// Convert the array to a linked list: 1 -> 2 -> 3
let arr = [1, 2, 3];
let head = new ListNode(arr[0], new ListNode(arr[1], new ListNode(arr[2])));
let B = 1, C = 2;

// Reverse the linked list from position B to C
let reversedList = reverseBetween(head, B, C);

// Output the reversed linked list
while (reversedList !== null) {
    console.log(reversedList.val);
    reversedList = reversedList.next;
}

