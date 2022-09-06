# Unit 2 - Lesson 4: Variable Scope

## Key Terms
* scope
* global scope
* local scope
* block scope
* function scope
* lexical scope
* lexical environment
* author time
* run time

## Essential Questions
* How do variables declared with `var`, `let`, and `const` differ?
* Why wouldn't we simply declare all of our variables in the global scope?
* How are function parameters scoped?
* How does JavaScript reconcile variables declared with the same name in different scopes?

## Learning Assignments
1. Article: [Hoisting in Modern JavaScript](https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda)
    
    **Purpose**: To develop a better understanding of _how_ hoisting works under the hood. After this article, you will have a more sound mental model for how hoisting works for variables declared with `let`/`const` vs. those declared with `var`.

    **Note**: Stop at _Hoisting Class Declaration_ section.

2. Article: [Understanding Scope and Scope Chain in JavaScript](https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53)

    **Purpose**: This reading builds off the previous. It shows you _how_ JavaScript uses the concept of a _lexical environment_ to access variables in the scope chain.

3. Book: You Don't Know JavaScript: [Ch. 3 - Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md)

    **Purpose**: This reading gets into the _why_ of scoping. It introduces the concepts of "Least Authority" and "The Principle of Least Privilege" to explain the benefits of defining variables within a local scope. It also shows the round-about ways that developers would do this before the introduction of  block scopes in ES6, thus illustrating the benefits of the additions of `let` and `const` to the language.

    **Note**: This is dense. You won't feel like you've fully grasped this entire chapter. That's okay. I'm concerned with the themes in this reading, not the details.

4. Tutorial: [var, let and const - What, why and how - ES6 JavaScript Features](https://www.youtube.com/watch?v=sjyJBL5fkp8)

    **Purpose**: This is a 20 minute video that recaps a lot of the key concepts in the reading. The presenter is clear and the code-along is illustrative. The only new concept that this video introduces is _strict mode_. Otherwise, this is here as a resource for the folks who enjoy a good video tutorial.

