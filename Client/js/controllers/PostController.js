blog.controller('AllPosts', function($scope, $location, $routeParams, PostModel) {
	var posts = PostModel.getPosts();

	$scope.posts = posts;
	$scope.onDelete = function(postId) {
		if (confirm('Are you sure you want to delete this post ?')) {
			$location.path('/b/del/'+postId);
		}
	};
});

blog.controller('', function() {

});

