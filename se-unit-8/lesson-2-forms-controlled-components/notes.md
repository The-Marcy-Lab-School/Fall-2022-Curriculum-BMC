# Forms

Creating a form using JSX in React is not any different than creating a form using HTML.

How we manage the data produced by that form is where we have two choices: _controlled_ vs. _uncontrolled_ form components.

## Examples:

An **uncontrolled component** is a form element whose value is handled by the DOM. This is most similar to how we would handle a form using vanilla JS and the DOM API

```jsx
const Form = () => {

  const handleSubmit = (e) => {
    const name = e.target.elements[0].value;
    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit} id="name-form">
      <input type="text" placeholder="name">
      <input type="submit" value="Submit">
    </form>
  )
}
```

Here, we define an event handler (`handleSubmit`) for the submit event (`onSubmit`) of our form. In the handler, we use the `e.target.elements` array to get the values of the form's elements.

A **controlled component** is a form element whose value is controlled by React state.

```jsx
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = () => console.log(name);

  return (
    <form onSubmit={handleSubmit} id="name-form">
      <input onChange={handleChange} type="text" placeholder="name">
      <input type="submit" value="Submit">
    </form>
  )
}
```

## Comparing Controlled and Uncontrolled Form Components

| Controlled Forms                                                                                                                           | Uncontrolled Forms                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| You have **full control over the state of the form**, which means you **can easily manipulate and validate the data** entered by the user. | Uncontrolled components are **simple to set up**, as they do not require any state management.                                                       |
| The **data is easy to pass between components** since it's stored in state.                                                                | Uncontrolled components **can be faster** than controlled components, especially for large forms, as **they do not require frequent state updates**. |
| You **can prevent invalid data from being submitted** to the server by checking the data in the state before submitting it.                |
