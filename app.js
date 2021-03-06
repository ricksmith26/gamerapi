var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var menuRouter = require('./routes/menuItems');
var productsRouter = require('./routes/products');
var paymentsRouter = require('./routes/payments');
var ordersRouter = require('./routes/orders');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', menuRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/payments', paymentsRouter);
app.use('/orders', ordersRouter);

module.exports = app;
