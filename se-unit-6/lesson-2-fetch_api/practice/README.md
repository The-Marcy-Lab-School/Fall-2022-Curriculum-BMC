# Practice: XHR vs. Fetch, Get Requests, & Promises

## Directions
Respond to written responses directly in this markdown file. Use `practice.js` for coding challenge solutions.

> iTunes API is deprecated...

**1. Which portion of this URL is the query string? What is the purpose of the query string in this particular example?**
  `'https://itunes.apple.com/search?artist=Janelle%20Monáe'`

**2. Reference the code snippet below. Why would an engineer decide to create the higher order function `sendHttpRequest()` and then invoke it within `getData()` and `sendData()`?**

```javascript
const sendHttpRequest = (method, url, data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		/*Read more about the conditional operator below (condtion ? expressionA : expression B) via MDN documenation*/
		headers: data ? { 'Content-Type': 'application/json' } : {}
	}).then(response => {
		if (response.status >= 400) {
			// !response.ok
			return response.json().then(errResData => {
				const error = new Error('Something went wrong!');
				error.data = errResData;
				throw error;
			});
		}
		return response.json();
	});
};

const getData = () => {
	sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
		console.log(responseData);
	});
};

const sendData = () => {
	sendHttpRequest('POST', 'https://reqres.in/api/register', {
		email: 'eve.holt@reqres.in'
		password: 'pistol'
	})
		.then(responseData => {
			console.log(responseData);
		})
		.catch(err => {
			console.log(err, err.data);
		});
};
```

**3. Reference the code snippet in Exercise #2. What is the purpose of conditionally rendering the headers key value within the `fetch` call in the `sendHttpRequest()` function?**

**4. In our `sendHTTPRequest` method above, we check for a `response.status` of 400 in our first callback function. Why do we have to check for this in a `then` method? Why can't we just handle 400 statuses with a `catch` method.**

**5. Reference the Advice Slip API's [Random Advice endpoint](https://api.adviceslip.com/#endpoint-random). Write a function, `getRandomAdvice`, which logs a piece of random advice to the console. Make sure you include error handling. Include helpful messages or labels to clearly distinguish your log statement's response object, data object, and piece of advice or other messages. Be sure to check your solution in the console.**

**6. Reference the Advice Slip API's [Advice by id endpoint](https://api.adviceslip.com/#endpoint-id). Write a function, `getSpecificAdvice`, that logs a piece of specific advice based on the id `100000`. Make sure you include error handling. Include helpful messages or labels to clearly distinguish your log statements response object, data object, and piece of advice or other messages. Look at data the helpful console log messages. Compare and contrast the response object and data object between exercise #4 and this exercise (#5). Briefly explain why the difference exists.**

**7. Refactor your function from exercise 5 and name it `getAdviceById`. This function should:**
	* **accept an any id as a parameter so that the function is reusable**
	* **either log a piece of advice to the console OR log that the id is not found**
	* **follow all other tips from exercise #5 regarding error handling and helpful console logs**

**Extra Practice**
Visit the [google developers fetch api lab](https://developers.google.com/web/ilt/pwa/lab-fetch-api).
Complete the set up in section 1. Code out the necessary methods to successfully fetch a resource
in section 2.
