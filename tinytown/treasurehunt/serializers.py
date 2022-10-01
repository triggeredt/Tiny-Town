from rest_framework import serializers
from .models import *
class CodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Code
        fields = ['id','Order','Hint','HintType','AnswerDigit']
class CodeFindSerializer(serializers.ModelSerializer):
    Correct = serializers.BooleanField(source='is_correct', read_only=True)
    class Meta:
        model = CodeFind
        exclude = ['User']
