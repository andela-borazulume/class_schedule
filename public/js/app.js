// angular.module('app.controller', []);

angular.module('app', [
	'ngRoute',
	'ngResource'
	]).config(['$routeProvider', function($routeProvider) {
		// $locationProvider.html5Mode(true);
		$routeProvider
			.when('/home', {
				templateUrl: 'view/homeView.html',
				controller: 'homeCtrl'
		  })
		  .when('/admin', {
		  	templateUrl: 'view/adminView.html',
		  	controller: 'adminCtrl'
		  })
		  .otherwise({
		  	redirectTo: '/'
		  });
	}]);