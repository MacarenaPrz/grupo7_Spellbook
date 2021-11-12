var createError = require('http-errors');
var express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const inLogged = require('./middleware/inLogged')

//Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const apiRoutes = require('./routes/apiRoutes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewar
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({ secret: "mySecret",
 resave: false,  
 saveUninitialized: false
}));
app.use(inLogged)


//Ruter
app.use('/', indexRouter); // home
app.use('/user', usersRouter); // login
app.use('/admin', adminRouter);//admin
app.use('/api', apiRoutes);


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
