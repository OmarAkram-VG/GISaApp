from __future__ import unicode_literals
from django.contrib.gis.db import models


# Create your models here.

class Shop(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=150,default='none')
    location = models.PointField(srid=4326)

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'ind'
