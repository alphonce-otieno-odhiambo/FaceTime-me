from django.urls import path
from . import views



urlpatterns = [
    path('', views.lobby, name="lobby"),
    path('room/', views.room, name="room"),
    path('get_token/', views.getToken, name="room"),
    path('create_member/', views.createUser, name="member"),
    path('get_Members/', views.getMembers, name="getMembers"),
    path('delete_member/', views.deleteMember, name="getMembers"),
]
