#-*- coding: utf-8 -*-

from django.http import HttpResponse, Http404

def home(request):
	return HttpResponse('HomePage');