angular.module('app')
	.factory('Courses', ['$resource', function($resource) {
		return $resource('courses/:course_id', null, {
			'update': {method: 'PUT'}
		});
}]);