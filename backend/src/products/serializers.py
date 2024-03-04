import os
from django.conf import settings
from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from .models import (
    Brand,
    Category,
    Product,
    Image,
)


class BrandSerializer(serializers.ModelSerializer):

    thumbnail = serializers.SerializerMethodField()

    """Brand Serializer"""

    class Meta:
        model = Brand
        fields = [
            'id',
            'name',
            'image',
            'thumbnail',
        ]

    def to_representation(self, instance):
        data = super().to_representation(instance)

        if hasattr(instance, 'image') and hasattr(instance.image, 'url'):
            data['image'] = f"{os.getenv('MEDIA_PREFIX', '')}{instance.image.url}"

        return data

    def get_thumbnail(self, obj):
        return os.getenv('MEDIA_PREFIX', '') + obj.thumbnail.url  
        

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


class ImageSerializer(serializers.ModelSerializer):

    """Image write serialier"""

    thumbnail = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = [
            'id',
            'product',
            'image',
            'thumbnail',
        ]

    def to_representation(self, instance):
        data = super().to_representation(instance)

        if hasattr(instance, 'image') and hasattr(instance.image, 'url'):
            data['image'] = f"{os.getenv('MEDIA_PREFIX', '')}{instance.image.url}"

        return data
    
    def get_thumbnail(self, obj):
        return os.getenv('MEDIA_PREFIX', '') + obj.thumbnail.url


class ProductDefaultSerializer(serializers.ModelSerializer):

    """Product default serializer"""

    class Meta:
        model = Product
        fields = '__all__'
        

class ProductRetrieveSerializer(FlexFieldsModelSerializer):

    """Product retrieve Serializer"""

    class Meta:
        model = Product
        fields = '__all__'
        expandable_fields = {
            'brand': BrandSerializer,
            'category': CategoryExpandSerializer,
            'images': (ImageSerializer, {'many': True}),
        }
