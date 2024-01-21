from django.urls import path
from lost_and_found.objects_posts import views

urlpatterns = (
    path('', views.IndexView.as_view(), name="index"),
    path('create/', views.create, name="create"),
    path('edit/<int:pk>', views.edit, name="edit"),
    path('delete/<int:pk>', views.delete, name="delete"),
    path('found/<int:pk>', views.found, name="found")
)
