from django.urls import path
from base.views.category_views import CategoryListAPIView, CategoryUpdateAPIView, CategoryCreateAPIView, CategoryDeleteAPIView, CategoryDetailAPIView

urlpatterns = [
    path('', CategoryListAPIView.as_view(), name='category-list'),
    path('update/<int:pk>/', CategoryUpdateAPIView.as_view(), name='category-update'),
    path('create/', CategoryCreateAPIView.as_view(), name='category-create'),
    path('delete/<int:pk>/', CategoryDeleteAPIView.as_view(), name='category-delete'),
    path('<int:pk>/', CategoryDetailAPIView.as_view(), name='product-detail'),
    
]
