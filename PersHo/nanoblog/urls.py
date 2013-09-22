from django.conf.urls import patterns, url

urlpatterns = patterns(
    'nanoblog.views',
    url(r'^$', 'home'),
    url(r'^p/(?P<post_id>\d+)$', 'p'),
    url(r'^template/$', 'template'),
    url(r'^contact/$', 'contact'),
)
