var express = require('express');
var router = express.Router();

var indexController = require('../app/controller/index')
var authController = require('../app/controller/authController')
var cartController = require('../app/controller/cartController')
var orderController  = require('../app/controller/orderController')


//middleware
var guestMiddleware = require('../app/middleware/guest')
var authMiddleware = require('../app/middleware/auth')
var uploads = require('../app/middleware/cloudnary')


/* GET home page. */
router.get('/', indexController.index);


/* Get authrouters     */
router.get('/login',guestMiddleware.guest, authController.login);
router.post('/login', authController.loginPost);
router.get('/signup',guestMiddleware.guest ,authController.signup);
router.post('/signup', authController.signupPost);
router.post('/logout', authController.logoutPost);

//cart routes

router.get('/cart',cartController.index);
router.post('/updatecart',cartController.update);
router.post('/deleteCartItem',cartController.deleteCartItem);

//order
router.get('/customer/order',authMiddleware.auth,orderController.index)
router.post('/order',orderController.orderPost)


//about us
router.get('/aboutUs',indexController.aboutUs)
router.post('/aboutUs',uploads.single('avtar'),indexController.aboutUsPost)


//blog
router.get('/blog',indexController.blog)

//contact us
router.get('/contactUs',indexController.contactUs)
router.post('/contactUs',indexController.contactUsPost)

module.exports = router;
