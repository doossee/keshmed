from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_flex_fields.views import FlexFieldsMixin
from rest_flex_fields.utils import is_expanded
from django_filters import rest_framework as filters

from .pagination import CustomPagination
from .filters import OrderFilter
from .models import Order
from .serializers import OrderSerializer

class OrderViewSet(FlexFieldsMixin, viewsets.ModelViewSet):

    """Order Model View Set"""

    serializer_class = OrderSerializer
    permission_classes = (AllowAny,)
    # pagination_class = CustomPagination
    filter_backends = (filters.DjangoFilterBackend, SearchFilter, OrderingFilter,)
    filterset_class = OrderFilter
    search_fields = ['first_name', 'last_name', 'phone',]
    ordering_fields = ['created_at',]
    permit_list_expands = ['product',]

    def get_queryset(self):
        
        queryset = Order.objects.all()

        if is_expanded(self.request, 'product'):
            queryset = queryset.select_related('product')
        
        return queryset


