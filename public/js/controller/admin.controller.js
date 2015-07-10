'use strict';
angular.module('app').
	controller('adminCtrl', ['$scope', 'Departments', '$routeParams', function ($scope, Departments, $routeParams) {

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
		};

		$scope.getOneDept = function(id) {
			var dept = Departments.DeptList.get({ depts_id: id }, function() {	
				$scope.eachDept = dept;
				console.log(dept);
  		});
		};

		$scope.createYear = function() {
		};

	}]);