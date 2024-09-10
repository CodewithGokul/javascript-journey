class Node {
  val;
  next;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = null;

function appendVal(val) {
  let newNode = new Node(val);

  if (head === null) {
    head = newNode;
  } else {
    let temp = head;

    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
}

function insertVal(val, pos) {
  let i = 1;
  let newNode = new Node(val);
  let temp = head;

  while (i === pos - 1) {
    temp = temp.next;
    i++;
  }

  let newNext = temp.next;
  temp.next = newNode;
  newNode.next = newNext;
}

function display(head) {
  let temp = head;

  while (temp != null) {
    console.log(temp.val);
    temp = temp.next;
  }
}

appendVal(1);
appendVal(2);
appendVal(4);
appendVal(5);
insertVal(3, 2);
display(head);
