from django.conf.urls import patterns, url

from nanolinks import views

urlpatterns = patterns(
    'nanolinks.views',
    url(
        regex=r'^$',
        view='home',
        name='basic_urls',
    ),

    url(
        regex=r'^links$',
        view='links_list',
        name='basic_urls',
    ),

    # REST API urls
    url(
        regex=r'^api/$',
        view=views.LinkCreateReadView.as_view(),
        name='links_rest_api',
    ),

    url(
        regex=r'^api/(?P<pk>[-\w]+)/$',
        view=views.LinkReadUpdateDeleteView.as_view(),
        name='links_rest_api',
    ),
)
