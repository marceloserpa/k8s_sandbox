let app = require('express')();

app.get('/hello',  (request, response) => {
    response.send('Hey, Marcelo! New Test!!!')
});

app.listen(8080, () => console.log('Starting server'))