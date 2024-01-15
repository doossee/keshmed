from rest_flex_fields import FlexFieldsModelSerializer

from products.serializers import ProductSerializer
from .models import Order
from products.models import Product

class OrderProductSerializer(ProductSerializer):

    """Changed product serializer"""

    class Meta:
        model = Product
        fields = (
            'id',
            'model',
            'title_en',
            'title_ru',
            'title_uz',
        )


class OrderSerializer(FlexFieldsModelSerializer):

    """Order Serializer"""

    class Meta:
        model = Order
        fields = (
            'id',
            'product',
            'first_name',
            'last_name',
            'country',
            'phone',
            'message',
            'checked',
            'created_at',
            'updated_at',
        )
        expandable_fields = {
            'product': OrderProductSerializer,
        }