const mongoose = require('mongoose');

const newProductsmenuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: String, required: true }
})

const newProductsMenus = mongoose.model('newProductsMenus',newProductsmenuSchema)

module.exports = newProductsMenus;