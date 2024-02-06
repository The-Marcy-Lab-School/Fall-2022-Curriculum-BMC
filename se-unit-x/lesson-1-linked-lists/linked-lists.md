# Linked Lists

**Essential Questions**
* What is an _abstract data type_?
* What are the tradeoffs between linked lists and arrays?
* What are the tradeoffs between singly linked lists and doubly linked lists?
* What are the run times for insertion, deletion, and accessing from linked lists?

**Key Terms**
* Abstract data type
* Node
* Singly linked list
* Doubly linked list
* Random access
* Sequential access

## Abstract Data Types

An **abstract data type (ADT)** is a general description about a data type: how it stores data and what operations can be performed on/with it. Abstract data types may be implemented differently in different programming languages but they will all have the same high-level behavior.

<img src="./img/abstract-numbers.png">

For example, an integer is an abstract data type. 
* **How they store data**: integers represent a single numerical value in the range `...`, `-2`, `-1`, `0`, `1`, `2`, `...`. 
* **Operations that can be performed**: integers can be added together, subtracted, multiplied, and divided. 
* **Implementations may vary**: In Java, integers are their own data type, separate from floats (numbers that have decimal points). In JavaScript, integers and floats are all considered the same data type.

<img src="./img/abstract-cars.png">

In the real world, the idea of a car is similar to an abstract data type. All cars have doors, wheels, and an engine and with my driver's license, I can operate pretty much any kind of car. However, each manufacturer has a different approach to creating their cars and, under the hood (literally), they may look very different.

**Q: What are some other real world analogies of abstract data types?**

The abstract data types we will be learning in Unit X are:
* Nodes
* Singly Linked Lists
* Doubly Linked Lists
* Stacks
* Queues
* Hash Maps
* Trees

> We wont cover **graphs** but those are another ADT you'll likely encounter on the internet!

## Nodes

A node is an abstract data type that represents a **single piece of information within a larger data structure**. 

Nodes often have one or more "pointers" to other nodes in the structure.

**Q: Consider the abstract data structures below. What do the nodes in each structure point to?**

#### Linked Lists

<img src="./img/linked-list.png">

#### Doubly Linked Lists

<img src="./img/doubly-linked-list.png">

#### Trees
<img src="./img/tree.jpeg">


## Making a Node Class for Linked Lists

Nodes themselves typically do not have any methods.

The simplest kind of node is the one used in a linked list. It holds its own data and a pointer to the `next` node in the list.

<img src="./img/linked-list.png">

```js
// depending on how the node is used, it may have a next, prev, parent, or children, property
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const nodeA = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("C");

nodeA.next = nodeB;
nodeB.next = nodeC;

console.log(nodeA, nodeB, nodeC); // What do you expect to see?
```

**Q: What is the head of the linked list? What is the tail**?

## Making a Linked List Class

<img src="./img/linked-list.png">

The linked list itself holds only a reference to a `head` node and various methods for modifying or "traversing" the list. 

```js
class LinkedList {
    constructor() {
        this.head = null;
    }
    
    appendToTail(data) {}
    prependToHead(data) {}
    removeFromHead() {}
    removeFromTail() {}
    contains() {}
}
```

> "Traversing" is a fancy word for "visiting the nodes in a particular order" in a data structure.

**Q: What is the way/what are the ways that we can traverse a linked list?**

Some linked lists may also implement:
* adding a new node in the middle
* removing a node from the middle

**Let's visualize: https://visualgo.net/en/list**

## Algorithm: Prepend to head

* Inputs: data to add
* Output: the new `head` of the linked list
* Behavior: the new node should be the new `head` of the linked list and it should point to the previous `head` of the linked list 

```js
const list = new LinkedList();
list.prependToHead('a')
list.prependToHead('b')
list.prependToHead('c')
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
// Node { data: 'c', next: Node }
// Node { data: 'b', next: Node }
// Node { data: 'a', next: null }
```

<details><summary>Solution</summary>

```js
class LinkList {
    constructor() {
        this.head = null;
    }
    prependToHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}
```

1. The new node is going at the beginning of the list. So it's `next` pointer should point to the existing `head` of the list. 
2. Then, the list's `head` pointer should now point at the new node.
3. Test:
    - Adding to a list with multiple nodes
    - Adding to an empty list
    - Adding to a list with one value

</details>

## Algorithm: Append to tail

* Inputs: data to add
* Output: the `head` of the linked list
* Behavior: the previous tail node's `next` property should point to the new node.

```js
const list = new LinkedList();
list.appendToTail('a')
list.appendToTail('b')
list.appendToTail('c')
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
// Node { data: 'a', next: Node }
// Node { data: 'b', next: Node }
// Node { data: 'c', next: null }
```

<details><summary>Solution</summary>

```js
class LinkList {
    constructor() {
        this.head = null;
    }
    prependToHead(data) { /* ... */ }
    
    appendToTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } 
        else {
            let currNode = this.head;
            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
    }
}
```

1. To put the new node at the end of the list, we need to first get to the end of the list, starting at the list's `head`. We'll use a `currNode` variable to keep track of where we are in the list.
2. Using a `while` loop, we iterate as long as the `currNode` has a `next` node to move to.
3. We'll reach the tail node once `currNode` has no `next` node. At this point, we set the `currNode` (which is the tail) to point to the new node.
3. Test:
    - Adding to a list with multiple nodes
    - Adding to an empty list
    - Adding to a list with one node

</details>

## Algorithm: isCyclic

This is not a method of linked lists but a method whose _input_ is the head of a linked list. It should return `true` if the linked list contains a cycle, `false` otherwise.

```js
const list = new LinkedList();

const nodeA = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");

list.head = nodeA;

nodeA.next = nodeB;
nodeB.next = nodeC;

isCyclic(list.head); // false

nodeC.next = nodeA; // a cycle!

isCyclic(list.head); // true
```

<details><summary>Solution</summary>

```js
function isCyclic(headNode) {

    let nodesEncountered = []; // track nodes we've seen
    
    let currentNode = headNode; // track the current node in our traversal
    
    while(currentNode) { // eventually it will be null
        
        // if we've encountered it before...
        if (nodesEncountered.includes(currentNode)) {
            return true; // we found a cycle!
        } 
        
        // otherwise...
        nodesEncountered.push(currentNode); // add it to the encountered list
        currentNode = currentNode.next; // traverse to the next node
    }
    
    return false;
}
```

</details>
