# Unit 4 Lesson 1 Practice Set
## Advanced Function Execution Context

1. In the code below, use `call` to invoke `add` as a method on `bar` but with `foo` as execution context. What will this return?
      ```javascript
      const foo = {
        a: 1,
        b: 2,
      };

      const bar = {
         a: 'abc',
         b: 'def',
         add: function() {
           return this.a + this.b;
         },
      };
      ```

2. What does the `Function.prototype.bind()` method return?

3. What does the following code log to the console?
      ```javascript
      var obj = {
        message: 'JavaScript',
      };

      function foo() {
        console.log(this.message);
      }

      foo.bind(obj);
      ```

4. What will the following code produce and why? 
      ```javascript
      const obj1 = {
        a: 2,
        b: 3,
      };

      const obj2 = {
        a: 20,
        b: 30,
      };

      function foo() {
        return this.a + this.b;
      }

      let bar = foo.bind(obj1);
      console.log(bar());

      console.log(foo.call(obj2));
      ```

5. What will the following code log? Why?
      ```javascript
      const obj = {
        a: 'Amazebulous!',
      };
      const otherObj = {
        a: "That's not a real word!",
      };

      function foo() {
        console.log(this.a);
      }

      let bar = foo.bind(obj);

      bar.call(otherObj);
      ```

6. What does this point to in the code below?

      ```javascript
      function whatIsMyContext() {
        return this;
      }
      ```

7. What does this point to in the code below?
      ```javascript
      function whatIsMyContext() {
        return this;
      }

      whatIsMyContext();
      ```

8. What does this point to in the code below?
      ```javascript
      const obj = {
        count: 2,
        method: function() {
          return this.count;
        },
      };

      obj.method();
      ```
9. What does the following code log? Why?
      ```javascript
      window.a = 1;

      function bar() {
        console.log(this.a);
      }

      const obj = {
        a: 2,
        foo: bar,
      };

      obj.foo();
      ```

10. **Bonus:** We expect the following code to log `34000` but instead we are getting `35000`. What is the bug and how can we fix it?
      ```javascript
      const computer = {
        price: 30000,
        shipping: 2000,
        total: function() {
          var tax = 3000;
          function specialDiscount() {
            if (this.price > 20000) {
              return 1000;
            } else {
              return 0;
            }
          }

          return this.price + this.shipping + tax - specialDiscount();
        }
      };

      console.log(computer.total());
      ```
