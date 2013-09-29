var blogConfig = function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'Client/templates/blog/main.html',
		controller: 'AllPosts'
	})
	.when('/b/:postId', {
		template: '',
		controller: 'OnePost'
	})
	.when('/b/del/:postId', {
		template: '',
		controller: 'DelPost'
	})
	.when('/b/add/:postId', {
		template: '',
		controller: 'AddPost'
	});
};

var blog = angular.module('blog', []).config(blogConfig);

var linksConfig = function($routeProvider) {

};

var links = angular.module('links', []).config(linksConfig);
