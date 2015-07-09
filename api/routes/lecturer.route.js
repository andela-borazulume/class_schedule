var Lecturer = require('../models/lecturer.model');

module.exports = function(app, development) {
  app.route('/lecturers')
  .get(function(req, res) {
    Lecturer.run().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  })
  .post(function(req, res) {
    var lecturer = new Lecturer(req.body);
    lecturer.saveAll().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  });

  app.route('/lecturers/:lecturerId')
    .get(function(req, res, err) {
      if(req.lecturers) {
        res.json(req.lecturers);
      }
      else {
        res.status(400).json(err);
      }
    })
    .put(function(req, res) {
      var lecturers = req.lecturers;
      lecturers = _.extend(lecturers, req.body);
      lecturers.saveAll().then(function(data) {
        res.json(data);
      }).error(function(err) {
        res.status(500).send('Error has occured');
      });
    })
    .delete(function(req, res) {
      var lecturers = req.lecturers;
      lecturers.deleteAll().then(function(data) {
        res.json(data);
      }).error(function(err) {
        res.status(500).send('Error has occured');
      });
    });

  app.route('/courses/:courseId/lecturers')
  .get(function(req, res) {
    Lecturer.run().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  })
  .post(function(req, res) {
    var lecturers = new Lecturer({
      lecturer_name: req.body.lecturer_name,
      day: req.body.day,
      location: req.body.location,
      time: req.body.time,
      course_id: req.params.courseId
    });
    lecturers.saveAll().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  });

  app.param('lecturerId', function(req, res, next, id){
    Lecturer.get(id).getJoin().run().then(function(data) {
      req.lecturers = data;
      next();
    }).error(function(err) {
      res.status(500).send('Error has occured');
    });
  });
};

