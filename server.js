// Require Dependencies
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


// Require Models
require('./models/User');


// Require Controllers
const userController = require('./controllers/userController');

// Initialize app and port
const app = express();
const port = 3001;

// Set up middleware for express to parse post bodies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Set up Controllers
app.use('/users', userController);



// Configure SB connection

const password = process.env.MONGO_DB_PASS
const dbUrl = `mongodb+srv://ronnie-lewis:${password}@cluster0-pfoja.mongodb.net/recipe-cult?retryWrites=true&w=majority`;

// const uri = `mongodb+srv://ronnie-lewis:${password}@cluster0-pfoja.mongodb.net/<dbname>?retryWrites=true&w=majority`;

// Connect to database, start API on successful connection to DB
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
      const server = app.listen(port, () => {
        console.log(`Express is running on port ${port}`);
    });
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
});

