from django.db import models

from lost_and_found.objects_posts.validators import validate_phone


class Object(models.Model):
    name = models.CharField(
        max_length=10
    )
    image = models.URLField()
    width = models.IntegerField()
    height = models.IntegerField()
    weight = models.FloatField()


class Post(models.Model):
    MAX_TITLE_LENGTH = 30
    MAX_DESCRIPTION_LENGTH = 500

    title = models.CharField(
        max_length=MAX_TITLE_LENGTH,
    )
    description = models.TextField(
        max_length=MAX_DESCRIPTION_LENGTH,
    )
    author_name = models.CharField(
        max_length=10
    )
    author_phone = models.CharField(
        max_length=10,
        validators=(validate_phone,)
    )
    found = models.BooleanField(
        default=False
    )
    object = models.ForeignKey(Object, on_delete=models.CASCADE)
