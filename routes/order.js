var express = require('express');
var router = express.Router();


const productController = require('../app/controller/product')
router.get('/order',productController.seeds)