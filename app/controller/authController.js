const user = require('../model/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.login = (req,res)=>{
    res.render('login')
}


exports.signup = (req,res)=>{
    res.render('signup')
}


exports.signupPost = async (req,res)=>{
    var data = req.body
    //check input is empty or not
    if (!data.name || !data.email || !data.password){
        req.flash('error','All fields are required')
        req.flash('name',data.name)
        req.flash('email',data.email)
        res.redirect('/signup')
    }

    //check email duplicate or not
    try {
        user.exists({email:data.email},(error,result)=>{
            if (result){
                req.flash('error','email is already taken')
                req.flash('name',data.name)
                req.flash('email',data.email)
                return res.redirect('/signup')
            }
        });
        
    } catch (error) {
        console.log('error in email existens')
    }



    //create user in user collection

    var hashedPassword = await bcrypt.hash(data.password,10)
    
    try {
        await user.create({
           name : data.name,
           email : data.email,
           password : hashedPassword
       });
       res.redirect('/')
        
    } catch (error) {
        console.log("error in creating user collection by using signup")
    }
};

exports.loginPost = (req,res,next)=>{
    var data = req.body
    passport.authenticate('local',(err,user,info)=>{
        if (err){
            req.flash('error',info.message)
            return next(err)
        }
        if (!user){
            req.flash('error',info.message)
            return res.redirect('/login')
        }
        req.login(user,(err)=>{
            if (err){
                req.flash('error',info.message)
                return next(err)
            }
            res.redirect('/')
        })
    })(req,res,next)

};


exports.logoutPost = (req,res)=>{
    
    req.logout()
    req.session.destroy();
    res.clearCookie('connect.sid');
    return res.redirect('/login')
}