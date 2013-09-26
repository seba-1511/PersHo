#-*- coding: utf-8 -*-

from django.http import HttpResponse, Http404
from django.shortcuts import redirect, render


def home(request):
    return render(request, 'home.html', locals())
