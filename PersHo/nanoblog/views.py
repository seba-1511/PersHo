#-*- coding: utf-8 -*-

from django.http import HttpResponse, Http404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from nanoblog.models import Post

def home(request):
	return HttpResponse('Hello World')

class PostCreateReadView(ListCreateAPIView):
    model = Post


class PostReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    model = Post
