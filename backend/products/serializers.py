from rest_framework import serializers
from versatileimagefield.serializers import VersatileImageFieldSerializer
from rest_flex_fields import FlexFieldsModelSerializer

from .models import (
    Brand,
    Category,
    Product,
    Image,
    Rating        
)

class BrandSerializer(serializers.ModelSerializer):

    """Brand Serializer"""

    image = VersatileImageFieldSerializer(sizes='product_headshot')

    class Meta:
        model = Brand
        fields = '__all__'


class AbstractCategorySerializer(FlexFieldsModelSerializer):

    """Abstract Category Serializer"""

    class Meta:
        model = Category
        depth = 5
        fields = (
            'id',
            'lft',
            'rght',
            'tree_id',
            'level',
            'name_en',
            'name_ru',
            'name_uz',
            'parent',
        )


class CategorySerializer(AbstractCategorySerializer):

    """Category Serializer"""
    
    children = serializers.SerializerMethodField()
    
    def get_children(self, instance):
        
        children = instance.get_children()
        serializer = CategorySerializer(children, many=True)
        return serializer.data
    
    class Meta:
        model = Category
        depth = 5
        fields = (
            'id',
            'lft',
            'rght',
            'tree_id',
            'level',
            'name_en',
            'name_ru',
            'name_uz',
            'children'
        )


class ImageSerializer(serializers.ModelSerializer):

    """Image Serializer"""

    image = VersatileImageFieldSerializer(sizes='product_headshot')

    class Meta:
        model = Image
        fields = '__all__'


class ProductSerializer(FlexFieldsModelSerializer):
    
    """Product Serializer"""

    class Meta:
        model = Product
        fields = (
            'id',
            'model',
            'title_en',
            'title_ru',
            'title_uz',
            'description_en',
            'description_ru',
            'description_uz',
            'brand',
            'category',
            'condition',
            'year',
            'warranty',
            'shipping_from',
            'characteristics',
            'is_part',
            'for_sale',
            'sales_areas',
            'images',
            'created_at',
            'updated_at',
        )
        expandable_fields = {
            'brand': BrandSerializer,
            'category': AbstractCategorySerializer,
            'images': (ImageSerializer, {'many': True}),
        }