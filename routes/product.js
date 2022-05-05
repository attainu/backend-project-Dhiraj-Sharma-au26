const express = require('express');
const router = express.Router();


const productController = require('../app/controller/product')


router.get('/',productController.index)

router.get('/tools',productController.tools)
router.get('/vegetables',productController.vegetables)
router.get('/seeds',productController.seeds)

module.exports = router;