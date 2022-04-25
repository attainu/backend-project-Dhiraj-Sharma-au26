var express = require('express');
var router = express.Router();

var cartController = require('../app/controller/cartController')



router.get('/cart',cartController.index);
router.post('/updatecart',cartController.update);