//require modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');

//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
//set up routes
app.get('/', (req, res) => {
    res.render('index');
});



//load charts page
app.get('/charts', (req, res) => {
    res.render('charts');
})

//start the server
app.listen(port, host, () => {
    console.log('The server is running at port ', port);
});

