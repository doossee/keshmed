from django.conf import settings
from rest_framework import serializers
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

    thumbnail = serializers.ReadOnlyField(source="thumbnail.url")
    medium_square_crop = serializers.ReadOnlyField(source="medium_square_crop.url")

    class Meta:
        model = Brand
        fields = [
            'id',
            'name',
            'description_en',
            'description_ru',
            'description_uz',
            'country',
            'image',
            'thumbnail',
            'medium_square_crop'
        ]


class AbstractCategorySerializer(serializers.ModelSerializer):

    """Abstract Category Serializer"""

    class Meta:
        model = Category
        fields = [
            'id',
            'lft',
            'rght',
            'tree_id',
            'level',
            'name_en',
            'name_ru',
            'name_uz',
            'parent',
        ]


class CategoryExpandSerializer(AbstractCategorySerializer):

    """Category expand"""

    class Meta(AbstractCategorySerializer.Meta):
        depth = 5


class CategoryTreeSerializer(AbstractCategorySerializer):

    """Category Serializer"""

    children = serializers.SerializerMethodField()

    def get_children(self, instance):

        children = instance.get_children()
        serializer = CategoryTreeSerializer(children, many=True)
        return serializer.data

    class Meta(AbstractCategorySerializer.Meta):
        meta = AbstractCategorySerializer.Meta
        fields = meta.fields + ['children']
        

class ImageSerializer(FlexFieldsModelSerializer):

    """Image Serializer"""

    thumbnail = serializers.ReadOnlyField(source="thumbnail.url")
    medium_square_crop = serializers.ReadOnlyField(source="medium_square_crop.url")

    class Meta:
        model = Image
        fields = '__all__'


class ProductSerializer(FlexFieldsModelSerializer):

    """Product Serializer"""
    
    class Meta:
        model = Product
        fields = '__all__'
        expandable_fields = {
            'brand': BrandSerializer,
            'category': CategoryExpandSerializer,
            'images': (ImageSerializer, {'many': True}),
        }