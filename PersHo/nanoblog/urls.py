from django.conf.urls import patterns, url

from nanoblog import views

urlpatterns = patterns(
    'nanoblog.views',
    url(r'^$', 'home'),
    url(r'^p/(?P<post_id>\d+)$', 'p'),
    url(r'^template/$', 'template'),
    url(r'^contact/$', 'contact'),
    
    url(
        regex=r'^api/$',
        view=views.PostCreateReadView.as_view(),
        name='post_rest_api'),
    url(
    	regex = r'^api/(?P<id>[-\w]+)/$',
    	view=views.PostReadUpdateDeleteView.as_view(),
    	name='post_rest_api'
    ),
)
