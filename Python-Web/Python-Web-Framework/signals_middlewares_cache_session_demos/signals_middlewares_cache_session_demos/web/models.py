from django.contrib.auth import get_user_model
from django.db import models

UserModel = get_user_model()


class Task(models.Model):
    title = models.CharField(
        max_length=15,
    )

    user = models.ForeignKey(
        UserModel,
        on_delete=models.DO_NOTHING,
    )

# Task.objects.all()
