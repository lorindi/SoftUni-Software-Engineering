from django.urls import path

from for_deploy.web.views import IndexView

urlpatterns = (
    path('', IndexView.as_view(), name='index'),
)
