# Solutions

## Post Requests and Headers

1.

The response header is displayed before the request headers within the network tab. A response header is an HTTP header that can be used in an HTTP response. This header doesn't relate to the content of the message. Response headers often give more detailed context of the response.

The request headers can be used in an HTTP request and also do not relate to the content of the message. These headers help the server give back a specific response.

    _Response Header Example_
    alt-svc: quic=":443"; ma=2592000; v="46,43",h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,
    cache-control: no-cache, no-store, max-age=0, must-revalidate
    content-disposition: attachment; filename="response.bin"; filename\*=UTF-8''response.bin
    content-encoding: gzip
    content-type: application/json; charset=utf-8
    date: Mon, 20 Jan 2020 12:00:17 GMT

    _Request Header Example_
    :authority: accounts.google.com
    :method: POST
    :path: /\_/common/diagnostics/?hl=en&\_reqid=2418&rt=j
    :scheme: https
    accept: _/_
    accept-encoding: gzip, deflate, br
    accept-language: en-US,en;q=0.9
    cache-control: no-cache
    content-length: 611
    content-type: application/x-www-form-urlencoded;charset=UTF-8

2.

The successful POST requests will often return a response object with tokens or a new entry's id and they also have a status code of 200. The unsuccessful POST requests will contain a response object with an error message and an error status code of 400.

3.

The function `postDataIncorrectly()` makes the mistake of not passing POST as the argument to `fetch()` method. The `postDataInorrectly()` method also has the incorrect body sent within the request. To login, the method would also need to pass the password data.

Without corrrecting these two mistakes, `postDataIncorrectly()`, this API will send back a generic 400 error along with a response object that includes an error key with a message.

4.

```javascript
const createAUser = (firstName, jobTitle) => {
	fetch('https://reqres.in/api/users', {
		method: 'POST',
		body: {
			name: firstName,
			job: jobTitle
		}
	})
		.then(response => {
			console.log('Here is the response:', response);
			if (!response.ok) {
				/*or `if(response.status >= 400)`*/
				console.log(
					`Status code ${response.status} was returned. A user could not be created. Try again`
				);
			} else {
				console.log(`The user named *${firstName}* was created successfully!`);
			}
		})
		.catch(error => {
			console.error(`There was an error when creating a new user: ${error}`);
		});
};
```

5.

```javascript
const createAUser = (firstName, jobTitle) => {
	if (typeof firstName != 'string' || typeof jobTitle != 'string') {
		throw new Error(
			'Sorry about that! First names and job titles must be in the string format. Please try again'
		);
	}
	fetch('https://reqres.in/api/users', {
		method: 'POST',
		body: {
			name: firstName,
			job: jobTitle
		}
	})
		.then(response => {
			console.log('Here is the response:', response);
			if (!response.ok) {
				/*or `if(response.status >= 400)`*/
				console.log(
					`Status code ${response.status} was returned. A user could not be created. Try again`
				);
			} else {
				console.log(`The user named *${firstName}* was created successfully!`);
			}
		})
		.catch(error => {
			console.error(`There was an error when creating a new user: ${error}`);
		});
};
```

6.

```javascript
const registerAnEmail = (userEmail, userPassword) => {
	if (typeof userEmail != 'string' || typeof userPassword != 'string') {
		throw new Error(
			'Sorry about that! Emails and passwords must be in the string format. Please try again'
		);
	}
	fetch('https://reqres.in/api/register', {
		method: 'POST',
		body: {
			email: userEmail,
			password: userPassword
		}
	})
		.then(response => {
			console.log('Here is the response:', response);
			if (!response.ok) {
				/*or `if(response.status >= 400)`*/
				console.log(
					`Status code ${response.status} was returned. That email could not be registered. Try again`
				);
			} else {
				console.log(`The email named *${userEmail}* was created successfully!`);
			}
		})
		.catch(error => {
			console.error(`There was an error when creating a new user: ${error}`);
		});
};
```

7.

See the answers for [6. Using POST requests](https://developers.google.com/web/ilt/pwa/lab-fetch-api) within the Google developer lab.
