from django.conf.urls import patterns, url

from nanoblog import views

urlpatterns = patterns(
    'nanoblog.views',
    url(
    	regex = r'^$',
    	view = 'home',
    	name = 'basic_urls',
    	),

    url(
    	regex = r'^latest$',
    	view = 'latest_entries',
    	name = 'basic_urls'
    	),

    # REST API urls
    url(
        regex=r'^api/$',
        view=views.PostCreateReadView.as_view(),
        name='post_rest_api',
    ),

    url(
        regex=r'^api/(?P<pk>[-\w]+)/$',
        view=views.PostReadUpdateDeleteView.as_view(),
        name='post_rest_api',
    ),

)
