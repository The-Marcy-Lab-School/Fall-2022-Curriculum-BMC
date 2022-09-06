## Lesson 3 - Practice

0. In your own words, what is the purpose of middleware in web applications? Why is it useful?

**Suggested Answer** In web applications, middleware allows different parts of the application to get access to a request and response object in different ways. This allows for easy filtering or common behavior to be abstracted between modules. This allows us to focus on writing code unique to our application while importing modules or writing small middleware pieces that can be used across applications.

1. Write a custom middleware function for an express application that tracks how many times a page has been viewed and logs that count to the console.

**Suggested Answer** Here's one way you might solve it.

```js
const app = express()

const trackPageViews = () => {
  const views = {}
  return (req, res, next) => {
    const path = req.path;
    if(views[path] === undefined){
      views[path] = 1
    } else {
      views[path] += 1
    }
    console.log(`The page ${path} has been viewed ${views[path]} times`)
    next()
  }
}

app.use(trackPageViews())
app.get('/', (req, res) => {
  res.send("Hello World!");
});
```

Another approach would be to use an ES6 class with the view object as a property and the middleware method that could run each time.

2. How do templates fit into web applications? Why are they useful?

**Suggested Answer** Templates allow us to create rich experiences based on different data. We can use code to generate HTML that our visitors will see. For example, YouTube can dynamically render the same template for each video that is on their page.

3. Choose your favorite dynamic web app (i.e. Facebook, Youtube, Soundcloud) and visit your home page. What do you think the template might look like that renders that view? What pieces of data are stored that relate to your profile?  

4. Write a route that renders the current time dynamically using a template.

**Suggested Answer**

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Current Time</title>
  </head>
  <body>
    <h1><%= time %></h1>
  </body>
</html>
```

```js
const express = require('express')
const app = express()
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  const time = new Date();
  res.render('index', {time})
})

app.listen(3000)


```
