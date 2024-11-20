let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Create an Express app instance
let app = express();

// Import routers
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let movieRouter = require('../routes/movie');

// Set views directory and view engine (EJS)
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// MongoDB connection setup
const mongoose = require('mongoose');
let DB = require('./db');
mongoose.connect(DB.URI); 
let mongoDB = mongoose.connection; 
mongoDB.on('error', console.error.bind(console, 'Connection Error')); 
mongoDB.once('open', () => { 
  console.log("Connected with MongoDB");
});

// Additional mongoose settings
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true }); // Mongoose connection options

// Use middleware for logging, parsing requests, and serving static files
app.use(logger('dev'));  
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, '../../public'))); 
app.use(express.static(path.join(__dirname, '../../node_modules'))); 

// Set up routes
app.use('/', indexRouter);  
app.use('/users', usersRouter);  
app.use('/movieslist', movieRouter);  
// Handle 404 errors for undefined routes
app.use(function(req, res, next) {
  next(createError(404)); 
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message; 
  res.locals.error = req.app.get('env') === 'development' ? err : {}; 

  res.status(err.status || 500); 
  res.render('error', { title: 'Error' }); e
});

// Export the app module to use in other files
module.exports = app;
