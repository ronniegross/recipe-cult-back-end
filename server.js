const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const requestsController = require('./controllers/requestController');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', requestsController);

app.listen(port, () => console.log(`Starter app listening on port ${port}!`));