var express = require('express');
var router = express.Router();
const { addProduct, getProductsByTerm, getProductsBySubcategory } = require('../controllers/games.js')

/* GET home page. */
// router.get('/', ()=> console.log('games'));
router.get('/term/:id', getProductsByTerm);

router.get('/subcategory/:id', getProductsBySubcategory);

router.post('/', addProduct);

module.exports = router;
