from django.urls import path

from apps.user_profile.views import profile_create, profile_details, profile_edit, profile_delete

'''saita/game/create'''
urlpatterns = [

    path("create/", profile_create, name='profile_create'),
    path("details/", profile_details, name='profile_details'),
    path("edit/", profile_edit, name='profile_edit'),
    path("delete/", profile_delete, name='profile_delete'),
]