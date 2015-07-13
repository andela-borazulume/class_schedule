var Course = require('../models/courses.model');

module.exports = function(app, development) {
  app.route('/courses')
  .get(function(req, res) {
    Course.run().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  })
  .post(function(req, res) {
    var courses = new Course(req.body);
    courses.saveAll().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  });

  app.route('/courses/:courseId')
    .get(function(req, res, err) {
      if(req.courses) {
        res.json(req.courses);
      }
      else {
        res.status(400).json(err);
      }
    })
    .put(function(req, res) {
      var courses = req.courses;
      courses = _.extend(courses, req.body);
      courses.saveAll().then(function(data) {
        res.json(data);
      }).error(function(err) {
        res.status(500).send('Error has occured');
      });
    })
    .delete(function(req, res) {
      var courses = req.courses;
      courses.deleteAll().then(function(data) {
        res.json(data);
      }).error(function(err) {
        res.status(500).send('Error has occured');
      });
    });


  app.route('/depts/:deptId/courses')
  .get(function(req, res) {
    Course.run().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  })
  .post(function(req, res) {  
    console.log(req.body);
    console.log(req.params);
    var courses = new Course({
      course_name: req.body.course_name,
      level: req.body.level,
      course_code: req.body.course_code,
      time: req.body.time,
      location: req.body.location,
      lecturer: req.body.lecturer,
      dept_id: req.params.deptId
    });
    courses.saveAll().then(function(data) {
      res.json(data);
    }).error(function(err) {
      res.status(400).json(err);
    });
  });
  
  app.route('/depts/:deptId/courses/:courseId')
    .get(function(req, res, err) {
      if(req.courses) {
        res.json(req.courses);
      }
      else {
        res.status(400).json(err);
      }
    })
    .put(function(req, res) {
      var courses = req.courses;
      courses = _.extend(courses, req.body);
      courses.saveAll().then(function(data) {
        res.json(data);
      }).error(function(err) {
        res.status(500).send('Error has occured');
      });
    })
    .delete(function(req, res) {
      var courses = req.courses;
      courses.deleteAll().then(function(data) {
        res.json(data);
      }).error(function(err) {
        res.status(500).send('Error has occured');
      });
    });

  app.param('courseId', function(req, res, next, id){
    Course.get(id).getJoin().run().then(function(data) {
      req.courses = data;
      next();
    }).error(function(err) {
      res.status(500).send('Error has occured');
    });
  });
};

