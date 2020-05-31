var express = require('express');
var router = express.Router();
const {
    addProduct,
    getProductsByTerm,
    getProductsBySubcategory,
    getProductById,
    addImg,
    getImg,
    getSaleGames,
    getSaleHardware,
    getMoreLikeThis,
    getTitle,
    getSearchItems
 } = require('../controllers/products.js')

router.get('/term/:id', getProductsByTerm);

router.get('/subcategory/:id', getProductsBySubcategory);

router.get('/id/:id', getProductById)

router.post('/', addProduct);

router.post('/addImg', addImg)

router.get('/getImg/:brand', getImg)

router.get('/getSaleGames', getSaleGames)

router.get('/getSaleHardware', getSaleHardware)

router.get('/getMoreLikeThis/:id', getMoreLikeThis)

router.post('/getTitle', getTitle)

router.get('/search/:search', getSearchItems)

module.exports = router;
