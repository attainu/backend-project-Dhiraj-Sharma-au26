const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const User = require('../model/user');

function init(passport){
    passport.use(new localStrategy({usernameField:'email'},async (email,password,done)=>{
        const user = await User.findOne({email:email});

        if (!user){
            return done(null,false,{message:'No user with this is email'});
        };
        bcrypt.compare(password,user.password).then(match=>{
            if (match){
                return done(null,user,{message:'Logged in succesfully'})
            };
            return done(null,false,{message:'Username or password are incorrect'});
        }).catch(err=>{
            return done(null,false,{message:'somthing went wrong'});
        });
    }));

    passport.serializeUser((user,done)=>{
        done(null,user.id)
    });
    passport.deserializeUser((id,done)=>{
        User.findById(id,(err,user)=>{
            done(err,user)
        });
    });
};

module.exports = init