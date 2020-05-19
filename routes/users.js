const express = require('express');
const router = express.Router();

const {registerUser, loginFromToken, loginFromEmail} = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', registerUser);

router.get('/token/:token', loginFromToken);

router.post('/login', loginFromEmail)

module.exports = router;
