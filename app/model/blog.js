const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    image : {type:String,required:true},
    heading: { type: String, required: true },
    contant: { type: String, required: true },
    imageAuthor : {type:String,required:true},
    nameAuthor:{type:String,required:true}

})

const blog = mongoose.model('blog',blogSchema)

module.exports = blog;