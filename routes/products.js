var express = require('express');
var router = express.Router();
const { addProduct, getProductsByTerm, getProductsBySubcategory, getProductById } = require('../controllers/products.js')

/* GET home page. */
// router.get('/', ()=> console.log('games'));
router.get('/term/:id', getProductsByTerm);

router.get('/subcategory/:id', getProductsBySubcategory);

router.get('/id/:id', getProductById)

router.post('/', addProduct);

module.exports = router;
