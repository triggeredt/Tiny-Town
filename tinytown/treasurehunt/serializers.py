from rest_framework import serializers
from .models import *
class CodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Code
        fields = '__all__'
class CodeFindSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeFind
        exclude = ['User']
