#-*- coding: utf-8 -*-
# Create your views here.

from django.http import HttpResponse, Http404
from django.shortcuts import redirect


def home(request):
    text = '<b>Hello World !</b>'
    return HttpResponse(text)


def p(request, post_id):
    if int(post_id) > 1000:
        return notFound()
    response = 'You asked for article number:' + post_id
    return HttpResponse(response)


def notFound():
    raise Http404
