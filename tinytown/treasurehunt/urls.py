from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
app_name = 'treasurehunt'
router = DefaultRouter()
router.register(r'code', CodeViewSet)
router.register(r'codefind', CodeFindViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('', include('knox.urls')),
]
