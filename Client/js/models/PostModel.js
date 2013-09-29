blog.service('PostModel', function() {
	this.getPosts = function() {
		var posts = JSON.parse('[{"id": 2, "title": "jQuery Ajax", "content": "Working with ajax is nice.", "date": "2013-09-24T22:35:10.656Z"}, {"id": 3, "title": "jQuery Ajax", "content": "Working with ajax is nice.", "date": "2013-09-24T22:35:24.392Z"}, {"id": 4, "title": "jQuery Ajax", "content": "Working with ajax is nice. So REST and AJAX seems to be friends !", "date": "2013-09-24T22:36:26.077Z"}, {"id": 5, "title": "jQuery Ajax", "content": "Working with ajax is nice. So REST and AJAX seems to be friends forever !", "date": "2013-09-24T22:45:38.476Z"}]');
		return posts;
	};

	this.addPost = function(title, content) {

	};

	this.deletePost = function(postId) {

	};
});