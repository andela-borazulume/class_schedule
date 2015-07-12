var thinky = require('../../config/thinky.js');
var Course = require('./courses.model');
var Departments = thinky.createModel('Departments', {
	id: String,
	dept_name: String,
});

Departments.hasMany(Course, 'course', 'id', 'dept_id');
// Year.belongsTo(Departments, 'department', 'dept_id', 'id');
module.exports = Departments;