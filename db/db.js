const mongoose = require('mongoose');
require('dotenv').config()

function init(){
    new mongoose.connect(process.env.Mongo_Url,(err)=>{
        if (err){
            console.log('error in mongo connection')
        }else{
            console.log('mongo succesfully connected')
        }
    })

}

module.exports = init