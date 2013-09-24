from django.db import models


class Link(models.Model):
    link = models.CharField(max_length=1024)
    name = models.CharField(max_length=255)
    date = models.DateTimeField(
    	auto_now_add = True,
    	auto_now = False,
    )

    def __unicode__(self):
    	return u'%s' % self.name
