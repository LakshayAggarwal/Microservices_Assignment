const express = require('express');
const app = express();
const port = 8080;
const response = require("./orders.json");

app.get('/orders', (req, res) => res.send(response));

app.listen(port, () => console.log(`Server listing at port ${port}`));