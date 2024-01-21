from django.urls import path

from drf_demos.web.views import IndexView


urlpatterns = (
    path('', IndexView.as_view(), name='index'),
)
