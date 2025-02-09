from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status

# Create your views here.


def index(request, *args, **kwargs):
    
    return render(request, 'frontend/index.html')
