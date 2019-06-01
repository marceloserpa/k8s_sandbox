let app = require('express')();
const port = 9000;

app.get('/hello',  (request, response) => {
    response.send('Hey, Marcelo! New Test!!!')
});

app.listen(port, () => console.log('Starting server'))