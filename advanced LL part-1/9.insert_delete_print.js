
class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  insert_node(pos, no) {
    let position = pos;

    let value = no;

    const newNode = new LinkedList(value);

    if (position == 1) {
      newNode.next = this.head;

      this.head = newNode;
    } else {
      let current = this.head;

      for (let i = 1; i < position - 1; i++) {
        if (current === null) {
          return;
        }

        current = current.next;
      }

      if (current != null) {
        newNode.next = current.next;

        current.next = newNode;
      }
    }
  }

  delete_node(pos) {
    let position = pos;

    if (this.head === null) {
      return;
    }

    if (position == 1) {
      this.head = this.head.next;
    } else {
      let current = this.head;

      for (let i = 1; i < position - 1; i++) {
        if (current === null && current.next === null) {
          return;
        }
        if (current != null) current = current.next;
      }

      if (current != null && current.next != null)
        current.next = current.next.next;
    }
  }

  print_ll() {
    let result = "";

    let current = this.head;

    while (current != null) {
      result += current.next == null ? current.val : current.val + " ";

      current = current.next;
    }

    console.log(result);
  }
}

let head;
// Example usage:
const linkedList = new LinkedList();

linkedList.insert_node(0, 1);
linkedList.insert_node(1, 2);
linkedList.insert_node(1, 3);
linkedList.insert_node(2, 4);

linkedList.print_ll(); // Output: [1, 3, 4, 2]

linkedList.delete_node(1);

linkedList.print_ll(); // Output: [1, 4, 2]
