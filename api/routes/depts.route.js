var Departments = require('../models/depts.model');

module.exports = function(app, development) {
  app.route('/depts')
  .get(function(req, res) {
    Departments.run().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  })
  .post(function(req, res) {
    var depts = new Departments(req.body);
    depts.saveAll().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  });

  app.route('/depts/:deptId')
    .get(function(req, res, err) {
      if(req.depts) {
        res.json(req.depts);
      }
      else {
        res.status(400).json(err);
      }
    })
    .put(function(req, res) {
      var depts = req.depts;
      depts = _.extend(depts, req.body);
      depts.saveAll().then(function(data) {
        res.json(data);
      }).error(function(err) {
        res.status(500).send('Error has occured');
      });
    })
    .delete(function(req, res) {
      var depts = req.depts;
      depts.deleteAll().then(function(data) {
        res.json(data);
      }).error(function(err) {
        res.status(500).send('Error has occured');
      });
    });


  app.param('deptId', function(req, res, next, id){
    Departments.get(id).getJoin().run().then(function(data) {
      req.depts = data;
      next();
    }).error(function(err) {
      res.status(500).send('Error has occured');
    });
  });
};

