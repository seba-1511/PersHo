from django.conf.urls import patterns, url

from nanoblog import views

urlpatterns = patterns(
    'nanoblog.views',
    url(
    	regex = r'^$',
    	view = 'home',
    	name = 'basic_urls',
    	),

    # REST API urls
    url(
        regex=r'^api/$',
        view=views.PostCreateReadView.as_view(),
        name='post_rest_api',
    ),

    url(
        regex=r'^api/(?P<post_id>[-\w]+)/$',
        view=views.PostReadUpdateDeleteView.as_view(),
        name='post_rest_api',
    ),

)
