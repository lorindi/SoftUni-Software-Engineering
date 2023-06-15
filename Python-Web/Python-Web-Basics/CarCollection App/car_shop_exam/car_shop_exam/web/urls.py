from car_shop_exam.web.views import index, profile_create, profile_details, profile_edit, profile_delete, catalogue, \
    car_create, car_details, car_delete, car_edit
from django.urls import path, include

urlpatterns = [
    path('', index, name='home page'),
    path('catalogue/', catalogue, name='catalogue'),
    path('profile/', include([
        path('create/', profile_create, name='profile create'),
        path('details/', profile_details, name='profile details'),
        path('edit/ ', profile_edit, name='profile edit'),
        path('delete/ ', profile_delete, name='profile delete'),

    ])),
    path('car/', include([
        path('create/', car_create, name='car create'),
        path('<int:pk>/details/', car_details, name='car details'),
        path('<int:pk>/edit/ ', car_edit, name='car edit'),
        path('<int:pk>/delete/ ', car_delete, name='car delete'),
    ])),
]