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

	$scope.deletePost = function(postId) {
		var q = confirm('Are you sure you want to delete this post ?');
		if (q) {
			PostModel.deletePost(postId);
		}
	};
});

blog.controller('OnePost', function($scope, $location, $routeParams, PostModel) {
	var post = PostModel.getPost($routeParams.postId);

	$scope.post = post;
});

