const mongoose = require('mongoose');

const vegetablemenuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: String, required: true }
})

const vegetableMenu = mongoose.model('vegetablelMenus',vegetablemenuSchema)

module.exports = vegetableMenu;