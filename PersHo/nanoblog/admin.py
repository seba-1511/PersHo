#-*- coding: utf-8 -*-
from django.contrib import admin

from nanoblog.models import Post


class PostAdmin(admin.ModelAdmin):
	list_display = ('title', 'date')
	list_filter = ('category', )
	date_hierarchy = 'date'
	ordering = ('date',)
	search_fields = ('title', 'content')


# Register your models here.
admin.site.register(Post, PostAdmin)