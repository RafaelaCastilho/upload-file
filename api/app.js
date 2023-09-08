var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql2/promise');

var indexRouter = require('./routes/index');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// MySQL connection
var connection;

(async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234567',
        database: 'mydatabase'
    });
})();

app.get('/', async (req, res)=>{
    const [query] = await connection.query('SELECT*FROM products');
    return res.json(query);
});

module.exports = app;