from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
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

class CodeViewSet(TopViewSet):
    permission_classes = [permissions.IsAuthenticated,HasPermissions]
    queryset = Code.objects.all()
    serializer_class = CodeSerializer
    @action(detail=True, methods=['get'])
    def find(self, request, pk):
        codefind = get_object_or_404(CodeFind, User=request.user, Code_id=pk)
        return HttpResponseRedirect('/treasurehunt/codefind/' + str(codefind.id))

class CodeFindViewSet(TopViewSet):
    permission_classes = [permissions.IsAuthenticated,IsOwner,HasPermissions]
    queryset = CodeFind.objects.all()
    serializer_class = CodeFindSerializer
    def get_queryset(self):
        return self.queryset.filter(User=self.request.user)
    def perform_create(self, serializer):
        serializer.save(User=self.request.user)
