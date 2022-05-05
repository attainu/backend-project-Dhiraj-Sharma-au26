const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    avtar: { type: String, required: true },
    role : {type:String,required:true},
    comment:{type:String}

})

const feedback = mongoose.model('feedback',feedbackSchema)

module.exports = feedback;