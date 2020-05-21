var express = require('express');
var router = express.Router();
const { createOrder } = require('../controllers/orders.js');

router.post('/createOrder', createOrder);

module.exports = router;