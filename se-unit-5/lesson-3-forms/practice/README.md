# Unit 5 Practice: Forms

0. When building web applications, why are forms important? Why do we need to use them?

1. In HTML, write a form for a user sign up page. We should take the users first name, last name, birth year, password, a password confirmation, a short bio, and a submit button.

2. For the form above, what are some of the types of validations that you would want to include on the form inputs using JavaScript?

3. On your form above, write a validation to ensure that the password is at least ten characters, and that the password confirmation matches the password. The validation should only run once the user has blurred each input, and should display an error message to the user if it is not valid.

4. Given the following HTML form, create a web-based calculator. A user should be able to enter two numbers, as well as an operator, and calculate the result of the expression.

```html
<form class="calculator">
  <input type="number" name="first_number" value="">
  <input type="text" name="operator" value="">
  <input type="number" name="second_number" value="">
  <input type="submit" name="calculate" value="Calculate">
</form>

<p id="result"></p>
```

Valid operators should be as follows:

`+`: addition
`-`: subtraction
`*`: multiplication
`/`: division
`^`: exponent

Display the result of the calculation in the paragraph tag. If the user enters an invalid operator, display an error message letting them know to change the operator.

5. Build a simple ToDo-List application. The app will not have persistence - i.e., each time the user refreshes, they will get a blank list. The application should include a form for the user to enter a new todo. Submitting the form should add the list item to an unordered list on the page. See [here](http://expalmer.github.io/todo-list-vanilla-js/) for a basic example.

**BONUS**: Use the Object-Oriented domain model you created in Unit 4 to keep track of the list of ToDos.

**DOUBLE BONUS**: Add the ability for a user to mark a ToDo as completed. Any completed ToDos should display with a strikethrough text through them.
