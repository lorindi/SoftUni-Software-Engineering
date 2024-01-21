from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('signals_middlewares_cache_session_demos.web.urls')),
]
