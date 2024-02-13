from django.urls import path, include


urlpatterns = [
    path('', include('src.products.urls')),
    path('', include('src.orders.urls')),
]
