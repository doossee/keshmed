from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.shortcuts import render

url_regex = r'\/|\b'.join([
    '/',
    '/login',
]) + r'\/'

def index(request):
    return render(request, 'index.html')


urlpatterns = [  
    path('djadminsite/', admin.site.urls),

    path('auth/', include('djoser.urls')),                                                        
    path('auth/', include('djoser.urls.jwt')),                                                    

    path('api/v1/', include('products.urls')),
    path('api/v1/', include('orders.urls')),

    re_path(r'^(?!media/).*$', TemplateView.as_view(template_name='index.html')),
]

# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns += [
#         path('__debug__/', include(debug_toolbar.urls)),
#     ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)