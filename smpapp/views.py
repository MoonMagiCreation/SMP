from django.shortcuts import render
from django.views import View


# Create your views here.
class index(View):
    def get(self, request):
        return render(request, "index.html")

class simulacionmanual(View):
    def get(self, request):
        return render(request, "simulacionmanual.html")

class sobre(View):
    def get(self, request):
        return render(request, "sobre.html")

