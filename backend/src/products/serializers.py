from django.conf import settings
from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from .models import (
    Brand,
    Category,
    Product,
    Image,
)


class BrandRetrieveSerializer(serializers.ModelSerializer):

    """Brand Serializer"""

    class Meta:
        model = Brand
        fields = [
            'id',
            'name',
            'slug',
            'description_en',
            'description_ru',
            'description_uz',
            'get_image',
            'get_thumbnail',
            'get_medium_square_crop'
        ]
        

class BrandCreateSerializer(serializers.ModelSerializer):
    
    """Brand serializer for create"""

    class Meta:
        model = Brand
        fields = [
            'id',
            'name',
            'description_en',
            'description_ru',
            'description_uz',
            'image'
        ]


class AbstractCategorySerializer(serializers.ModelSerializer):

    """Abstract Category Serializer"""

    class Meta:
        model = Category
        # fields = '__all__'
        fields = [
            'id',
            'lft',
            'rght',
            'tree_id',
            'level',
            'name_en',
            'name_ru',
            'name_uz',
            'slug',
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


class ImageCreateSerializer(serializers.ModelSerializer):

    """Image write serialier"""

    class Meta:
        model = Image
        fields = [
            'id',
            'product',
            'image'
        ]


class ImageReadSerializer(FlexFieldsModelSerializer):

    """Image read Serializer"""

    class Meta:
        model = Image
        fields = [
           'product',
           'get_image',
           'get_thumbnail',
           'get_medium_square_crop',
        ]


class ProductSerializer(FlexFieldsModelSerializer):

    """Product Serializer"""
    brand = serializers.SlugField(read_only=True, source='brand.slug')
    category = serializers.SlugField(read_only=True, source='category.slug')
    
    class Meta:
        model = Product
        fields = '__all__'
        expandable_fields = {
            'brand': BrandRetrieveSerializer,
            'category': CategoryExpandSerializer,
            'images': (ImageReadSerializer, {'many': True}),
        }
