var express = require('express');
var router = express.Router();
const { addToken, createIntent } = require('../controllers/payments.js')

router.post('/', addToken);
router.post('/Intent', createIntent);

module.exports = router;
