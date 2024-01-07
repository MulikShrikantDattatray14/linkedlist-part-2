//Q2. Certainly! If you have a linked list and only the head is given, you can calculate the size (number of nodes) of the linked list by traversing through it. Here's a simple JavaScript code for that:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

 function calculateSize(head) {
    let current = head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }



const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(5);


console.log(calculateSize(head))