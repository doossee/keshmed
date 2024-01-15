from rest_framework import routers

from .views import (
    CategoryViewSet,
    CategoryTreeView,
    BrandViewSet,
    ImageViewSet,
    ProductViewSet,
)


router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'category-tree', CategoryTreeView, basename='tree')
router.register(r'brands', BrandViewSet, basename='brand')
router.register(r'images', ImageViewSet, basename='image')
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = router.urls
