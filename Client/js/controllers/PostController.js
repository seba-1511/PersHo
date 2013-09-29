blog.controller('AllPosts', function($scope, $location, $routeParams, PostModel) {
	var posts = PostModel.getPosts();
	var iter, previewLength;
	previewLength = 250;
	for (iter in posts) {
		if (posts[iter].content.length > previewLength) {
			posts[iter].content = posts[iter].content.substring(0, previewLength) + '...';
		}
	}

	$scope.posts = posts;
	$scope.currentURL = window.location.href;

	$scope.onDelete = function(postId) {
		if (confirm('Are you sure you want to delete this post ?')) {
			$location.path('/b/del/'+postId);
		}
	};
});

blog.controller('OnePost', function($scope, $location, $routeParams, PostModel) {
	debugger;
	var post = PostModel.getPost($routeParams.postId);

	$scope.post = post;
});

