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
	})
    .otherwise({
    	templateUrl: 'Client/templates/blog/posts.html',
		controller: 'AllPosts'
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
    $routeProvider
    .when('/:whatever', {
        templateUrl: 'Client/templates/links/allLinks.html',
        controller: 'AllLinks',
    })
    .when('/', {
        templateUrl: 'Client/templates/links/allLinks.html',
        controller: 'AllLinks',
    })
    .otherwise({
        templateUrl: 'Client/templates/links/allLinks.html',
        controller: 'AllLinks',
    });
};

var linksResource = function($resource) {
    return $resource(
        '/l/api/:linkId?format=json',
        {},
        {'update': {method: 'PUT'}}
    );
};

var links = angular.module('links', ['ngResource'])
    .factory('Links', linksResource)
    .config(linksConfig);
