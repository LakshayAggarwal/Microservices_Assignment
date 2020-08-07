const express = require('express');
const app = express();
const request = require('request');
const port = 8080;
const userUrl = (process.env.USER_URL || "http://localhost:8080") + '/users';
const orderUrl = (process.env.ORDER_URL || "http://localhost:8000") + '/orders';

let UserData = {};
let OrderData = {};

request(userUrl, function (error, response, body) {
	if (error)
		console.log(error);
	if (!error && response.statusCode == 200) {
		UserData = JSON.parse(body);
	}
});

request(orderUrl, function (error, response, body) {
	if (error)
		console.log(error);
	if (!error && response.statusCode == 200) {
		OrderData = JSON.parse(body);
	}
});

app.get('/orderdetails', (req, res) => res.send({ userDetails: UserData , orders: OrderData.orders }));

app.listen(port, () => console.log(`Server listing at port ${port}`));