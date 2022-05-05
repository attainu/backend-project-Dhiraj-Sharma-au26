var order = require('../model/order')
var user = require('../model/user')

exports.index = async(req,res)=>{
    const orders = await order.find({customerId : req.user._id},null,{sort  : {'createdAt' : -1}})
    res.render('orders',{orders :  orders})
}


exports.orderPost = (req,res)=>{
    var data = req.body
    if (!data.phone || !data.address || !data.address2 || !data.city || !data.city || !data.state){
        
        req.flash('error','All fields are required')
        return res.redirect('/cart')
    }

    try {
        var orderData = order.create({
            customerId  : req.user._id,
            items : req.session.cart.items,
            phone : data.phone,
            address : data.address,
            address2 : data.address2,
            city : data.city,
            state : data.state,
            pinCode : data.pinCode
        })
        req.flash('success','Order placed succesfully')
        delete req.session.cart
        res.redirect('/customer/order')
    } catch (error) {
        console.log("error in orderdata")
    }


    
}