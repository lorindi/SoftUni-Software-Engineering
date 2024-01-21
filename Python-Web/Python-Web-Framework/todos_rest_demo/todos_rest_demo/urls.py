from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/todos/', include('todos_rest_demo.todos_api.urls')),
    path('api/auth/', include('todos_rest_demo.accounts.urls')),
]
