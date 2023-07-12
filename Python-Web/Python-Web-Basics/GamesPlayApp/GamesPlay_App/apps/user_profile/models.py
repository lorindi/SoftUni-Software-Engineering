from django.core import validators
from django.db import models

# Create your models here.


class ProfileModel(models.Model):

    email = models.EmailField(
        verbose_name='Email'
    )

    age = models.IntegerField(
        verbose_name='Age',
        validators=(
            validators.MinValueValidator(12),
        )
    )

    password = models.CharField(
        blank=False,
        null=False,
        max_length=30,
        verbose_name='Password'
    )

    first_name = models.CharField(
        blank=True,
        null=True,
        max_length=30,
        verbose_name='First Name'
    )

    last_name = models.CharField(
        blank=True,
        null=True,
        max_length=30,
        verbose_name='Last Name'
    )

    profile_picture = models.URLField(
        blank=True,
        null=True,
    )
