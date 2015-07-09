var thinky = require('../../config/thinky.js');
var Lecturers = require('./lecturer.model');
var Courses = thinky.createModel('Courses', {
	id: String,
	year_id: String,
	course_name: String,
	
});

Courses.hasMany(Lecturers, 'lecturer', 'id', 'course_id');
Lecturers.belongsTo(Courses, 'course', 'course_id', 'id');
module.exports = Courses;