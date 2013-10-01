blog.service('PostModel', function($http, $rootScope) {
	this.getPosts = function() {
			$http.get('http://seba1511.pythonanywhere.com/b/api/?format=json').then(function (response) {
				console.log(response);
				$rootScope.posts = response.data;
			});
		return $rootScope.posts;
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
		var iter, posts;
        posts = this.getPosts();
		for (iter in posts) {
			if (posts[iter].id == id) {
				posts.pop(iter);
			}
		}
	};

	this.addPost = function(id, title, content) {
		var post, iter, tempId, posts;
		tempId = 0;
		post = {};
		post.title = title;
		post.content = content;
		post.date = (new Date()).toISOString();
        posts = this.getPosts();
		for (iter in posts) {
			if (posts[iter].id == id) {
				post.id = id;
				posts[iter] = post;
				$http.put('http://seba1511.pythonanywhere.com/b/api/' + post.id, {
					content: post.content,
					title: post.title
				});
				return true;
			}
			if (tempId < posts[iter].id) {
				tempId = posts[iter].id;
			}
		}
		if (!id || id == 0) {
			post.id = tempId + 1;
			posts.push(post);
			$http.post('http://seba1511.pythonanywhere.com/b/api/',{
				content: post.content,
				title: post.title
			});
		}
	};
});