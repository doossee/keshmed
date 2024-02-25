from django.conf import settings
from django.urls import path, include, re_path
from django.contrib import admin
from django.views.generic import TemplateView
from django.conf.urls.static import static


urlpatterns = [  
    path('djadminsite/', admin.site.urls),

    path('auth/', include('djoser.urls')),                                                        
    path('auth/', include('djoser.urls.jwt')),                                                    

    path('api/', include('src.urls')),
]


# if settings.DEBUG:
#     urlpatterns += path("__debug__/", include("debug_toolbar.urls")),
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)