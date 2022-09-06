# Practice Exercises - 8.7 - Client Side Routing

0. What is the difference between server-side and client-side routing? What are some of the tradeoffs?

1. Why might you include client-side routing in your JavaScript applications?

2. Write a component called `Link` that takes two props:

  * `to` - a url string (i.e. '/dogs')
  * `text` - the text to display inside of the link

The component should render an `a` tag that, when clicked, updates the page URL without actually refreshing the page or changing the content. For example, when clicking on the link rendered by `<Link to={'/dogs'} />`, the url of the page should change to `/dogs`, but no content would need to change.

3. Describe the purpose of the following components in React Router: Router, Link, and Route.

4. Using React Router, create a `ProtectedRoute` component that only renders the passed in component if the user has successfully authenticated.
