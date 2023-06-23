from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

# Create your models here.


class ProfileModel(models.Model):

    email = models.EmailField(
        verbose_name='Email',
        null=False,
        blank=False,
    )
    age = models.IntegerField(
        verbose_name='Age',
        null=False,
        blank=False,
    )
    password = models.CharField(
        verbose_name='Password',
        max_length=30,
        null=False,
        blank=False,

    )
    first_name = models.CharField(
        verbose_name='First Name',
        max_length=30,
        null=True,
        blank=True,
    )
    last_name = models.CharField(
        verbose_name='Last Name',
        max_length=30,
        null=True,
        blank=True,
    )
    profile_picture = models.URLField(
        verbose_name='Profile Picture',
        null=True,
        blank=True,
    )


class GameModel(models.Model):

    title = models.CharField(
        verbose_name='Title',
        max_length=30,
        unique=True,
        null=False,
        blank=False,
    )
    CATEGORY_CHOICES = {
        ("Action", "Action"),
        ("Adventure", "Adventure",),
        ("Puzzle", "Puzzle"),
        ("Strategy", "Strategy"),
        ("Sports", "Sports"),
        ("Board/Card Game", "Board/Card Game"),
        ("Other", "Other"),

    }
    category = models.CharField(
        verbose_name='Category',
        max_length=15,
        choices=CATEGORY_CHOICES,
        null=False,
        blank=False,
    )
    rating = models.FloatField(
        verbose_name='Rating',
        validators=[MinValueValidator(0.5), MaxValueValidator(1)],
        null=False,
        blank=False,

    )
    max_level = models.IntegerField(
        verbose_name='Max Level',
        validators=[MinValueValidator(1)],
        null=True,
        blank=True,
    )
    image_url = models.URLField(
        verbose_name='Image URL',
        null=False,
        blank=False,
    )
    summary = models.TextField(
        verbose_name='Summary',
        null=True,
        blank=True,
    )
