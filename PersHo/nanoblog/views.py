#-*- coding: utf-8 -*-

from django.http import HttpResponse, Http404
from django.core.serializers import serialize
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from nanoblog.models import Post


def home(request):
    return HttpResponse('Hello World')


def latest_entries(request):
	posts = Post.objects.all().order_by('date').reverse()[:20]
	return HttpResponse(serialize('json', posts))


class PostCreateReadView(ListCreateAPIView):
    model = Post


class PostReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    model = Post
