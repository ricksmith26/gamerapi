var express = require('express');
var router = express.Router();
const { getGames, addGame } = require('../controllers/games.js')

/* GET home page. */
// router.get('/', ()=> console.log('games'));
router.get('/:id', getGames);

router.post('/', addGame);

module.exports = router;
