angular.module('app')
	.factory('Lecturers', ['$resource', function($resource) {
		return $resource('lecturers/:lecturer_id', null, {
			'update': {method: 'PUT'}
		});
}]);