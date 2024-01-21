from django.urls import path
# from django.urls.resolvers import

from exceptions_logging_demos.web.views import index

urlpatterns = (
    path('', index, name='index'),
)
