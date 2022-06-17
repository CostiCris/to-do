const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homeRoute = require('./routes/home.js')

const port = '3000';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


// Homepage
app.use(homeRoute);

app.listen(port, () => {
    console.log('Server running succesfully on port 3000.')
});

