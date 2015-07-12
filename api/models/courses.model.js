var thinky = require('../../config/thinky.js');
var Lecturers = require('./lecturer.model');
var Courses = thinky.createModel('Courses', {
	id: String,
	level: String,
	course_name: String,
	course_code: String,
	dept_id: String,
	location: String,
	time: String,
	lecturer: String
});

// Courses.hasMany(Lecturers, 'lecturer', 'id', 'course_id');
// Lecturers.belongsTo(Courses, 'course', 'course_id', 'id');
module.exports = Courses;