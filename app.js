var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');
var session = require('express-session');
var mongoStore = require('connect-mongo')
var multer = require('multer')

var flash = require('express-flash');
var passport = require('passport')
var init = require('./db/db');
init();


                                               
//routers
var indexRouter = require('./routes/index');
var productRouter = require('./routes/product')

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(flash())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//session setup
app.use(session({
  secret : process.env.session_secret,
  store : mongoStore.create({mongoUrl:process.env.Mongo_Url}),
  resave : false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*60*24*2 }
}))

//passport setup
const passportInitialiser = require('./app/config/passport');
passportInitialiser(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
  res.locals.session = req.session;
  res.locals.user = req.user
  next();
});



app.use('/', indexRouter);
app.use('/product', productRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log('error',err)
  // render the error page
  res.status(err.status || 500);

  res.render('error');
});

module.exports = app;

// app.listen(process.env.PORT || 3000, ()=>{
//   console.log('server started at port 3000')
// })


//agrib