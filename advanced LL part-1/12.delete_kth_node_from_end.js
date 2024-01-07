//It looks like you have a code snippet for removing the N-th node from the end of a singly-linked list. The removeNthFromEnd function uses the size function to find the position of the node to be removed and the remove function to perform the removal.
// Definition for singly-linked list.

function Node(data) {
  this.data = data;
  this.next = null;
}

// Function to calculate the size of the linked list
function size(head) {
  let count = 0;
  let temp = head;
  while (temp !== null) {
    temp = temp.next;
    count++;
  }
  return count;
}

// Function to remove a node at a given position from the linked list
function remove(A, position) {
  if (position === 0) {
    return A.next;
  }
  let temp = A;
  for (let curr = 0; curr < position - 1; curr += 1) {
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return A;
}

// Function to remove the N-th node from the end of the linked list
function removeNthFromEnd(A, B) {
  let position = size(A) - B;
  if (position < 0) return A.next;
  return remove(A, position);
}

// Example usage
// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Before deleting ")
// Printing the modified linked list
let temp1 = head;
while (temp1 !== null) {
  console.log(temp1.data);
  temp1 = temp1.next;
}


console.log("After deleting ")
// Removing the 2nd node from the end (B = 2)
let newHead = removeNthFromEnd(head, 2);
// Printing the modified linked list
let temp = newHead;
while (temp !== null) {
  console.log(temp.data);
  temp = temp.next;
}
