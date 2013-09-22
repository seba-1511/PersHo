#-*- coding: utf-8 -*-
# Create your views here.

from django.http import HttpResponse, Http404
from django.shortcuts import redirect, render

from datetime import datetime


def home(request):
    text = '<b>Hello World !</b>'
    return HttpResponse(text)


def p(request, post_id):
    if int(post_id) > 1000:
        return notFound()
    response = 'You asked for article number:' + post_id
    return HttpResponse(response)


def notFound(request):
    raise Http404


def template(request):
    return render(request, 'tpl.html', {'actual_time': datetime.now()})
