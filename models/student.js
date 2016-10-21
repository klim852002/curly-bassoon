var mongoose = require('mongoose');

// write schema models here
var studentSchema = new mongoose.Schema({
  name: String,
  Email: String,
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }
})

var Student = mongoose.model('Student', studentSchema)

module.exports = Student
