class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function duplicateLinkedList(originalHead) {
    if (!originalHead) {
      return null;
    }
  
    // Create a new head for the duplicated linked list
    const newHead = new Node(originalHead.data);
    let originaltemp = originalHead;
    let newtemp = newHead;
  
    // Iterate through the original list and duplicate each node
    while (originaltemp.next !== null) {
        originaltemp = originaltemp.next;
        newtemp.next = new Node(originaltemp.data);
        newtemp = newtemp.next;
    }
  
    return newHead;
  }
  
  // Example usage:
  const originalList = new Node(1);
  originalList.next = new Node(2);
  originalList.next.next = new Node(3);
  
  const duplicatedList = duplicateLinkedList(originalList);
  
  // Print original list
  let current = originalList;
  console.log("Original List:");
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  
  // Print duplicated list
  current = duplicatedList;
  console.log("\nDuplicated List:");
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  