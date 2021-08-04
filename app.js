var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//                     RUTAS

app.use('/', indexRouter); // home
app.use('/login' , usersRouter); // login

// Detalle de producto 
app.get('/product', (req, res) => { res.render('productDetail')});

// Shopping Cart 
app.get('/cart', (req, res) => { res.render('shoppingCart')});

// Registro 
app.get('/signup', (req, res) => { res.render('signUp')});

// Login 
app.get('/login', (req, res) => { res.render('login')});

// Info de Usuario 
app.get('/register', (req, res) => { res.render('register')});

// Admin 
app.get('/admin', (req, res) => { res.render('admin')});

// Error 404
app.get('/404', function(req, res) { res.render('404')});

// Books 
app.get('/books', (req, res) => { res.render('books')});

// Novelties 
app.get('/novelties', (req, res) => { res.render('novelties')});

app.get('/aboutUs', (req, res) => { res.render('aboutUs')});


// catch 404 and forward to error handler
app.use(function(req, res, next) { next(createError(404))});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404');
});

module.exports = app;
