var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// require stuffs from models


var port = 8000
// mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/courses')
mongoose.Promise = global.Promise
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

var coursesRoutes = require('./routes/courses')
var studentsRoutes = require ('./routes/students')


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('Good to go!')
})
app.use('/courses', coursesRoutes)
app.use('/students', studentsRoutes)

app.listen(port)
console.log('Server is running at http://localhost:' + port)
