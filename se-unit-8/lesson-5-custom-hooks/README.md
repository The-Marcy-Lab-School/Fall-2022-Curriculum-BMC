# Lesson 8.5 useMemo, useCallback, Custom Hooks

## Outline

### Key Terms

- useMemo()
- useCallback()
- custom hooks

### Essential Questions

- What is the impact of implementing hooks such as `useMemo()` or `useCallback()`
- What are the rules of writing custom hooks?

### Learning Assignments

- [React documentation useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
- [React documentation useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [React documentation on custom hooks](https://reactjs.org/docs/hooks-custom.html)

### Practice Set Up

- `cd lesson-7.5-custom-hooks/practice`
- `yarn install`
- `yarn start`
- Read through the source code
- Open the browser and navigate to http://localhost:3000/
- Open you the developer console.
- Set up is complete when you notice the console.log statement "CHILD RE-RENDER" each time you click the \*_ADD_ button

### Practice Background

When the button is clicked on the parent component <App/>, then the child component <ChildComponent/> is re-rendered by default even if no props are passed. This practice exercise is meant to demonstrate how `useMemo()` and `useCallback()` can help optimize React applications.

### Practice Instructions

- Answer the short answer questions here in the README.md.
- Follow the instructions to update the code base in <App/>, <ChildComponent/> and <DocumentTitle/>.

### Practice PART ONE: useMemo() - Practice Steps & Short Answer

I. Within `src/App.js`:

- create a string title for the child component. Pass that title prop to the `<ChildComponent/>`
- create an array with three random string values. Pass that array to the <ChildComponent/> as a prop with the variable name `array`.

II. Within `src/components/ChidComponent.js`

- render the props that have been passed down from <App.js/>

III. Go to your browser, refresh, and observe the developer console.

##### SHORT ANSWER 1: What causes the `<ChildComponent/>` to re-render each time the _ADD_ button is clicked?

##### SHORT ANSWER 2: How could `useMemo()` optimize a web application?

III. Within `src/App.js`:

- Refer to the documentation for `useMemo()`. Refactor the `array` variable so that the static value is memoized.
- Refresh your browser and observe the developer console.

##### SHORT ANSWER 3: How did `useMemo()` affect this web application?

### Practice PART TWO: useCallback() - Practice Steps & Short Answer

I. Within `src/App.js`:

- Now your app will fetch data. Checkout the [JSON PlaceHolder API](https://jsonplaceholder.typicode.com/)Use the example in the documentation to fetch some dummy **todos** data type for the <App/>
- The function should be called `fetchData` and take an argument of `type`.
- Implement this function using the [`useEffect()`](https://reactjs.org/docs/hooks-effect.html) hook.

II. Within `src/components/ChidComponent.js`

- Pass the `fetchData` function to the <ChildComponent.js>
- Fetch some dummy **users** data type for the <App/>
- Implement this function using the [`useEffect()`](https://reactjs.org/docs/hooks-effect.html) hook.
- Go to your browser, refresh, and observe the developer console.

##### SHORT ANSWER 4: Describe what you notice in the developer console. Share your opinion on whether this is good or bad for the web application?

III. Return to `src/App.js`:

##### SHORT ANSWER 5: How could `useCallback()` optimize a web application?

- Refer to the documentation for `useCallback()`. Refactor `fetchData` in order to create memoized version of this callback.
- Refresh your browser and observe the developer console.

### Practice PART THREE: custom hooks - Practice Steps & Short Answer

I. Within `src/App.js`:

- Look over the code for the <DocumentTitle/> component. Then render the <DocumentTitle/> component under the <ChildComponent/>. Be sure to verify that <DocumentTitle/> is exported correctly from its module and imported into App.js correctly.
  -Refresh your browser and observe that the Document Title input field does not update when you change it.

II. Within `src/components/DocumentTitle.js`:

- create a custom hook called `useDocumentTitle()` and invoke it by passing in the input `value`.
- the custom hook must update your document title on the browser tab.

## Lecture Recording
[04.29.20 Lecture](https://us02web.zoom.us/rec/share/9edpN5vu6GBOc9KR9mvhGfA4BInZeaa82iRNrKJZnUv4MnHcaTy3JPp2R14wd-Mt)
