from rest_framework import routers

from .views import (
    CategoryViewSet,
    ProductViewSet,
)


router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = router.urls
