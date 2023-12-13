from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_flex_fields.views import FlexFieldsMixin
from rest_flex_fields.utils import is_expanded
from django_filters import rest_framework as filters

from .permissions import IsAdminOrReadOnly
from .pagination import CustomPagination
from .filters import ProductFilter
from .models import (
    Category,
    Product,
)
from .serializers import (
    CategorySerializer,
    ProductSerializer,
)

class CategoryViewSet(FlexFieldsMixin, viewsets.ModelViewSet):

    """Category Model View Set"""

    queryset = Category.objects.all().select_related('parent').filter(parent=None)
    serializer_class = CategorySerializer
    permission_classes = [IsAdminOrReadOnly,]



class ProductViewSet(FlexFieldsMixin, viewsets.ModelViewSet):
    
    """Product Model View Set"""

    serializer_class = ProductSerializer
    permission_classes = (IsAdminOrReadOnly,)
    pagination_class = CustomPagination
    filter_backends = (filters.DjangoFilterBackend, SearchFilter, OrderingFilter,)
    filterset_class = ProductFilter
    search_fields = ['title_en', 'title_ru', 'title_uz', 'model',]
    ordering_fields = ['created_at',]
    permit_list_expands = ['brand', 'category', 'images',]
    
    def get_queryset(self):

        queryset = Product.objects.all()\
                    # .annotate(rating=Avg('ratings__rate'))

        if is_expanded(self.request, 'category'):
            queryset = queryset.select_related('category')

        if is_expanded(self.request, 'brand'):
            queryset = queryset.select_related('brand')

        if is_expanded(self.request, 'images'):
            queryset = queryset.prefetch_related('images')
        
        return queryset