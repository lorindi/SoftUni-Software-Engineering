from django.core.exceptions import ValidationError
from django.core.validators import MinLengthValidator, MinValueValidator
from django.db import models


# Create your models here.

# def name_validator(value: str):
#     if not value[0].upper():
#         raise ValidationError("Your name must start with a capital letter!")


def only_letters_validator(value: str):
    for ch in value:
        if not ch.isalpha() and not '_' in ch:
            raise ValidationError("Ensure this value contains only letters, numbers, and underscore.")


class Profile(models.Model):

    username = models.CharField(
        max_length=15,
        null=False,
        blank=False,
        validators=[
            MinLengthValidator(2), only_letters_validator,
        ],
        verbose_name='Username'
    )

    email = models.EmailField(blank=False, null=False)

    age = models.PositiveIntegerField(
        blank=True,
        null=True,
    )

class Album(models.Model):

    album_name = models.CharField(
        max_length=30,
        verbose_name='Album Name',
        unique=True,
        null=False,
        blank=False,


    )

    artist = models.CharField(
        max_length=30,
        verbose_name='Artist',
        null=False,
        blank=False,
    )

    GENRE_TYPE = {
        ("Pop Music", "Pop Music"),
        ("Jazz Music",  "Jazz Music"),
        ("R&B Music", "R&B Music"),
        ("Rock Music", "Rock Music"),
        ("Country Music", "Country Music"),
        ("Dance Music", "Dance Music"),
        ("Hip Hop Music", "Hip Hop Music"),
        ("Other", "Other"),

    }

    genre = models.CharField(
        max_length=30,
        verbose_name='Genre',
        choices=GENRE_TYPE,
        null=False,
        blank=False,

    )

    description = models.TextField(
        verbose_name='Description',
        blank=True,
        null=True,
    )

    image_url = models.URLField(
        verbose_name='Image URL',
        null=False,
        blank=False,

    )

    price = models.FloatField(
        null=False,
        blank=False,
        validators=(
                MinValueValidator(0.0, 'The price cannot be below 0.0'),
            ),

    )


