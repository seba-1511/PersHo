#-*- coding: utf-8 -*-
# Create your views here.

from django.http import HttpResponse, Http404
from django.shortcuts import redirect, render

from datetime import datetime

from nanoblog.forms import ContactForm


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


def contact(request):
    if request.method == 'POST':  # S'il s'agit d'une requête POST
        form = ContactForm(request.POST)  # Nous reprenons les données

        # Nous vérifions que les données envoyées sont valides
        if form.is_valid():

            # Ici nous pouvons traiter les données du formulaire
            sujet = form.cleaned_data['sujet']
            message = form.cleaned_data['message']
            envoyeur = form.cleaned_data['envoyeur']
            renvoi = form.cleaned_data['renvoi']

            # Nous pourrions ici envoyer l'e-mail grâce aux données que nous
            # venons de récupérer

            envoi = True

    else:  # Si ce n'est pas du POST, c'est probablement une requête GET
        form = ContactForm()  # Nous créons un formulaire vide

    return render(request, 'contact.html', locals())
