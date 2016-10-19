var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// require stuffs from models
var Course = require('./models/course')

var port = 8000
// mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/courses')
mongoose.Promise = global.Promise

var Course = require('./models/course')
var Student =require('./models/student')
// not using express
// var newCourse = new COurse ({
//   creating the course by emulating a form
// })
// console.log(newCourse)
// new.Course.save()

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.send('Good to go!')
})

app.listen(port)
console.log('Server is running at http://localhost:' + port)
