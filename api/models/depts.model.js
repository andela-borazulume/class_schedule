var thinky = require('../../config/thinky.js');
var Year = require('./year.model');
var Departments = thinky.createModel('Departments', {
	id: String,
	dept_name: String,
});

// Departments.hasMany(Year, 'year', 'id', 'dept_id');
// Year.belongsTo(Departments, 'department', 'dept_id', 'id');
module.exports = Departments;