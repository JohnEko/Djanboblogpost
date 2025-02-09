from django.urls import path
from . import views


urlpatterns = [
    path("home/", views.home, name="home"),
    path("create/", views.create_news, name="create"),
    path("news/<str:pk>/", views.get_news, name="news"),
    path("edit-news/<str:pk>/", views.update_news, name="edit-news"),
    path("delete/<str:pk>/", views.delete_news, name="delete"),


]