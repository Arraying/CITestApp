const express = require('express');
const app = express();

app.get('/', (request, response) => response.send({
    hello: "world",
    testing: "this"
}));

app.listen(3000);