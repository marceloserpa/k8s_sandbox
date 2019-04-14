let app = require('express')();

app.get('/bookstore/v1/books',  (request, response) => {
    const books = [{title: 'The Shining'}];
    response.send(books)
});

app.listen(8080, () => console.log('Starting server'))