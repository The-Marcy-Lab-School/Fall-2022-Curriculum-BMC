// remove first element from array - linear:
// const arr = ['a' , 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
  
// }
// arr.length --;
// console.log(arr);

// adding to the end of an array is constant
// arr[arr.length] = 'f';
// console.log(arr);



// depending on how the node is used, it may have a next, prev, parent, or children, property
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        // Linked Lists may also have a tail pointer
    }
    appendToHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    appendToTail(data) { // adding to the end is linear (unless you have a tail pointer)
        debugger;
        const newNode = new Node(data);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next
            }
            
            curr.next = newNode;
        }
    }
    removeFromHead() { // removing from the head is constant
        if (this.head == null) {
            return;
        }
        this.head = this.head.next // constant
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
    }
}

const newList = new LinkedList();
newList.appendToTail("a")
newList.appendToTail("b")
newList.appendToTail("c")


// const nodeA = new Node("a");
// const nodeB = new Node("b");
// const nodeC = new Node("C");

// nodeA.next = nodeB;
// nodeB.next = nodeC;

// console.log(nodeA)
// console.log(nodeB)
// console.log(nodeC);