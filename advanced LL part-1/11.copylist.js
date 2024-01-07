//https://www.youtube.com/watch?v=4apaOcK586U
// Definition for linked list.
function RandomListNode(data) {
  this.data = data;
  this.next = null;
  this.random = null;
}

// Function to print the linked list
function printList(head) {
  let current = head;
  while (current) {
    console.log(
      `Data: ${current.data}, Random: ${
        current.random ? current.random.data : "null"
      }`
    );
    current = current.next;
  }
}

// Copy Random List function
function copyRandomList(head) {
  let curr = head;

  while (curr != null) {
    let temp = curr.next;
    curr.next = new RandomListNode(curr.data);
    curr.next.next = temp;
    curr = temp; // moving ahead to next node
  }

  curr = head; // coming back to node-1

  while (curr != null) {
    if (curr.next != null) {
      curr.next.random = curr.random != null ? curr.random.next : null;
    }
    curr = curr.next.next;
  }

  let original = head;
  let copy = head.next;
  let temp = copy;// temp is what will be returned

  while (original != null) {
    original.next = original.next.next;

    if (copy.next != null) copy.next = copy.next.next;

    original = original.next;
    copy = copy.next;
  }

  return temp;
}

// Example usage
let node1 = new RandomListNode(1);
let node2 = new RandomListNode(2);
let node3 = new RandomListNode(3);

node1.next = node2;
node2.next = node3;

node1.random = node3;
node2.random = node1;
node3.random = node2;

let originalHead = node1;

console.log("Original linked list:");
printList(originalHead);

// Call the copyRandomList function
let copiedHead = copyRandomList(originalHead);

console.log("\nCopied linked list:");
printList(copiedHead);
