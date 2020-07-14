const express = require('express')
const app = express()
const port = 3001
// var mysql = require('mysql');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('login'));

app.get('/signup', (req, res) => res.render('homepage'));

app.get('/homepage', (req, res) => res.render('homepage'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
