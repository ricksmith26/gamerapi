var express = require('express');
var router = express.Router();
const { getCategories } = require('../controllers/navMenuItems.js')

/* GET home page. */
router.get('/menuItems', getCategories);

module.exports = router;
