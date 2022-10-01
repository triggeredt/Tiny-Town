from .models import *
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import action
from rest_framework.response import Response
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

class TopViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    @action(detail=False, methods=['post'])
    def ischeckedin(self, request):
        return Response({'checkedin':request.user.has_perms(player_permissions)})
    def checkin(self, request):
        request.user.user_permissions.add(*player_permissions)
        return Response({'checkedin':True})

class CodeViewSet(TopViewSet):
    permission_classes = [permissions.IsAuthenticated,HasPermissions]
    queryset = Code.objects.all()
    serializer_class = CodeSerializer

class CodeFindViewSet(TopViewSet):
    permission_classes = [permissions.IsAuthenticated,IsOwner,HasPermissions]
    queryset = CodeFind.objects.all()
    serializer_class = CodeFindSerializer
    def get_queryset(self):
        return self.queryset.filter(User=self.request.user)
    def perform_create(self, serializer):
        serializer.save(User=self.request.user)
