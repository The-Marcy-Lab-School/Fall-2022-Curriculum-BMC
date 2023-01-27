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

