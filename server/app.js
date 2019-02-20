const express = require('express');

const app = express();

app.get('/', (request, response) => response.send('Hello'));

app.listen(4000, () => console.log('Server start http://localhost:4000'));