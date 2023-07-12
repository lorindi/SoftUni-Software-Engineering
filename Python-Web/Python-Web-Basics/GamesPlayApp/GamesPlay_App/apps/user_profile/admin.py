from django.contrib import admin

from apps.games.models import GamesModel
from apps.user_profile.models import ProfileModel

# Register your models here.

admin.site.register(ProfileModel)
admin.site.register(GamesModel)