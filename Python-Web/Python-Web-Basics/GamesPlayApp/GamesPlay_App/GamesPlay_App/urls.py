
from django.contrib import admin
from django.urls import path, include

'''
url => adress,  function view => 
'''
'''
saita/game/
'''
urlpatterns = [
    path("admin/", admin.site.urls),
    path("game/", include('apps.games.urls')),
    path("profile/", include('apps.user_profile.urls')),
    path("", include('apps.common.urls')),
]
