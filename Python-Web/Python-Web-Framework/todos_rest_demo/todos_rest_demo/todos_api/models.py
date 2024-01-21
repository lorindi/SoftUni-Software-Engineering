from django.contrib.auth import get_user_model
from django.db import models

UserModel = get_user_model()


class Category(models.Model):
    MAX_NAME_LENGTH = 15
    name = models.CharField(
        max_length=MAX_NAME_LENGTH,
    )


class Todo(models.Model):
    MAX_TITLE_LENGTH = 30
    title = models.CharField(
        max_length=MAX_TITLE_LENGTH,
    )

    description = models.TextField()

    is_done = models.BooleanField(
        default=False,
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.DO_NOTHING,
    )

    user = models.ForeignKey(
        UserModel,
        on_delete=models.DO_NOTHING,
        default=1,
    )
