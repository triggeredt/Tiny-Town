from django.db.models import *
from django.conf import settings

class Code(Model):
    Order = PositiveIntegerField()
    Answer = PositiveIntegerField(null=True)
    Latitude = FloatField()
    Longitude = FloatField()
    Hint = CharField(max_length=100)

class CodeFind(Model):
    User = ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE)
    Code = ForeignKey(Code, on_delete=CASCADE)
    Answer = PositiveIntegerField(null=True)
