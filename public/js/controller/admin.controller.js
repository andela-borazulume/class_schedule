'use strict';
angular.module('app').
	controller('adminCtrl', ['$scope', 'Departments', 'Lecturers', 'Courses', '$routeParams', '$timeout', function ($scope, Departments, Lecturers, Courses, $routeParams, $timeout) {

		$scope.getData = function() {
			var allDepts = Departments.DeptList.query(function() {
				$scope.getDepartments = allDepts;
			});
		};


		$scope.deleteDept = function(id, index) {
			Departments.DeptList.delete({
				depts_id: id,
			}, function(resp) {
				$scope.getDepartments.splice(index, 1);
				console.log('It has been deleted');
			}, function(err) {
				console.log(err);
			});
		};

		$scope.createDept = function() {
			var dept = new Departments.DeptList({
				dept_name: $scope.inputDept
			});

			dept.$save(function(err, data) {
				if(err) {
					console.log(err);
				}
			});
		$scope.getData();	
		$scope.inputDept = "";
		};

		$scope.getOneDept = function(id) {
			var dept = Departments.DeptList.get({ depts_id: id }, function() {	
				$scope.eachDept = dept;
				// console.log(dept);
  		});
		};

		$scope.list = Lecturers.query();

		$scope.addLecturersTOList = function() {
			var lecturer = new Lecturers({
				lecturer_name: $scope.addLecturer
			});

			lecturer.$save(function(err, data) {
				if(err) {
					console.log(err);
				}
			});
			$scope.addLecturer = "";
			$scope.list = Lecturers.query();
		};

		var query = $routeParams.deptId;

		$scope.getCourseDetails = function () {
			var query = $routeParams.deptId;
			Courses.GetDeptCourses(query, function(data) {
				$scope.course = data;
			});
		}();
		$scope.DetailsAdded = {};

		$scope.saveDetails = function() {
			console.log($scope.DetailsAdded);
			Courses.CreateDeptCourses(query, $scope.DetailsAdded, function(data, err) {
		        if (data) {
		            // console.log(data);
		        } else if (err) {
		            console.log(err);
		        }
	    	});
			$scope.getCourseDetails();
		};

		 $(document).ready(function(){
   		 $('.modal-trigger').leanModal({
   		 		in_duration: 500, // Transition in duration
      		out_duration: 300
   		 });
  	});


	}]);
