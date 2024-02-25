from django.contrib import admin

from .models import (
    Brand,
    Category,
    Product,
    Image,
)


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    # prepopulated_fields = {"slug": ["name"]}
    pass

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    # prepopulated_fields = {"slug": ["name"]}
    pass

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    # prepopulated_fields = {"slug": ["title"]}
    pass

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    pass
