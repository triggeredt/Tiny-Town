from .models import *
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin

class HomeView(LoginRequiredMixin, View):
    def get(self, request):
        return render(request, 'treasurehunt/home_placeholder.html')

class CodeView(LoginRequiredMixin, View):
    def get(self, request, code_id):
        code = get_object_or_404(Code, pk=code_id)
        try:
            user_answer = CodeFind.objects.get(User=request.user, Code=code).Answer
        except CodeFind.DoesNotExist:
            user_answer = ''
        return render(request, 'treasurehunt/code_placeholder.html', {'code':code, 'user_answer':user_answer})
    def post(self, request, code_id):
        if request.POST['answer'].isnumeric():
            codefind, created = CodeFind.objects.update_or_create(User=request.user, Code_id=code_id, defaults={'Answer':int(request.POST['answer'])})
            return HttpResponse("Submitted" if created else "Updated")
        else:
            return HttpResponseBadRequest()

class CheckInView(LoginRequiredMixin, View):
    def get(self, request):
        return render(request, 'treasurehunt/checkin_placeholder.html')
    def post(self, request):
        return HttpResponseRedirect()
