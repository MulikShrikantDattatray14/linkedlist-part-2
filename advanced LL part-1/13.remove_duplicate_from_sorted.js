// Definition for singly-linked list.
function Node(data) {
    this.data = data;
    this.next = null;
}

// Function to delete duplicates from a sorted linked list
function deleteDuplicates(A) {
    let origin = A; // Store the original head for return

    while (A !== null) {
        while (A.next !== null && A.data === A.next.data) {
            A.next = A.next.next; // Remove duplicate nodes
        }
        A = A.next; // Move to the next node
    }

    return origin; // Return the modified linked list
}

// Example usage:
// Create a sorted linked list: 1 -> 1 -> 2 -> 3 -> 3
let linkedList = new Node(1);
linkedList.next = new Node(1);
linkedList.next.next = new Node(2);
linkedList.next.next.next = new Node(3);
linkedList.next.next.next.next = new Node(3);
console.log("Before removing duplicates")
// Print the result
let temp=linkedList
while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
}


console.log("After removing duplicates")
// Call the function to delete duplicates
let resultHead = deleteDuplicates(linkedList);

// Print the result
while (resultHead !== null) {
    console.log(resultHead.data);
    resultHead = resultHead.next;
}
