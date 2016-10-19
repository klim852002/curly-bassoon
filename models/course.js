var mongoose = require('mongoose');

// write schema models here
var courseSchema = new mongoose.Schema({
  name: String,
  level: Number,
  student: [studentSchema]
});

var Course = mongoose.model('Course', courseSchema)



module.exports = Course
