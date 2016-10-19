var express = require('express')
var router = express.Router()

var Student = require('../models/student')

// create
// findAll
// findOne/:id

// newCourse.save(function (err) {
//   if (err) return console.log(err);
//   console.log('course created!')
// })

// creating student but did not embed under Course collection. became a separate collection under students
//  var newStudent = Student ({
//     name: 'Anna',
//     age: 18,
//     active: true
//  })
//
//  newStudent.save(function (err) {
//    if (err) return console.log(err);
//    console.log('student created!')
// })

// students created under Courses collection but not embedded
 // Course.create({ student: [
 //   {name: 'Fauzi',
 //    age: 28,
 //    active: true },
 //   {name: 'Derrick',
 //    age: 40,
 //    active: false }
 // ]}, function(err, course) {
 //   if (err) return console.log(err);
 //   console.log('student created under Course!');
 // });
// export and make this available to our other files

// created new course and student embedded within it
// var newCourse = Course({
//   name: 'class3A',
//   student:
//   [{
//     name: 'David',
//     age: 27,
//     active: true
//   },
//   {
//     name: 'Peter',
//     age: 50,
//     active: false
//   }]
// })
