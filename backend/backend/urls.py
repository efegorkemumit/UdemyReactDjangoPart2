
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/categorys/', include('base.urls.category_urls')),
    path('api/products/', include('base.urls.product_urls')),
    path('api/orders/', include('base.urls.order_urls')),
    path('api/users/', include('base.urls.user_urls')),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)