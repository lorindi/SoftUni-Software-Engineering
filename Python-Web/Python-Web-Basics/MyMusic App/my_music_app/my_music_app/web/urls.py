from django.urls import path, include
from my_music_app.web.views import home_page, add_album, details_album, edit_album, \
    delete_album, profile_details, profile_delete
urlpatterns = [
    path('', home_page, name='home page'),
    path('album/', include([
        path('add/', add_album, name='add album'),
        path('details/<int:pk>/', details_album, name='details album'),
        path('edit/<int:pk>/', edit_album, name='edit album'),
        path(' delete/<int:pk>/', delete_album, name='delete album'),

    ])),
    path('profile/', include([
        path('details/', profile_details, name='profile details'),
        path('delete/', profile_delete, name='profile delete'),
    ]))

]