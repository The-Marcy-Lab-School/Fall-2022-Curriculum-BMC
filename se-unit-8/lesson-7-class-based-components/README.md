# Lesson 8.9: Class Based Components

## Lesson Overview

### Key Terms

- class based components
- constructor function
- component lifecycle methods
- componentDidMount()
- componentWillUpdate()
- setState()

### Essential Questions

- How do class components differ from functional components?
- What are the benefits and tradeoffs of using hooks within functional components rather than class components?

### Learning Assigments

1. Internalize how and why React moved from functional components (pre-hooks) to class components by reading about [State and Lifecycle Methods](https://reactjs.org/docs/state-and-lifecycle.html).

2. Refer to the documentation for [React Components](https://reactjs.org/docs/react-component.html), [constructor functions](https://reactjs.org/docs/react-component.html#constructor), [componentDidMount() lifecycle method](https://reactjs.org/docs/react-component.html#componentdidmount), [componentWillUpdate()](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate), and [setState()](https://reactjs.org/docs/react-component.html#setstate).

### Practice Overview

You will analyze the component structure of a legacy, class-based component during this lesson. Then you will convert that class-based component into a functional component that uses hooks.

### Steps:

1. Setup:

   - `cd lesson-8.9-class-based-components/practice`
   - `npm install`
   - `npm start`
   - open a browser window and navigate to `http://localhost:3000/`

2. Familiarize yourself with the app and file structure. Then open <ClassBasedForm/> within the components directory.

3. Answer the [short answer questions](practice/short-response.md) about class based components before moving on to step 4.

4. Create a new component named "FunctionBasedForm" and place it into the components directory.

5. Replace the imports in <App.js> so that <FunctionBasedForm/> is rendered on localhost rather than <ClassBasedForm/>.

6. Code out the <FunctionBasedForm/> so that it maintains the same functionality as <ClassBasedForm/>, but using functional components and hooks rather than classes.

## Lecture Recording
[05.01.20 Lecture](https://us02web.zoom.us/rec/share/2clRMKriqFhIf8_u6gLPcZZ6IcP-X6a82nNP8vQEzR5-2xGu7vqi7pamL9ciy3Tm)

