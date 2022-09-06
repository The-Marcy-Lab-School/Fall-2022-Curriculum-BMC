# Practice Exercises

1. Given everything you have learned so far, how might we use front-end code in conjunction with our back-end applications? Why might we want to build this way?

**SUGGESTED ANSWER** 

We can now build a web application to represent a User Experience in the web browser, as well as a separate back-end application to represent the data in our database. This can yield us a few advantages:

    * Separation of Concerns - we keep our back-end data logic separate from our view logic. This means that if we want to spin up an iPhone or Andriod application later, it should be easier to do so because we can use the same back-end API.
    * We can add in additional services later on if we need to keep things separated

2. What is the purpose of the Express framework? How does it make our lives easier?

**Suggested Answer** 

Express.js is a popular library to provide an interface to create routes. By giving us a few helpful functions that apply to all web applications, we can spend more time focusing on the things that make our web applications unique. 

3. Build a basic route using a get request.

**Suggested Answer**

Here's one way you might meet these requirements. Note that we're just sending a plain text response here:

```js
const express = require('express);

const app = express();

app.get('/', function(req, res){
  res.send("Hello World!")
})

app.listen(8000)
```

4. Build a basic route responding to a POST request


**Suggested Answer**

Here's one way you might meet these requirements:

```js
const express = require('express');

const app = express();

app.post('/cats', function(req, res){
  res.send("You just posted to the /cats route");
})

app.listen(8000);
```

5. Build a route that returns data from a query string. For example, visiting `/?name=Doug` should respond with "Hello, Doug!"

**Suggested Answer**

Here's one way you might meet these requirements:

```js
const express = require('express');
const app = express();

app.get('/', function(req, res){
  const { name } = req.query;
  res.send(`Hello, ${name}`);
})

app.listen(8000);
```

5. Build a route that returns data from paramers submitted with a form. For example, send a POST request to `/` with the params of `{name: 'Doug'}` should respond with "Hello, Doug!"

**Suggested Answer**

The trick here is to simply update the route from get to POST, and access the `name` via the request body. Remember that form data is sent via the request body, and not part of the query string. 

```js
const express = require('express');
const app = express();

app.post('/', function(req, res){
  const { name } = req.body;
  res.send(`Hello, ${params.name}`);
})

app.listen(8000);
```

6. Build a route that simply redirects to another route.

**Suggested Answer**

Note that when using Express, the `redirect` function handles sending the correct status code for us. 
```js
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Welcome Home!')
})

app.get('/home', function(req, res){
  res.redirect('/');
})

app.listen(8000);
```

7. Build a Caesar Cipher application - your app should respond to a POST request and should function as follows: Return your response as a JSON object with a key of the input and a value of the output.

**Suggested Answer**

Here's one way you might solve it - there are plenty of different ways to implement the Caesar Cipher. Can you make the below solution more efficient? 

```js
const express = require('express');
const app = express();

class CaesarCipher {

  constructor(input){
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    this.input = input;
    this.encoded = this.encode(input);
  }

  encode(input){
    const chars = input.split('');

    const encodedChars = chars.map(char => {
      const { alphabet } = this;
      if(!alphabet.includes(char)){
        return char;
      } else {
        const index = alphabet.indexOf(char);
        const newIndex = (index + 23) % alphabet.length;

        return alphabet[newIndex];
      }
    })

    return encodedChars.join('')
  }
}


app.post('/cipher', function(req, res){
    const { input } = req.body;
    const ciper = new CaesarCipher(input);

    res.send({
        [params]: cipher.encoded;
    })
})

```


