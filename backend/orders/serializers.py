from rest_flex_fields import FlexFieldsModelViewSet

from products.serializers import ProductSerializer
from .models import Order

class OrderProductSerializer(ProductSerializer):

    """Changed product serializer"""

    class Meta:
        fields = (
            'id',
            'model',
            'title_en',
            'title_ru',
            'title_uz',
        )


class OrderSerializer(FlexFieldsModelViewSet):

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