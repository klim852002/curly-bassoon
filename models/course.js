var mongoose = require('mongoose');

// write schema models here
var courseSchema = new mongoose.Schema({
  name: String,
  level: Number
});

var Course = mongoose.model('Course', courseSchema)



module.exports = Course
