var express = require('express');
var router = express.Router();

var indexController = require('../app/controller/index')
var authController = require('../app/controller/authController')
var cartController = require('../app/controller/cartController')



/* GET home page. */
router.get('/', indexController.index);


/* Get authrouters     */
router.get('/login', authController.login);
router.post('/login', authController.loginPost);
router.get('/signup', authController.signup);
router.post('/signup', authController.signupPost);

//cart routes

router.get('/cart',cartController.index);
router.post('/updatecart',cartController.update);

module.exports = router;
