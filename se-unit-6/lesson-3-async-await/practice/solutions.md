# Fetch App Practice Solutions

## Practice

For the next questions, write your code in the `book-search` directory.

1. Given the existing HTML file, write a function that, when the user submits the search form, logs the value they've typed in the search input to the console.

**Suggested Answer** Here's one way you might solve it.

```js
document.addEventListener('DOMContentLoaded', function(e){
  const form = document.getElementById("book-search")
  form.addEventListener('submit', handleSearch)
})

function handleSearch(e){
  e.preventDefault();
  console.log(e.target[0].value)
  e.target.reset()
}
```

You could also solve this in an object-oriented fashion by creating a class to represent our BookSearch function:

```js
class BookSearch {
  constructor(){
    this.form = document.getElementById("book-search")
    this.search = this.form[0]
    this.addSearchListener()
  }

  addSearchListener(){
    this.form.addEventListener('submit', this.handleSearch.bind(this))
  }

  handleSearch(e){
    e.preventDefault();
    console.log(this.search.value)
    this.search.value = ''
  }
}

document.addEventListener('DOMContentLoaded', () => new BookSearch() )
```


2. Write a function that takes in a search term and, using the `fetch` API, fetches a list of books from the Google Books API and logs the title of each book to the console. The Google Books API is available via the following URL: https://www.googleapis.com/books/v1/volumes?q=search+term - where `search+term` can be replaced by any search term. You can view the [documentation](https://developers.google.com/books/docs/v1/using) for information on what the response will look like.

**Suggested Answer**: Here's one way you might do this.

```js
function fetchBooks(query){
  const url = 'https://www.googleapis.com/books/v1/volumes?q='

  fetch(url + query)
    .then(res => res.json())
    .then(data => {
      data.items.forEach(item => console.log(item.volumeInfo.title))
    })
}

```

This function could also be added as a method to our class above.

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

**Suggested Answer**

```js

function createBookListItem(volumeInfo){
  const li = document.createElement('li')
  li.innerText = volumeInfo.title
  return li
}
```

4. Write a function `createBookList` that, given an array of books, each with a volumeInfo, returns an unordered list element where each child is a list item containing the title of the book. HINT: Feel free to use your `createBookListItem` function from above.

**Suggested Answer**

```js
function createBookList(books){
  const bookList = document.createElement('ul')
  books.forEach(book => {
    const listItem = createBookListItem(book.volumeInfo);
    bookList.append(listItem)
  })

  return bookList
}
```

5. Write a function, `renderBookList`, that given an array of books, actually renders that unordered list into the DOM.

**Suggested Answer**

```js
function renderBookList(books){
  results.append(createBookList(books))
}
```

6. Update your code so that, when a user types in a search query and submits the form, we render a list of books based on the search results from the Google Books API.

**Suggested Answer**

```js

document.addEventListener('DOMContentLoaded', function(e){
  const form = document.getElementById("book-search")
  form.addEventListener('submit', handleSearch)
})

function handleSearch(e){
  e.preventDefault();
  fetchBooks(e.target[0].value)
  e.target.reset()
}

function fetchBooks(query){
  const url = 'https://www.googleapis.com/books/v1/volumes?q='

  fetch(url + query)
    .then(res => res.json())
    .then(data => {
      renderBookList(data.items)
    })
}

function createBookListItem(volumeInfo){
  const li = document.createElement('li')
  li.innerText = volumeInfo.title
  return li
}

function createBookList(books){
  const bookList = document.createElement('ul')
  books.forEach(book => {
    const listItem = createBookListItem(book.volumeInfo);
    bookList.append(listItem)
  })

  return bookList
}

function renderBookList(books){
  results.append(createBookList(books))
}
```

8. Write an application that allows a user to search for GIFs using the [GiphyAPI](https://developers.giphy.com/docs/api/endpoint#search). Your application should include a form where a user can input a search query. You should then get a list of results from the Giphy API and display one at random to the user.
