// var Year = require('../models/year.model');

// module.exports = function(app, development) {
//   app.route('/year')
//   .get(function(req, res) {
//     Year.run().then(function(data) {
//       res.json(data);
//     }).error(function(err) {
//       res.status(400).json(err);
//     });
//   })
//   .post(function(req, res) {
//     var year = new Year(req.body);
//     year.saveAll().then(function(data) {
//       res.json(data);
//     }).error(function(err) {
//       res.status(400).json(err);
//     });
//   });

//   app.route('/year/:yearId')
//     .get(function(req, res, err) {
//       if(req.year) {
//         res.json(req.year);
//       }
//       else {
//         res.status(400).json(err);
//       }
//     })
//     .put(function(req, res) {
//       var year = req.year;
//       year = _.extend(year, req.body);
//       year.saveAll().then(function(data) {
//         res.json(data);
//       }).error(function(err) {
//         res.status(500).send('Error has occured');
//       });
//     })
//     .delete(function(req, res) {
//       var year = req.year;
//       year.deleteAll().then(function(data) {
//         res.json(data);
//       }).error(function(err) {
//         res.status(500).send('Error has occured');
//       });
//     });

//   app.route('/depts/:deptId/year')
//   .get(function(req, res) {
//     Year.run().then(function(data) {
//       res.json(data);
//     }).error(function(err) {
//       res.status(400).json(err);
//     });
//   })
//   .post(function(req, res) {
//     var year = new Year({
//       year: req.body.year,
//       dept_id: req.params.deptId
//     });

//     year.saveAll().then(function(data) {
//       res.json(data);
//     }).error(function(err) {
//       res.status(400).json(err);
//     });
//   });

//   app.route('/depts/:deptId/year/:yearId')
//   .get(function(req, res, err) {
//       if(req.year) {
//         res.json(req.year);
//       }
//       else {
//         res.status(400).json(err);
//       }
//     });

//   app.param('yearId', function(req, res, next, id){
//     Year.get(id).getJoin().run().then(function(data) {
//       req.year = data;
//       next();
//     }).error(function(err) {
//       res.status(500).send('Error has occured');
//     });
//   });
// };

