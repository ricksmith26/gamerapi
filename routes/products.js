var express = require('express');
var router = express.Router();
const { addProduct, getProductsByTerm, getProductsBySubcategory, getProductById, addImg, getImg } = require('../controllers/products.js')
const { seedData } = require('../controllers/seed');

router.get('/term/:id', getProductsByTerm);

router.get('/subcategory/:id', getProductsBySubcategory);

router.get('/id/:id', getProductById)

router.post('/', addProduct);

router.post('/addImg', addImg)

router.get('/getImg/:brand', getImg)

router.get('/seed', seedData)

module.exports = router;
