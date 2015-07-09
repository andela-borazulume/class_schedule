var thinky = require('../../config/thinky.js');
var Lecturer = thinky.createModel('Lecturer', {
	id: String,
	course_id: String,
	lecturer_name: String,
	day: String,
	location: String,
	time: String
});
module.exports = Lecturer;