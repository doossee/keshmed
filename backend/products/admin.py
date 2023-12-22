from django.contrib import admin

from .models import (
    Brand,
    Category,
    Product,
    Image,
    SalesArea,
    Rating
)

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    pass

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    pass

@admin.register(SalesArea)
class SalesAreaAdmin(admin.ModelAdmin):
    pass

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    pass
