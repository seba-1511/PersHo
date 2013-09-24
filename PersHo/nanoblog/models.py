from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(null=True)
    date = models.DateTimeField(
        auto_now_add=True,
        auto_now=False,
        verbose_name='Publication Date'
    )

    def __unicode__(self):
        return u'%s' % self.title
