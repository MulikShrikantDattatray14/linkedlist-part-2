function Node(data) {
    this.data = data;
    this.next = null;
}

function reversefirstknodes( head , k){
    if(head ==null || k==0){
        return head;
    }
    let h2=null;
    let h1= head;
    let h3= head;// connects the reversed part to the remaining one
    while(k>0 && h1 != null){
        t=h1;
        h1=h1.next;
        t.next=h2;
        h2=t;
        k--
    }
    h3.next = h1;
    return h2
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

// Reverse the linked list using the encapsulated method
let k=2;
const reversedHead =reversefirstknodes( head , k);

// Log the reversed linked list
console.log("\nReversed List:");
current = reversedHead;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
