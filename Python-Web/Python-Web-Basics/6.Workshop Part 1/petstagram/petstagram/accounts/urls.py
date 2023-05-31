from django.contrib.auth import login
from django.urls import path, include

from petstagram.accounts.views import login_user, register_user, details_user, edit_user, delete_user

urlpatterns = [
    path('login/', login_user, name='login user'),
    path('register/', register_user, name='register user'),
    path('profile/<int:pk>/', include([
        path('', details_user, name='details user'),
        path('edit/', edit_user, name='edit user'),
        path('delete/', delete_user, name='deletes user'),
    ])),


]