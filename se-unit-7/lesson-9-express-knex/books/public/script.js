const getOptionsWithBody = (method, body) => {
  return {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  }
};

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
    books.forEach(book => {
      booksUl.append(createBookListItem(book));
    });
  };

  const createBookListItem = (book) => {
    const { title, id, published_year } = book;

    const li = document.createElement('li');
    const p = document.createElement('p');
    const titleSpan = document.createElement('span');
    const yearSpan = document.createElement('span');
    const editTitleInput = document.createElement('input');
    const button = document.createElement('button');

    p.append(titleSpan, editTitleInput, yearSpan);  
    li.append(p, button);
    
    titleSpan.innerText = `${title} `;
    yearSpan.innerText = `(${published_year})`;
    editTitleInput.className = 'title-update-input';
    editTitleInput.style.display = 'none';
    button.innerText = 'X';

    editTitleInput.addEventListener('focusout', async () => {
      const newTitle = editTitleInput.value
      const options = getOptionsWithBody('PATCH', { title: newTitle });
      const response = await fetch(`${url}/${id}`, options);

      if (response.ok) titleSpan.innerText = newTitle;  // update the UI if the response was ok
      titleSpan.style.display = 'initial';              // toggle in the titleSpan
      editTitleInput.style.display = 'none';            // toggle out the input element
    });

    titleSpan.addEventListener('click', () => {
      titleSpan.style.display = 'none';             // toggle out the titleSpan
      editTitleInput.value = titleSpan.innerText;   // set the text of the input element to match the titleSpan
      editTitleInput.style.display = 'initial';     // toggle in the input element
      editTitleInput.focus();                       // focus the input element
    });

    button.addEventListener('click', async (e) => {
      const options = getOptionsWithBody('DELETE');
      const response = await fetch(`${url}/${id}`, options);
      if (response.status === 204) li.remove();
    });

    return li;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const options = getOptionsWithBody('POST', { 
      title: newBookInput.value, 
      publishYear: publishYearInput.value
    });
    const response = await fetch(url, options);
    if (response.status !== 201) return alert("error, please try again");

    const book = await response.json();
    booksUl.append(createBookListItem(book));

    e.target.reset();
  }
  
  newBookForm.addEventListener('submit', handleFormSubmit);
  getBooks();
};

main();
