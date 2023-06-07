from django.urls import path, include

from my_plant_app.web.views import home_page, create_profile, details_profile, edit_profile, delete_profile, catalogue, \
    plant_details, plant_edit, plant_delete, plant_create

urlpatterns = [
    path('', home_page, name='home page'),
    path('profile/', include([
        path('create/', create_profile, name='create profile'),
        path('details/', details_profile, name='details profile'),
        path('edit/', edit_profile, name='edit profile'),
        path('delete/', delete_profile, name='delete profile'),
    ])),
    path('catalogue/', catalogue, name='catalogue'),
    path('create/', plant_create, name='plant create'),
    path('details/<int:pk>', plant_details, name='plant details'),
    path('edit/<int:pk>', plant_edit, name='plant edit'),
    path('delete/<int:pk>', plant_delete, name='plant delete'),
]