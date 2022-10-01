from django.db.models import *
from django.conf import settings

class Code(Model):
    class HintTypeChoices(IntegerChoices):
        POINTER = 1
        DIGIT = 2
    Order = PositiveIntegerField(null=True,blank=True)
    Answer = PositiveIntegerField(null=True)
    Location = CharField(max_length=100, blank=True)
    Hint = CharField(max_length=250)
    HintType = SmallIntegerField(choices=HintTypeChoices.choices,default=1)
    def __str__(self):
        return '%i. %s' % (self.Order, self.Hint)

class CodeFind(Model):
    User = ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE)
    Code = ForeignKey(Code, on_delete=CASCADE)
    Answer = PositiveIntegerField(null=True)
    def __str__(self):
        return '%s: %s' % (str(self.User), str(self.Code))
