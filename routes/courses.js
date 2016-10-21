var express = require('express')
var router = express.Router()

var Course = require('../models/course')
// set get request for find all
router.get('/', function (req, res) {
  Course.find({}, function (err, coursesArr) {
    if(err) throw new Error(err)
    // res.send(coursesArr)
    res.render('courses/index', {
      coursesArr: coursesArr
    })
  })
})

// var newCourse = new Course ({
//   creating the course by emulating a form
// })
// console.log(newCourse)
// new.Course.save()
router.get('/:id', function (req, res) {
  Course.findById({}, function (err, courseArr) {
  })
})
// set get request for create
router.get('/new', function (req, res) {
  res.render('courses/new')
})
router.post('/', function (req, res) {
  res.send(req.body)
})
// set get request for find one via findOne/:id
router.get('/search', function (req, res) {
  res.render('courses/search')
})
// just a js file need to exprt to app.js for usage
module.exports = router
