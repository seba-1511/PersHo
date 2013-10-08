blog.controller('AllPosts', function($scope, $location, $routeParams, PostModel, Post) {
	var iter, previewLength;
	var posts = PostModel.getPosts();
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
			Post.remove({postId: postId}, function() {
				$scope.posts = Post.query();
			});
		}
	};
});

blog.controller('OnePost', function($scope, $location, $routeParams, PostModel) {
    var post = PostModel.getPost($routeParams.postId);
    $scope.post = post;
});

blog.controller('AddPost', function($scope, $location, $routeParams, PostModel, Post) {
	if ($routeParams.postId != '0') {
		var post;
		post = PostModel.getPost($routeParams.postId, function(post) {
            post.content = post.content.replace(new RegExp('\<br \/\>', 'g'), '\r');
    	    $scope.post = post;
		});
    	$scope.post = post;
	}

	$scope.sendPost = function() {
		var post = $scope.post;
        post.content = post.content.replace(/(\r\n|\n\r|\r|\n)/g, '<br />');
		if (post.id === undefined) {
			Post.save(post, function() {
    	        $location.path('/');
			});
		}
		else {
			Post.update({postId: post.id}, post, function() {
    	        $location.path('/');
			});
		}
	};
});
