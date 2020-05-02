var express = require('express');
var router = express.Router();
const { getCategories,addCategory } = require('../controllers/navMenuItems.js')

/* GET home page. */
router.get('/menuItems', getCategories);

router.post('/menuItems', addCategory);

module.exports = router;
