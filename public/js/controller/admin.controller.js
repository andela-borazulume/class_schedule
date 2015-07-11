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

		$scope.DetailsAdded = {};

		$scope.saveDetails = function() {
		var query = $routeParams.deptId;
			Courses.GetDeptWithCourses(query, $scope.DetailsAdded, function(data, err) {
	        if (data) {
	            // $scope.showPost();
	            console.log(data);
	            // console.log($scope.categorypost.posts);
	        } else if (err) {
	            console.log(err);
	            // alert('You have to	 login first');
	        }
	    });
		};

		 $(document).ready(function(){
   		 $('.modal-trigger').leanModal({
   		 		in_duration: 500, // Transition in duration
      		out_duration: 300
   		 });
  	});


	}]);
