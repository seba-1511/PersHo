from django.conf.urls import patterns, url

from login import views

urlpatterns = patterns(
    'login.views',
    url(
        regex=r'^auth$',
        view='authentification',
        name='authentification_urls',
    ),

)
