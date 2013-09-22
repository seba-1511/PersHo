#-*- coding: utf-8 -*-
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(null=True)
    date = models.DateTimeField(
        auto_now_add=True,
        auto_now=False,
        verbose_name="Publication Date")
    category = models.ForeignKey('Category')

    def __unicode__(self):

        return u"%s" % self.title


class Category(models.Model):
	name = models.CharField(max_length=255)

	def __unicode__(self):
		return self.name