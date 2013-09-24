#-*- coding: utf-8 -*-

# To Do:
# - all_entries: Make an API, but with all the links and printed as JSON.


from django.http import HttpResponse, Http404
from django.core.serializers import serialize
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from nanolinks.models import Link


def home(request):
    return HttpResponse('Hello World')


def links_list(request):
	links = Link.objects.all().order_by('date').reverse()
	return HttpResponse(serialize('json', links))


def all_entries(request):
    return false


class LinkCreateReadView(ListCreateAPIView):
    model = Link


class LinkReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    model = Link
