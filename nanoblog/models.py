from django.db import models

class Post:
	title = models.CharField(max_length = 255)
	content = models.TextField(null = True)
	date = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name="Publication Date")