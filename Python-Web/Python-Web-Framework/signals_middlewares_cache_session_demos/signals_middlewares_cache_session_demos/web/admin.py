from django.contrib import admin

from signals_middlewares_cache_session_demos.web.models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    pass
