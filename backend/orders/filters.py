from django_filters import rest_framework as filters
from .models import Order

class OrderFilter(filters.FilterSet):

    """Order filterset"""

    product = filters.NumberFilter(field_name='product', lookup_expr='exact')
    country = filters.NumberFilter(field_name='country', lookup_expr='exact')
    checked = filters.NumberFilter(field_name='checked', lookup_expr='exact')


    