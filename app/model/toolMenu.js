const mongoose = require('mongoose');

const toolmenuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: String, required: true }
})

const toolMenu = mongoose.model('toolMenus',toolmenuSchema)

module.exports = toolMenu;