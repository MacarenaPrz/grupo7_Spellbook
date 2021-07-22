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

/* ROUTING */
/* Home */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'))
});
/* Detalle de producto */
app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, './views/productDetail.html'))
});
/* Shopping Cart */
app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, './views/shoppingCart.html'))
});
/* Registro */
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './views/signUp.html'))
});
/* Login */
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './views/login.html'))
});
/* Info de Usuario */
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, './views/register.html'))
});
/* Admin */
app.get('/admin', (req, res) => {
  res.render(path.join(__dirname, './views/admin'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
