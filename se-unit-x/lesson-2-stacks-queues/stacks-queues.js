class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        // undefined === unintentional non-value
        // null === intentional non-value
        // Linked Lists may also have a tail pointer
    }
    appendToHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail === null) {
          this.tail = newNode;
        }
    }
    appendToTail(data) { // adding to the end is linear (unless you have a tail pointer)
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    removeFromHead() { // removing from the head is constant
        if (this.head === null) {
            return;
        }
        this.head = this.head.next // constant
        
        if (this.head === null) {
          this.tail = null;
        }
    }
    removeFromTail() { // removing from the tail is ALWAYS linear
        if (this.head === null) {
            return;
        }
        
        let curr = this.head;
        let prev = null;
        if (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        
        this.tail = prev;
    }
}

class Stack {
  constructor() {
    this.values = [];
    // ['a', 'b', 'c', 'd']
    // bottom          top
  }
  
  push(data) {
    // adding a value to the top
    // arr.length = new value
//     this.values[this.values.length] = data;
    this.values.push(data)
  }
  
  pop() {
    // removing a value from the top
    // this.values.length--;
    this.values.pop();
  }
  
  peek() {
    // return the top value
    return this.values[this.values.length - 1]
  }
}

let stack = new Stack();
console.log(stack.values);
stack.push('a')
stack.push('b')
stack.push('c')
console.log(stack.values);
console.log(stack.peek()); // c
stack.pop();
console.log(stack.peek()); // b
stack.pop();
console.log(stack.peek()); // a
stack.pop();
console.log(stack.peek()); // undefined

class Queue {
  constructor() {
    // this.values = [];
    this.values = new LinkedList();
  }
  enqueue(data) { // add to the back of the array
    // this.values.push(data);
    this.values.appendToTail(data);
  }
  dequeue() { // remove from the front of the array
    // return this.values.shift();
    this.values.removeFromHead()
  }
}

let q = new Queue();
q.enqueue("Ben");
q.enqueue("Maya");
q.enqueue("Reuben");
console.log(q);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);
