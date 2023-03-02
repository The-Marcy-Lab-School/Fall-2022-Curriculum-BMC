# Fetch App Practice

0. What is AJAX? Why is this important for building web applications? Include some examples of web applications which implement AJAX.

## Practice

For the next questions, write your code in the `book-search` directory.

1. Given the existing HTML file, write a function that, when the user submits the search form, logs the value they've typed in the search input to the console.

2. Write a function that takes in a search term and, using the `fetch` API, fetches a list of books from the Google Books API and logs the title of each book to the console. The Google Books API is available via the following URL: https://www.googleapis.com/books/v1/volumes?q=search+term - where `search+term` can be replaced by any search term. You can view the [documentation](https://developers.google.com/books/docs/v1/using) for information on what the response will look like.


3. Write a function called `createBookListItem` that, given an object of book information that looks like this:

```js
{
  title: "How to Give Your Dog a Bath",
  authors: [
  "Michele Dufresne"
  ],
  publishedDate: "2015-01-02"
}
```

Returns a list element that looks as follows:

```html
<li>How to Give Your Dog a Bath<li>
```

4. Write a function `createBookList` that, given an array of books, each with a volumeInfo, returns an unordered list element where each child is a list item containing the title of the book. HINT: Feel free to use your `createBookListItem` function from above.


5. Write a function, `renderBookList`, that given an array of books, actually renders an unordered list into the DOM.


6. Update your code so that, when a user types in a search query and submits the form, we render a list of books based on the search results from the Google Books API.


7. Looking at the code we wrote, what do you like about it? What could make it better?

8. Write an application that allows a user to search for GIFs using the [GiphyAPI](https://developers.giphy.com/docs/api/endpoint#search). Your application should include a form where a user can input a search query. You should then get a list of results from the Giphy API and display one at random to the user.
