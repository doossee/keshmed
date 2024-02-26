from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from rest_flex_fields.views import FlexFieldsMixin
from rest_flex_fields.utils import is_expanded

from drf_multiple_serializer import ReadWriteSerializerMixin, ActionBaseSerializerMixin

from django_filters import rest_framework as filters

from .permissions import ReadOnly
from .pagination import CustomPagination
from .filters import ProductFilter
from .models import (
    Brand,
    Category,
    Product,
    Image,
)
from .serializers import (
    BrandRetrieveSerializer,
    BrandCreateSerializer,
    AbstractCategorySerializer,
    CategoryTreeSerializer,
    ImageCreateSerializer,
    ProductCreateSerializer,
    ProductRetrieveSerializer,
)


class BrandViewSet(ReadWriteSerializerMixin, FlexFieldsMixin, viewsets.ModelViewSet):

    """Brand Model View Set"""

    queryset = Brand.objects.all()
    serializer_classes = {
        'read': BrandRetrieveSerializer,
        'write': BrandCreateSerializer
    }
    # permission_classes = [IsAdminUser|ReadOnly]
    lookup_field = 'slug'
    

class CategoryViewSet(ActionBaseSerializerMixin, viewsets.ModelViewSet):

    """Category Model View Set"""

    queryset = Category.objects.all()
    serializer_classes = {
        'default' : AbstractCategorySerializer,
        'list_tree': CategoryTreeSerializer,
    }
    # permission_classes = [IsAdminUser|ReadOnly]
    pagination_class = CustomPagination
    lookup_field = 'slug'
    filter_backends = (filters.DjangoFilterBackend, SearchFilter, OrderingFilter,)
    search_fields = ['name_uz', 'name_ru', 'name_en',]

    @action(detail=False, methods=['GET'])
    def list_tree(self, request):
        queryset = Category.objects.all().select_related('parent').filter(parent=None)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ProductViewSet(ActionBaseSerializerMixin, FlexFieldsMixin, viewsets.ModelViewSet):
    
    """Product Model View Set"""

    serializer_classes = {
        'default': ProductRetrieveSerializer,
        'create': ProductCreateSerializer,
        'create_image': ImageCreateSerializer
    }
    # permission_classes = [IsAdminUser|ReadOnly]
    pagination_class = CustomPagination
    lookup_field = 'slug'
    filter_backends = (filters.DjangoFilterBackend, SearchFilter, OrderingFilter,)
    filterset_class = ProductFilter
    search_fields = ['title_en', 'title_ru', 'title_uz', 'model',]
    ordering_fields = ['created_at',]
    permit_list_expands = ['brand', 'category', 'images',]

    @action(detail=True, methods=['POST'])
    def create_image(self, request, slug=None):
        product = self.get_object()
        
        image_data = request.data.get('image')

        if image_data:
            image = Image(product=product, image=image_data)
            image.save()

            action_serializer = self.get_serializer_class_by_action()
            serializer = action_serializer(image)

            return Response(serializer.data, status=201)
        else:
            return Response({'detail': 'Image data is required.'}, status=400)
    
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