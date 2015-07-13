angular.module('app')
	.factory('Courses', ['$resource', '$http', function($resource, $http) {
		return {
			GetCourses: $resource('courses/:course_id', null, {
					'update': {method: 'PUT'}
				}),
			CreateDeptCourses: function(query, data, callback) {
				return $http.post('/depts/'+query+'/courses', data)
				.success(callback);
			},
			GetDeptCourses: function(query, callback) {
				return $http.get('/depts/'+query+'/courses')
				.success(callback);
			},
			DeleteDeptCourses: function(query, query2, callback) {
				return $http.delete('/depts/'+query+'/courses'+query)
				.success(callback);
			}
		};
		
}]);