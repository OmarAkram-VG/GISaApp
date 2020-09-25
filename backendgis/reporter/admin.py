from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin
from .models import Shop


# Register your models here.

class ShopAdmin(LeafletGeoAdmin):
    pass


admin.site.register(Shop, ShopAdmin)
