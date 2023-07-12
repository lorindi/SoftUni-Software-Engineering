from django.urls import path

from apps.games.views import game_create, game_details, game_edit, game_delete

'''saita/game/create'''
urlpatterns = [

    path("create/", game_create, name='game_create'),
    path("details/<int:pk>/", game_details, name='game_details'),
    path("edit/<int:pk>/", game_edit, name='game_edit'),
    path("delete/<int:pk>/", game_delete, name='game_delete'),
]