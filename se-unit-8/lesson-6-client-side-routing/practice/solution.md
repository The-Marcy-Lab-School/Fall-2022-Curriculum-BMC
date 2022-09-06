# Practice Exercises - 8.7 - Client Side Routing

0. What is the difference between server-side and client-side routing? What are some of the tradeoffs?

**Suggested Answer**

- With server-side routing, each request is processed by the server and a new HTML response is sent back. For example, if a user clicks `/dogs` from the home page, they will get an entire new HTML response sent back from the server.
- With client-side routing, a group of requests is all sent the same HTML, CSS, and JS response. The JavaScript code then processes what information should be displayed based on the given URL. For example, after visiting the `/` location, if a client clicks on a link to `/dogs`, they would not necessarily be given an entirely new HTML page. Instead, the JS code would render something different.
- Client-side routing can make for a faster experience by reducing page refreshes. Server side routing can require less setup and be more easily accessed by search engines.

1. Why might you include client-side routing in your JavaScript applications?

**Suggested Answer**

Even though a Single-Page-Application can function just fine without a client-side router, it can make it difficult for users to share things between applications. For example, when searching for a video on YouTube, the page does not need to reload when you click on one of the results. If the URL didn't update, it would be difficult for you to find that video again or share it with friends. Because the URL is such an important part of the web, having proper routing allows us to use web applications in ways we are used to.

2. Write a component called `Link` that takes two props:

  * `to` - a url string (i.e. '/dogs')
  * `text` - the text to display inside of the link

The component should render an `a` tag that, when clicked, updates the page URL without actually refreshing the page or changing the content. For example, when clicking on the link rendered by `<Link to={'/dogs'} />`, the url of the page should change to `/dogs`, but no content would need to change.

**Suggested Answer**
```js
import React from 'react';

const Link = ({to, text}) => {
  const handleClick = (event) => {
    event.preventDefault()
    window.history.pushState({}, null, to)
  }

  return (
    <a href={to}>{text}</a>
  )
}
```

3. Describe the purpose of the following components in React Router: Router, Link, and Route.

**Suggested Answer**

* `Router`: Provides an interface for interacting with the routing application. Since it's declarative, we can configure some properties here via props, then wrap the other components inside of our router.
* `Link`: Used to change the current route. Takes the place of any anchor tags we have have had inside of our components
* `Route`: Can conditionally render a given component based on the current route. Useful to setup what we want to render under different circumstances.

4. Using React Router, create a `ProtectedRoute` component that only renders the passed in component if the user has successfully authenticated.

**Suggested Answer**

In the below example, we import an `isAuthenticated` function to determine if the component should be shown or not. If not, we redirect to the login screen.


```js
import React from 'react'
import {Route, Redirect} from 'react-router'

import isAuthenticated from './myAuthenticationSystem'

const PrivateRoute = ({ component: Component,  ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
```
