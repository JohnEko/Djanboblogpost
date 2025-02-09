from django.shortcuts import render
from rest_framework import generics, status
from .models import Post
from .serializers import PostSerializer
from rest_framework.decorators import api_view 
from rest_framework.response import Response

# Create your views here.
# the decorator is automatically get request

@api_view(['GET'])
def home(request):
    post = Post.objects.all()
    serializer = PostSerializer(post, many=True)
    return Response(serializer.data)

# Getting a particular data from the news room
@api_view(["GET"])
def get_news(request, pk):
    news_id = Post.objects.get(id=pk)
    serializer =PostSerializer(news_id, many=False)
    return Response(serializer.data)


# creating a post request for newly created data
@api_view(['POST'])
def create_news(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Update a single user data from the rest api
@api_view(['PUT'])
def update_news(request, pk):
    try:
        post = Post.objects.get(id=pk)
    
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = PostSerializer(post, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_405_METHOD_NOT_ALLOWED)


# The api delete functions to delete news content and 
# if content dose not exist throw 404
@api_view(['DELETE'])
def delete_news(request, pk):
    try:
        post = Post.objects.get(id=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    post.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    