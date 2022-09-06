# Practice Set 4.1 Solutions

1. 
  ```javascript
  bar.add.call(foo); // 3
  ```
  Since we are invoking `call` on `bar.add` and supplying the object `foo` as the explicit context, `foo`'s properties `a` and `b`, rather than `bar`'s, will be referenced during execution, returning a value of `3`.

2. The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.

3. Nothing. Unlike `call` and `apply`, `bind` doesn't invoke the receiver function. Rather, it returns a new function that is permanently bound to the context argument.

4. 
  ```javascript
  5
  50
  ```
  We declare a variable `bar` and assign it a value of the function returned when `foo` is bound to the object `obj1`. Thus, when we call that function (`bar()`), `this` resolves to `obj1`.  On the last line of the program, we define `this` explicitly to be `obj2`. Thus, `this.a` returns `20` and `this.b` returns 30.

5. `Amazebulous!`: Once a function has been bound to an execution context with `bind`, its context can't be changed, even explicitly. Thus, even though we attempt to call `bar` with the explicit context of `otherObj`, `bar` references a bound function and its context cannot be changed.

6. We won't know the context of a function until execution time. Thus, we don't know what the context is here.

7. `window`: **Function calls set the execution context to the global object.**

8. Since we call `method` on object `obj`, `this` is the object `obj`.

9. `2`: Line 12 calls method `foo` with its context set to `obj` since the execution context for any method invocation, the context is the owning object.
