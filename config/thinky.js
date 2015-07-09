var development = require('./config.js');
var thinky = require('thinky')(development.rethinkdb);

module.exports = thinky;
