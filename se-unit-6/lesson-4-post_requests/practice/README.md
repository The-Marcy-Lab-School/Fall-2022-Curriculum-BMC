# Practice

## Post Requests & Headers

**Exercise 1:**
Visit the Fake Data API at https://reqres.in/.
Look through the various examples of post requests.Analyze the request bodies and response bodies.
Describe the differences between successful and unsuccessful POST requests.

**Exercise 2:**
Examine the code snippet below.
Reference the for the Fake Data API at https://reqres.in/. Look up the proper way to make a POST request to login.
What are two mistakes that can be found in the below method?
If those mistakes go uncorrected, describe what will happen once `postDataIncorrectly()` is invoked.

```javascript
const postDataIncorrectly = () => {
	fetch('https://reqres.in/api/login', {
		email: 'something@email.com'
	})
		.then(responseData => {
			console.log(responseData);
		})
		.catch(err => {
			console.log(err, err.data);
		});
};
```

**Exercise 3:**
Use the Fake Data API at https://reqres.in/.
Code out a function that creates a new user and uses the fetch API for any HTTP requests.
To check your solution, paste your function to your browser console and invoke it.
Ensure that your function:

1. has a descriptive name
2. logs a helpful message to the console once a new user is created
3. includes error handling
4. can be reused in order to create multiple users.

**Exercise 4:**
The Fake Data API at https://reqres.in/ accepts any data type as an appropriate name or job title.
As an engineer, imagine if you wanted to use this api, but you only wanted to create new users
when names and job titles were in string format.
Code out an improved version of your function from Exercise 4.
This time, also make sure that:

1. strings are the only acceptable data type for names and jobs. (MDN documentation for [`type of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) may be helpful.)
2. an error is thrown when anything other than a string is used as input (MDN document for [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) may be helpful.)

**Exercise 5:**
Use the Fake Data API at https://reqres.in/.
Code out a function that registers a new email address and uses the fetch API for any HTTP requests.
To check your solution, paste your function to your browser console and invoke it.
Ensure that your function:

1. has a descriptive name
2. logs a helpful message to the console once a new email is registered
3. includes error handling
4. can be reused in order to register multiple emails
5. only accepts strings as input
