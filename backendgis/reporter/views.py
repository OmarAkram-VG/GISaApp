from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.serializers import serialize
from django.http import HttpResponse
from .models import Shop

def dataSet(request):
    currDataset = serialize('geojson', Shop.objects.all())
    return HttpResponse(currDataset, content_type='json')
