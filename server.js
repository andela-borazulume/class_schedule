var express = require('express');
var app = express();
var _ = require('lodash');
var bodyParser = require('body-parser');
var r = require('rethinkdb');
var development = require('./config/config.js');
var thinky = require('./config/thinky.js');
var env = process.env.NODE_ENV || 'development';
var routes = require('./api/routes');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

thinky.r.connect(development.rethinkdb);

routes(app, development);


app.get('/*', function(req, res) {
	res.sendFile('index.html', {root: './public'});
});

var port = process.env.PORT || 2000;
app.listen(port);
console.log('I am listening to port', port);

module.exports = app;