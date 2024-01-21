from django.db import models


class Article(models.Model):
    title = models.CharField(
        max_length=50,
        null=False,
    )

    content = models.TextField(
        null=False,
    )
