# Lesson 8.9: Class Based Components

## Short Response Answers

### 1. What is the purpose of the constrctor in the following code snippet from <ClassBasedForm/>:

```javascript
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
```

The constructor for a React component is called before it is mounted. Here, the purpose of the constructor is to 1) initalize the local state for the email and password and 2) bind the handleSubmit event handler method to an instance of the <ClassBasedForm/>.

### 2. Describe the purpose behind passing props to the function calls for `constructor()` and `super()`.

When implementing the constructor for a React Component subclass, developers must call `super(props)` before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs in the app.

### 3. How does `useState()` functionally different from `this.setState()`?

Implementing `useState()` gives developers the option pass values to and access the local state directly. Whereas, `this.setState()` requires that state be accessed and manipulated as key/value pairs on a state object.

### 4. Based on your knowledge of functional programming and object oriented programming, what might some of the benefits be of using functional components with hooks rather than class based components?

_Answers may vary, but can include:_

Functions are more lightweight in JavaScript. Classes carry around extra functionality like methods and properties mostly related to inheritance and the prototype chain. These things are not necessarily needed when using the React library. Also classes don’t really exist in the JavaScript language, they are syntactical sugar to make it easier to set up objects with inheritance.

Functions don’t have the "this" keyword which makes it easier to grasp for some developers.

Functions make use of closures. Benefits of closures is that they are memory efficient. Closures are for example one of the reasons eventhandlers with setTimeOut or debounce will give you the expected result while with classes you have to write extra code for this.

Developers can argue that funtions are written with less code (no this keyword, destructuring parameters)so are cleaner and easier to read/understand.

### 5. Imagine a developer prefers to use class based components in React and not hooks, is this allowable by the React community?

There’s nothing wrong with class components. Everything hooks can do can also be done in a class component. React isn’t getting rid of class components. Functional components (and the hooks that go with them) just give you a different way to organize code. Some developers who prefer functional programming will be able to benefit from hooks.
