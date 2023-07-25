from rest_framework import generics, permissions
from base.models import Category
from base.serializers import CategorySerializer


class CategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryUpdateAPIView(generics.UpdateAPIView):
    queryset = Category.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = CategorySerializer

class CategoryCreateAPIView(generics.CreateAPIView):
    queryset = Category.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = CategorySerializer

class CategoryDeleteAPIView(generics.DestroyAPIView):
    queryset = Category.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = CategorySerializer
