var pershoConfig = function($routeProvider) {
	$routeProvider
	.when('/', {
		template: 'templates/blog/main.html',
		controller: 'PostController'
	})
	.when('/b/:postId', {
		template: '',
		controller: 'PostController'
	})
	.when('/b/del/:postId', {
		template: '',
		controller: 'DelPostController'
	})
	.when('/b/add/:postId', {
		template: '',
		controller: 'AddPostController'
	});
};

var persho = angular.module('persho', []).config(pershoConfig);
