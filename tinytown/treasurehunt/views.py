from .models import *
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from knox.auth import TokenAuthentication
from .serializers import *

player_permissions = (
    'treasurehunt.view_code',
    'treasurehunt.change_codefind',
    'treasurehunt.view_codefind',
)

class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.User == request.user

class HasPermissions(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.has_perms(player_permissions)

class CodeViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [permissions.IsAuthenticated,HasPermissions]
    queryset = Code.objects.all()
    serializer_class = CodeSerializer

class CodeFindViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [permissions.IsAuthenticated,IsOwner,HasPermissions]
    queryset = CodeFind.objects.all()
    serializer_class = CodeFindSerializer
    def get_queryset(self):
        return self.queryset.filter(User=self.request.user)
    def perform_create(self, serializer):
        serializer.save(User=self.request.user)
