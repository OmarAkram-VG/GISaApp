from django.conf.urls import url, include

from .views import  dataSet

urlpatterns = [
    url(r'^dataset/$', dataSet, name='data')
]
