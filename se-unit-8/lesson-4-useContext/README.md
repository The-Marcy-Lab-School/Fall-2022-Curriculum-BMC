# Lesson 4: useContext hook

## Lesson Overview

### Key Terms

- component tree
- props
- Context
- createContext()
- useContext()

### Essential Questions

- What is context?
- When should `useContext()` be implemented?
- How do the methods `useContext` and `createContext` relate to one another?

### Learning Assignments

- [Watch this 3 minute video](https://www.youtube.com/watch?v=CI7EYWmRDJE) which provides a visual chart and purpose for the `useContext()` hook.
- [React documentation on Context](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
- [React documentation on `createContext()`](https://reactjs.org/docs/context.html#reactcreatecontext)
- [React documentation on Context Provider](https://reactjs.org/docs/context.html#contextprovider)
- A well-known pitfall in React is access to a global state object. When props needs to get down deep in a nested component tree -- themes, UI styles, or user authorizations -- passing data can become cumbersome. Read the [react documentation on useContext()](https://reactjs.org/docs/hooks-reference.html#usecontext) to learn how this hook helps resolve this challenge.

### Practice Set Up

- cd into `lesson-4-useContext/practice`.
- run the command `npm install`.
- Within the terminal, run the command `npm start`. Open the app in http://localhost:3000/.
- Review the file structure of the application within [`/practice`](practice)
- This app uses `react-router-dom`. React Router provides client-side routing that helps developers build a single-page web application with navigation and without refreshing as the user navigates. That's all you need to know about that for this lesson. You'll learn more about this dependency in upcoming lessons.
- Starter code is provided in `index.js`, `App.js`, and`/utils/user.js`.

### Practice Steps

**Step 1**

- Create a new directory called `context` with a `UserContext.js` module.
- Use the `createContext` documentation to help you create a `UserContext` variable. The initial value of the user context can be set to null.

**Step 2**

- Within `App.js`, render the `UserContext` provider as a parent of the <Route/> components that show _Home_ and _About_ pages. Use the _Context Provider_ documentation to guide you. Make sure you pass the `value` variable created for you on line 8.
- Keep in mind: both the Home page and About pages will need access to the user information (which will be mock "pulled" from the utils file when a user logs in).

**Step 3**

- Within `Home.js`, access the context values returned from the `UserContext` context.
- Render a <div/> with "Home" heading and a welcome message of your choice.
- Beneath the welcome message, conditionally render the users name with a _LOGOUT_ button when user information is available. Otherwise, render a _LOGIN_ button that sets the `userInfo` mock data.

**Step 4**

- Within `About.js`, access the context values returned from the `UserContext` context.
- Conditionally render a <div/> with an "About" heading and a table of the user's information (user id, user name, and email) when user data is present. Otherwise, render a helpful note telling the user to login.

## Lecture Recording
[04.47.20 Lecture Recording](https://us02web.zoom.us/rec/share/-MplIoHv9VtLc5Hp5lP_Za05OaHkeaa80ykf-fFbn81LUhCRRIei831aDe_2NeQ)

