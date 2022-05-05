exports.index = (req,res)=>{
    
    res.render('cart')
}

exports.update  = (req,res)=>{

    

    if (!req.session.cart){
        req.session.cart = {
            // user: req.user.email,
            items : {},
            totalQty : 0,
            totalPrice : 0,
            gstTotal : 0,
            grandTotal : 0
        }
        
    }
    let cart = req.session.cart;
    

    if (!cart.items[req.body._id]){
        cart.items[req.body._id] = {
            item : req.body,
            qty  : 1
        }
        cart.totalQty = cart.totalQty + 1 ;
        cart.totalPrice = cart.totalPrice + req.body.price;
        cart.gstTotal = (cart.totalPrice)*2/100
        cart.grandTotal = cart.totalPrice + cart.gstTotal + 15
    }
    else {
        cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
        cart.totalQty = cart.totalQty + 1 ;
        cart.totalPrice = cart.totalPrice + req.body.price ; 
        cart.gstTotal = (cart.totalPrice)*2/100
        cart.grandTotal = cart.totalPrice + cart.gstTotal + 15
       

    }
    
    return res.json({totalQty : req.session.cart.totalQty,totalPrice : req.session.cart.totalPrice,gstTotal:req.session.cart.gstTotal,grandTotal : req.session.cart.grandTotal})
       
    
}


exports.orders = (req,res)=>{
    res.send("this is order")
}


exports.deleteCartItem = (req,res)=>{
    
    let cart = req.session.cart;
    let item = cart.items[req.body._id];
    cart.totalQty = cart.totalQty - item.qty;
    cart.totalPrice = cart.totalPrice - item.qty * item.item.price;
    cart.gstTotal = (cart.totalPrice)*2/100
    cart.grandTotal = cart.totalPrice + cart.gstTotal + 15
    delete cart.items[req.body._id]
    return res.json({totalQty : req.session.cart.totalQty,totalPrice : req.session.cart.totalPrice,gstTotal:req.session.cart.gstTotal,grandTotal : req.session.cart.grandTotal})
    
    
    
}