angular.module('app')
	.factory('Courses', ['$resource', function($resource) {
		return {
			GetCourses: function() {
				$resource('courses/:course_id', null, {
					'update': {method: 'PUT'}
				});
			},
			GetDeptWithCourses: function(query, data, callback) {
				return $http.post('/depts/'+query+'/courses', data)
				.success(callback);
			}
		};
		
}]);