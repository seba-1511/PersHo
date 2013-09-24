from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from nanoblog import views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()
urlpatterns = patterns(
    '',
    # Examples:
    # url(r'^$', 'PersHo.views.home', name='home'),
    # url(r'^PersHo/', include('PersHo.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),

    url(
        r'^$',
        views.home
    ),
    url(
        r'^b/',
        include('nanoblog.urls')
    ),
    url(
        r'^l/',
        include('nanolinks.urls')
    ),
)

# To serve static files. Only in dev mode, otherwise the webserver should
# do that.
urlpatterns += staticfiles_urlpatterns()
