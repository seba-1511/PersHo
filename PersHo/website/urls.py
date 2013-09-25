from django.conf.urls import patterns, url

from nanoblog import views

urlpatterns = patterns(
    'website.views',
    url(
    	regex = r'^$',
    	view = 'home',
    	name = 'basic_urls',
    	),

)
