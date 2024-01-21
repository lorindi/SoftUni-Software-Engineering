from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('exceptions_logging_demos.web.urls')),
]

handler500 = TemplateView.as_view(template_name='server_error.html')
