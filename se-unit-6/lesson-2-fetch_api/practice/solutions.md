# Solutions

## XHR vs. Fetch, Get Requests, & Promises

**Exercise 1.** The query string is _Janelle Monae_. In this case, the server will get this request and run a program that passes the query string as parameters of artists. The question mark is used as a separator and the %20 is the URL encoded version of a space.

**Exercise 2:**
The `sendHttpRequest()` function helps reduce code duplication. In other words, using this higher order functions helps to keep the code DRY (don't repeat yourself). Without this higher order function, both the `getData()` and `sendData` would need individually parse the value of the response and individually implement error error handling. Even though the code snippet is a relatively small, using the principle of DRY through the higher order component can help code bases remain maintainable and limit bugs.

**Exercise 3.** 
The purpose of the header 'Content-Type': 'application/json', is to indicate to a program that the media type of the resource being sent by the http request is in the format of json data. These headers are conditionally rendered within `sendHttpRequest()` because the get request within `getData()` does not send along any data with the GET Request. Therefore, there is no requirement to send
along specific headers.

**Exercise 4.** 
Some consider this a downside of the Fetch API. The Promise returned from `fetch` won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing. 

**Exercise 5.**
```javascript
/*Sample Solution*/
const getRandomAdvice = () => {
	return fetch('https://api.adviceslip.com/advice')
		.then(response => {
			console.log('This is the response object:', response);
			return response.json();
		})
		.then(data => {
			console.log('Here is the response data:', data)
			console.log('This is a piece of advice:', data.slip.advice)
		})
		.catch(error => console.log(`There is an error: ${error}`));
};

/*Sample Response from the Browser Console*/
{
	type: "basic"
	url: "https://api.adviceslip.com/advice"
	redirected: false
	status: 200
	ok: true
	statusText: "OK"
	headers: Headers {}
	body: (...)
	bodyUsed: true
	__proto__: Response
}
```

**Exercise 5.**
```javascript
/*Sample Solution*/
const getSpecificAdvice = () => {
	return fetch('https://api.adviceslip.com/advice/1000')
		.then(response => {
			console.log('This is the response object', response);
			return response.json();
		})
		.then(data => {
			console.log('Here is the response data:', data)
			console.log('This is a piece of advice:', data.slip.advice)
		})
		.catch(error => console.log(`There is an error: ${error}`));
};

/*Sample Response from the Browser Console*/
{
	type: "basic"
	url: "https://api.adviceslip.com/advice/1000"
	redirected: false
	status: 200
	ok: true
	statusText: "OK"
	headers: Headers {}
	body: ReadableStream
	bodyUsed: true
	__proto__: Response
}
```
Short Answer Potential Response:
For both exercises #4 and #5, a response with status code 200 was indeed returned from both endpoints.
However, this specific id of 1000 does not exist. So, the data object from the "advice by id" endpoint
includes an error message object instead of a advice slip object. When the function attempts to log
the advice to the console, undefined is returned in exercise #5 because there is no advice object.

**Exercise 7:**
```javascript
const getAdviceById = id => {
	return fetch(`https://api.adviceslip.com/advice/${id}`)
		.then(response => {
			console.log('the response:', response);
			return response.json();
		})
		.then(data => {
			console.log('Here is the response data:', data);
			if (data['slip']) {
				console.log('Here is a piece of advice:', data.slip.advice);
			} else if (data['message']) {
				console.log('There was an error with that request:', data.message.text);
			}
		})
		.catch(error => console.log(`There is an error: ${error}`));
};
```

**Extra Practice:**. See the answers for [2. Fetching a resource](https://developers.google.com/web/ilt/pwa/lab-fetch-api) within the Google developer lab.
