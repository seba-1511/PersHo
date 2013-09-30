blog.service('PostModel', function($http) {
	this.posts = [];
	this.getPosts = function() {
		if (this.posts == []) {
			$http.get('http://seba1511.pythonanywhere.com/b/api/?format=json').then(function(response) {
				console.log(response);
				window.posts = response.data;
			});
			window.posts = JSON.parse('[{"id": 2, "title": "jQuery Ajax with very long title that goes on and on", "content": "Working with ajax is nice. Working with ajax is nice.Working with ajax is nice. Working with ajax is nice.Working with ajax is nice.Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice.", "date": "2013-09-24T22:35:10.656Z"}, {"id": 3, "title": "jQuery Ajax", "content": "Working with ajax is nice. Working with ajax is nice.Working with ajax is nice. Working with ajax is nice.Working with ajax is nice.Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice.", "date": "2013-09-24T22:35:24.392Z"}, {"id": 4, "title": "jQuery Ajax", "content": "Working with ajax is nice. Working with ajax is nice.Working with ajax is nice. Working with ajax is nice.Working with ajax is nice.Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. So REST and AJAX seems to be friends !", "date": "2013-09-24T22:36:26.077Z"}, {"id": 5, "title": "jQuery Ajax", "content": "Working with ajax is nice. Working with ajax is nice.Working with ajax is nice. Working with ajax is nice.Working with ajax is nice.Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. Working with ajax is nice. So REST and AJAX seems to be friends forever !", "date": "2013-09-24T22:45:38.476Z"}]');
			this.posts = window.posts;
		}
		console.log(this.posts);
		return this.posts;
	};

	this.getPost = function(id) {
		var posts, post;
		posts = this.getPosts();
		for (post in posts) {
			if (posts[post].id == id) {
				return posts[post];
			}
		}
	};

	this.deletePost = function(id) {
		$http.delete('http://seba1511.pythonanywhere.com/b/api/'+id);
		var iter;
		for (iter in this.posts) {
			if (this.posts[iter].id == id) {
				this.posts.pop(iter);
			}
		}
	};

	this.addPost = function(id, title, content) {
		var post, iter, tempId;
		tempId = 0;
		post = {};
		post.title = title;
		post.content = content;
		post.date = (new Date()).toISOString();
		for (iter in this.posts) {
			if (this.posts[iter].id == id) {
				post.id = id;
				this.posts[iter] = post;
				$http.put('http://seba1511.pythonanywhere.com/b/api/' + post.id, {
					content: post.content,
					title: post.title
				});
				return true;
			}
			if (tempId < this.posts[iter].id) {
				tempId = this.posts[iter].id;
			}
		}
		if (!id || id == 0) {
			post.id = tempId + 1;
			this.posts.push(post);
			$http.post('http://seba1511.pythonanywhere.com/b/api/',{
				content: post.content,
				title: post.title
			});
		}
	};
});