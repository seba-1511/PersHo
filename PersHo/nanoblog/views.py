#-*- coding: utf-8 -*-

# To Do:
# - latest_entries: Make an API, but with many posts(~20) generated and printed as JSON.


from django.http import HttpResponse, Http404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from nanoblog.models import Post


def home(request):
    return HttpResponse('Hello World')


def latest_entries(request):
    return false


class PostCreateReadView(ListCreateAPIView):
    model = Post


class PostReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    model = Post
