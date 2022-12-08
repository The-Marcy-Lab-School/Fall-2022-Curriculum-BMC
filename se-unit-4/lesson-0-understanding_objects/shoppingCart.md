# Understanding Objects

So far, we've been programming separate functions that take some input and convert it to some output. This is a very **function-oriented** programming style.

**Object-Oriented Programming** uses objects to _model_ the world. Every _thing_ in our world has information (data) and behaviors (methods) that we can define to represent that _thing_.

## Key Terms
* encapsulation
* state
* behavior
* data properties
* accessor properties
* method
* enumerable
* private data
* factory functions

## Essential Questions
* What is encapsulation? Why do we use it? How do objects enable it?
* How do objects encapsulate state? How do they encapsulate behavior?
* How do we create _private data_ within JavaScript objects? What is the role of _accessor properties_?
* What are factory functions and why are they useful?


## Shopping Cart - Object Practice

Do the following in a blank JavaScript file.

1. Create an object called `cart` using Object literal syntax (`{}`).
2. Add a `shopper` property to your `cart` object whose value is a string for the name of the shopper.
3. Add an `items` property to your `cart` object whose value is an empty array. This array will hold values of the form: `{ itemName, price }`
4. Add an `addItem` method to your `cart` object. It should accept two arguments: `itemName` and `price`. It should add an object to the `items` array with the form `{ itemName, price }`.
5. Invoke your `cart` obejct's `addItem` method 3 times on your `cart`, adding in the following items:
    * `'Apple'` with a price of `1`
    * `'Banana'` with a price of `0.5`
    * `'Cherry'` with a price of `2.5`
6. Print your `cart` object's `item` array to the console. You should see an array with the three item objects that you just added.
7. Add a `getTotal` method to your `cart` object. It should calculate and return the sum of the prices of all of your cart's items.
8. Invoke your `cart` object's `getTotal` method and print the returned value to the console. If you've been following along, it should return `4`.
9. Add a `removeItem` method. It should accept one argument: `itemName`. It should find the provided item your cart's `items` array and remove it if it is found. 
10. Invoke your `cart` object's `removeItem` method passing in one of your cart's items.
11. Print your `cart` object's `items` array to the console. You should NOT see the removed item.
12. Add a `removeMostExpensiveItem` method. It should find the most expensive item in your cart's `items` array and remove it.
13. Invoke your `cart` object's `removeMostExpensiveItem` method passing in one of your cart's items.
14. Print your `cart` object's `items` array to the console. You should NOT see the removed item.


## Notes
* **Encapsulation** is the idea that data (properties) and behavior (methods) are bundled together. The behavior interacts with the data in a _fixed_ and _predictable_ interface. Some people refer to it as "data hiding" because data is primarily accessible via methods.
  * This `cart` example demonstrates **encapsulation** because the cart's data and the methods that interact with that data are all bundled in one object.
* **State** refers to the current values of the properties in an object. It can also refer more broadly to the current values of the variables in a program.
* A **factory function** is a function that creates an object with a particular set of properties and methods.
  * We can create multiple **instances** of the shopping cart object by invoking the factory function. Each instance will have the same properties and methods.
* Benefits of Factory Functions:
   * I don't have to copy/paste the entire object each time I want to make a new instance. I can just invoke the factory function to make a new instance.
   * If I want to add a new behavior (method) to carts created by the factory, I can add it one place instead of having to add it to each object individually. Same goes for bugs that may be found in methods. I only need to fix the bug in one place.
* The `this` object is a special variable that holds a different object depending on _where_ you reference it. Within object methods, it is the object that the method is being called on.

```js
const obj = {
  getThis() {
    return this;
  }
}

console.log(obj === obj.getThis()); // prints true

console.log(this);
```

* All of this is a process of **abstraction**. We create these objects with data and methods _once_ so that in the future, we can work with the _more abstract_ object's methods to interact with the data inside.