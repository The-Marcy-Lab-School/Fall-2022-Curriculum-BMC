function findBookAbout(searchTerm) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

findBookAbout('cheese')