from django.urls import path
from base.views.order_views import *


urlpatterns = [
    path('carts/', CartListCreateView.as_view(), name='cart-list-create'),
    path('carts/<int:pk>/', CartRetrieveUpdateDestroyView.as_view(), name='cart-retrieve-update-destroy'),
    path('cart-items/', CartItemCreateView.as_view(), name='cart-item-create'),
    path('cart-items/<int:pk>/', CartItemRetrieveUpdateDestroyView.as_view(), name='cart-item-retrieve-update-destroy'),
    path('orders/', OrderListCreateView.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', OrderRetrieveUpdateDestroyView.as_view(), name='order-retrieve-update-destroy'),
]