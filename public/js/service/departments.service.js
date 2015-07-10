'use strict';

angular.module('app')
	.factory('Departments', ['$resource','$http', function($resource, $http) {
		return {
			DeptList : $resource('depts/:depts_id', null, {
				'update': {method: 'PUT'}
			}),
			Year : function(query, data, callback) {
			return $http.post("/depts/"+query+"/year", data)
				.success(callback);

			}
		};
}]);