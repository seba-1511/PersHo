blog.service('PostModel', function(Post) {
	this.getPosts = function() {
		return Post.query();
	};

	this.getPost = function(id, callback) {
		return Post.get({postId: id}, callback);
	};

	this.deletePost = function(id) {
		Post.remove({postId: id});
	};

	this.addPost = function(id, title, content, callback) {
		var post = {};
		post.title = title;
		post.content = content;
		if (id === undefined) {
			Post.save(post, callback);
		}
		else {
			Post.update({postId: id}, post, callback);
		}
	};
});
