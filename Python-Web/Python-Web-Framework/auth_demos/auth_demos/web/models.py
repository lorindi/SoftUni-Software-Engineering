from django.contrib.auth import get_user_model
from django.db import models

UserModel = get_user_model()
class Article(models.Model):
    created_on = models.DateTimeField(
        auto_now_add=True,
    )

    title=models.CharField(
        max_length=150,
        null=False,
        blank=False,
    )

    # def save(
    #     self, *args, **kwargs
    # ):
    #
    #     self.autoincremented_value = ....
    #
    #     return super().save(*args, **kwargs)
#
#
# class Profile(models.Model):
#     first_name = models.CharField(
#         max_length=30,
#     )
#
#     # ....
#
#     user = models.OneToOneField(
#         UserModel,
#     )