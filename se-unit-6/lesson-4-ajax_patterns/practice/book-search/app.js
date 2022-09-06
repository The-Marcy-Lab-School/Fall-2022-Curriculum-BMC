function fetchBooks(query){
  const url = 'https://www.googleapis.com/books/v1/volumes?q='

  return fetch(url + query)
    .then(res => res.json())
    .then(data => data.items )
}

function createBookList(books){
  const bookList = document.createElement('ul')

  function createBookListItem(volumeInfo){
    const li = document.createElement('li')
    li.innerText = volumeInfo.title
    return li
  }

  books.forEach(book => {
    const listItem = createBookListItem(book.volumeInfo);
    bookList.append(listItem)
  })

  return bookList;
}


function bookSearchController(){
  const form = document.getElementById("book-search")
  const search = form[0]
  const results = document.getElementById('results')

  function renderBookList(books){
    results.append(createBookList(books))
  }

  function handleSearch(e){
    e.preventDefault();
    fetchBooks(search.value).then(books => renderBookList(books))
  }

  form.addEventListener('submit', handleSearch)
}



document.addEventListener('DOMContentLoaded', bookSearchController)
