from django.shortcuts import render
from django.http import HttpResponse
from track_time.timer import *

def index(request):
    # return HttpResponse("Hello, world. You're at the track time index.")
    return render(request, 'homepage.html')

def output(request):

    return render(request,'homepage.html')

# Create your views here.
