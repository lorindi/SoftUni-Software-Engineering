from django.core.exceptions import ValidationError
from django.db import models
from django.core.validators import MinLengthValidator, MinValueValidator


def check_first_letter(value):
    if not value[0].isalpha():
        raise ValidationError("Your name must start with a letter!")


def only_letters_check(value):
    for ch in value:
        if not ch.isalpha():
            raise ValidationError("Fruit name should contain only letters!")


class Profile(models.Model):
    first_name = models.CharField(
        verbose_name='First Name',
        max_length=25,
        validators=[MinLengthValidator(2), check_first_letter],
        null=False,
        blank=False,
    )

    last_name = models.CharField(
        verbose_name='Last Name',
        max_length=35,
        validators=[MinLengthValidator(1), check_first_letter],
        null=False,
        blank=False,
    )

    email = models.CharField(
        verbose_name='Email',
        max_length=40,
        null=False,
        blank=False,
    )

    password = models.CharField(
        verbose_name='Password',
        max_length=20,
        validators=[MinLengthValidator(8)],
        null=False,
        blank=False,
    )

    image_url = models.URLField(
        verbose_name='Image URL',
        null=True,
        blank=True,
    )

    age = models.IntegerField(
        verbose_name='Age',
        default=18,
        null=True,
        blank=True,
    )


class Fruit(models.Model):
    name = models.CharField(
        verbose_name='Name',
        max_length=30,
        validators=[MinLengthValidator(2), only_letters_check],
        null=False,
        blank=False,
    )

    image_url = models.URLField(
        verbose_name='Image URL',
        null=False,
        blank=False,
    )

    description = models.TextField(
        verbose_name='Description',
        null=False,
        blank=False,
    )

    nutrition = models.TextField(
        verbose_name='Nutrition',
        null=True,
        blank=True,
    )

