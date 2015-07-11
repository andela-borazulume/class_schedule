// angular.module('app.controller', []);

angular.module('app', [
	'ngRoute',
	'ngResource'
	]).config(['$routeProvider', function($routeProvider) {
		// $locationProvider.html5Mode(true);
		$routeProvider
			.when('/admin', {
				templateUrl: 'view/adminView.html',
				controller: 'homeCtrl'
		  })
		  .when('/admin/dept', {
		  	templateUrl: 'view/deptView.html',
		  	controller: 'adminCtrl'
		  })
		  .when('/admin/dept/:deptId', {
		  	templateUrl: 'view/updateView.html',
		  	controller: 'adminCtrl'
		  })
		  .otherwise({
		  	redirectTo: '/admin'
		  });
	}]);