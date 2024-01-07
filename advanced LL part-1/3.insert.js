//insert the node with the given value at the given specific positon

//note : if the given position is larger than the size of the linkedlist ,then return the head of the linkedlist ( this edge case is not included in the code below)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function solve(A, B, C) {
  //A- head;
  // B - value
  //c- cth position
  C=C-1// actual position and not index based 
  let n = new Node(B);
  //// WHEN head is null , we have only one node, so return the new nod
  if (A == null) return n;
  if (C <= 0) {
    n.next = A;
    return n;
  }

  let temp = A;
  for (let i = 1; i <= C - 1 && temp.next != null; i++) {
    temp = temp.next;
  }
  n.next = temp.next;
  temp.next = n;
  return A;
}
let head = new Node(11);
head.next = new Node(12);
head.next.next = new Node(13);
head.next.next.next = new Node(14);
head.next.next.next.next = new Node(15);
head.next.next.next.next.next = new Node(16);

let ans = solve(head, 1100, 1);

current = ans;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
