from django.contrib import admin

from django101.tasks.models import Task


# Register your models here.


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'priority')
