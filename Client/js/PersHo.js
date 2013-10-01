var blogConfig = function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'Client/templates/blog/posts.html',
		controller: 'AllPosts'
	})
	.when('/b/:postId', {
		templateUrl: 'Client/templates/blog/fullPost.html',
		controller: 'OnePost'
	})
	.when('/b/add/:postId', {
		templateUrl: 'Client/templates/blog/editPost.html',
		controller: 'AddPost'
	});
};

var blog = angular.module('blog', ['ngResource'])
	.factory('Post', function($resource) {
		return $resource(
		'/b/api/:postId?format=json',
		{},
		{
			'update': {method:'PUT'}
		}
		);
	})
	.config(blogConfig);

var linksConfig = function($routeProvider) {

};

var links = angular.module('links', []).config(linksConfig);
