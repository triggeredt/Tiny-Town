from django.urls import path
from .views import *
app_name = 'treasurehunt'
urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('<int:code_id>', CodeView.as_view(), name='code'),
]
