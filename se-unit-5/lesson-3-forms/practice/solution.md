

0. When building web applications, why are forms important? Why do we need to use them?

**Suggested Answer** To put it simply, forms are the only way to collect information from our users. All web applications use forms in one way or another. If you've ever tweeted a tweet, snapped a snap, or instagram-ed a photo, you've filled out a form.

1. In HTML, write a form for a user sign up page. We should take the users first name, last name, birth year, password, a password confirmation, and a short bio.

**Suggested Answer**

```html
    <form>
      <input type="text" placeholder="First Name" name="first_name" value="">
      <input type="text" placeholder="Last Name" name="last_name" value="">
      <input type="number" placeholder="Birth Year" name="birth_year" value="">
      <input type="password" placeholder="Password" name="password" value="">
      <input type="password" placeholder="Password Confirmation" name="password_confirmation" value="">
      <textarea name="bio" placeholder="Bio" rows="8" cols="80"></textarea>
      <input type="submit" value="Submit">
    </form>
    
    <p id="error"></p>
```

2. For the form above, what are some of the types of validations that you would want to include on the form inputs using JavaScript?

**Suggested Answer** There are many different types of validations you might want to include, but here are a few that probably come to mind.

1. First Name: Presence
2. Last Name: Presence
3. Password: Length, special characters or numbers
4. Password Confirmation: must match password

3. On your form above, write a validation to ensure that the password is at least ten characters, and that the password confirmation matches the password. The validation should only run once the user has blurred each input, and should display an error message to the user if it is not valid.

```javascript
const passwordInput = document.getElementsByName('password')[0]
const passwordConfirmationInput = document.getElementsByName('password_confirmation')[0]
const errorDisplay = document.getElementById('error')

function renderError(error){
  errorDisplay.innerText = error
}

passwordInput.addEventListener('blur', function(e){
  if(e.target.value.length < 10){
    renderError("Password must be at least ten characters")
  }
})

passwordConfirmationInput.addEventListener('blur', function(e){
  if(e.target.value !== passwordInput.value ){
    renderError("Password confirmation does not match password")
  }
})


```

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

**Suggested Answer**

Below is one way you might do this.

```js
const calculator = document.querySelector('form.calculator')
const result = document.getElementById('result')

calculator.addEventListener('submit', function(e){
  e.preventDefault()
  const operator = calculator[1].value
  const number1 = parseInt(calculator[0].value)
  const number2 = parseInt(calculator[2].value)
  let answer;

  switch (operator) {
    case '+':
      answer = number1 + number2
      break;
    case '-':
      answer = number1 - number2
      break;
    case '*':
      answer = number1 * number2
      break;
    case '/':
      answer = number1 / number2
      break;
    default:
      answer = "Not a valid operator. Valid operators are: +, -, *, and /"
  }

  result.innerText = answer

})
```


5. Build a simple ToDo-List application. The app will not have persistence - i.e., each time the user refreshes, they will get a blank list. The application should include a form for the user to enter a new todo. Submitting the form should add the list item to an unordered list on the page. See below for a basic example.

**BONUS**: Use the Object-Oriented domain model you created in Unit 4 to keep track of the list of ToDos.

**DOUBLE BONUS**: Add the ability for a user to mark a ToDo as completed. Any completed ToDos should display with a strikethrough text through them.
