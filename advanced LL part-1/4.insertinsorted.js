class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function insert(head, element) {
  const newNode = new Node(element);

  if (!head || element < head.data) {
    newNode.next = head;
    head = newNode;
  } else {
    let temp = head;
    while (temp.next != null&& element > temp.next.data) {
        temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;
  }
  return head;
}

let head = new Node(11);
head.next = new Node(12);
head.next.next = new Node(13);
head.next.next.next = new Node(14);
head.next.next.next.next = new Node(15);
head.next.next.next.next.next = new Node(16);

console.log("before inserting");
let current = head;
while (current != null) {
  console.log(current.data);
  current = current.next;
}
console.log("After 1st inserting");
let insertsort = insert(head, 100);
let temp = insertsort;
while (temp != null) {
  console.log(temp.data);
  temp = temp.next;
}
console.log("After  2nd inserting");
let insertsort1 = insert(head, -100);
let temp1 = insertsort1;
while (temp1 != null) {
  console.log(temp1.data);
  temp1= temp1.next;
}

