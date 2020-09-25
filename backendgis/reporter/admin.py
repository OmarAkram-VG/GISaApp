from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin
from .models import Inc


# Register your models here.

class IncAdmin(LeafletGeoAdmin):
    pass


admin.site.register(Inc, IncAdmin)
