from django.urls import path
from base.views.product_views import * 

urlpatterns = [
    path('', ProductListAPIView.as_view(), name='product-list'),
    path('<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('create/', ProductCreateAPIView.as_view(), name='product-create'),
    path('update/<int:pk>/', ProductUpdateAPIView.as_view(), name='product-update'),
    path('delete/<int:pk>/', ProductDeleteAPIView.as_view(), name='product-delete'),

]
