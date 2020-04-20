var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var menuRouter = require('./routes/menuItems');
var gamesRouter = require('./routes/games');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', menuRouter);
app.use('/users', usersRouter);
app.use('/games', gamesRouter);

module.exports = app;
