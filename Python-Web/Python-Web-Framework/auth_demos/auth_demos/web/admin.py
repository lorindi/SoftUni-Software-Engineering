from django.contrib import admin

from auth_demos.web.models import Article


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    pass
