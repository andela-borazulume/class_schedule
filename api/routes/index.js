var courses = require('./course.route');
var departments = require('./depts.route');
var lecturers = require('./lecturer.route');
var year = require('./year.route');

module.exports = function(app, development) {
	courses(app, development);
	departments(app, development);
	lecturers(app, development);
	year(app, development);

	app.get('/*', function(req, res) {
		res.sendFile('index.html', {root: './public'});
	});
};




