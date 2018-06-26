var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accountController');



//get sign in form
router.get('/signin',accountController.getSigninForm);

//post sign in form(sign user in)
router.post('/signin',accountController.postSigninForm);

module.exports = router;
