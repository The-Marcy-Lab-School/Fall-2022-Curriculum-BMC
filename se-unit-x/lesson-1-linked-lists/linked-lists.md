# Linked Lists

** Essential Questions**
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

An **abstract data type (ADT)** is a general description about a data type: how it stores data and what operations can be performed on/with it. Abstract data types may be implemented differently in different programming languages but they will all have the same high-level interface.

For example, an integer is an abstract data type. 
* **How they store data**: integers represent a single numerical value in the range `...`, -2`, `-1`, `0`, `1`, `2`, `...`. 
* **Operations that can be performed**: integers can be added together, subtracted, multiplied, and divided. 
* **Implementations may vary**: In Java, integers are their own data type, separate from floats (numbers that have decimal points). In JavaScript, integers and floats are all considered the same data type.

The abstract data types we will be learning in Unit X are:
* Nodes
* Singly Linked Lists
* Doubly Linked Lists
* Stacks
* Queues
* Hash Maps
* Trees

> We wont cover graphs but those are another ADT you'll likely encounter on the internet!

## Nodes

A node is an abstract data type that represents a single piece of information within a larger data structure. They also have one or more "pointers" to other nodes in the structure.

<img src="./img/linked-list.png">
<img src="./img/doubly-linked-list.png">
<img src="./img/tree.png">

Nodes themselves typically do not have any methods.

```js
// depending on how the node is used, it may have a next, prev, parent, or children, property
class Node {
    constructor(data) {
        this.data = data;
    }
}
```

## Linked List

A linked list is the first abstract data type that uses nodes to hold its data in a sequential order.

Each node has a `next` property (in addition to its `data` property) that points to the next node in the linked list.

<img src="./img/linked-list.png">

The linked list itself holds only a reference to a `head` node. To access the rest of the nodes, we traverse the `next` properties until we reach the node we're looking for.

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

**Let's visualize: https://visualgo.net/en/list**

Common operations with linked lists include:
* adding a new node to the head (prepend)
* adding a new node to the tail (append)
* removing a node from the head
* removing a node from the tail
* checking if the linked list contains a value

Some linked lists may also implement:
* adding a new node in the middle
* removing a node from the middle


## Append to tail