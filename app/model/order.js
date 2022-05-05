const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    items : {required: true,type:Object},
    phone : {type: String,required:true},
    address  :{type:String,required:true},
    address2 : {type:String},
    city : {type:String},
    state : {type:String},
    paymentType : {type:String,default:'COD'},
    paymentStatus : {type:Boolean,default:false},
    status:{type:String,default:'orderPlaced'},
    pinCode:{type:Number}
},{timestamps:true})

const order = mongoose.model('order',orderSchema)

module.exports = order