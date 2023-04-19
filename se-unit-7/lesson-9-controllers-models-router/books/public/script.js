const main = async () => {
  const url = '/books';
  const booksUl = document.querySelector('#books');
  const newBookForm = document.querySelector('#new-book-form');
  const newBookInput = document.querySelector('#new-book-input');
  const publishYearInput = document.querySelector('#publish-year-input');

  const getBooks = async () => {
    const books = await fetch(url).then((r) => r.json()).catch((e) => alert.error(e));
    booksUl.innerHTML = '';
    console.log(books);
    books.forEach((book) => {
      const { title, id, published_year } = book;
      const li = document.createElement('li');
      li.innerText = `${title} - ${published_year}`;
      booksUl.append(li);
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = { 
      title: newBookInput.value, 
      publishYear: publishYearInput.value 
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(url, options);
    e.target.reset();

    getBooks();

    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  newBookForm.addEventListener('submit', handleFormSubmit);
  getBooks();
};

main();
