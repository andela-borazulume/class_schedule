// angular.module('app.controller', []);

angular.module('app', [
	'ngRoute',
	'ngResource'
	]).config(['$routeProvider', function($routeProvider) {
		// $locationProvider.html5Mode(true);
		$routeProvider
			.when('/admin', {
				templateUrl: 'view/homeView.html',
				controller: 'homeCtrl'
		  })
		  .when('/admin/dept', {
		  	templateUrl: 'view/adminView.html',
		  	controller: 'adminCtrl'
		  })
		  .otherwise({
		  	redirectTo: '/admin'
		  });
	}]);