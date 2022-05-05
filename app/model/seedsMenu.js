const mongoose = require('mongoose');

const seedsmenuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: String, required: true }
})

const seedsMenu = mongoose.model('seedsMenus',seedsmenuSchema)

module.exports = seedsMenu;