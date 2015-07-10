angular.module('app')
	.factory('Year', ['$resource', function($resource) {
		return $resource('year/:year_id', null, {
			'update': {method: 'PUT'}
		});
}]);