var thinky = require('../../config/thinky.js');
var Lecturer = thinky.createModel('Lecturer', {
	id: String,
	lecturer_name: String
});
module.exports = Lecturer;