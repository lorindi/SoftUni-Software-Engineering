from django.core.exceptions import ValidationError
from django.db import models
from django.core.validators import MinValueValidator, MinLengthValidator
# Create your models here.


def min_char_check(value: str):
    if len(value) < 2:
        raise ValidationError("The username must be a minimum of 2 chars")


def year_check(value):
    if not 1980 <= value <= 2049:
        raise ValidationError("Year must be between 1980 and 2049")


class Profile(models.Model):

    username = models.CharField(
        verbose_name='Username',
        max_length= 10,
        validators=[min_char_check],
        null=False,
        blank=False,
    )
    email = models.EmailField(
        verbose_name='Email',
        null=False,
        blank=False,
    )
    age = models.IntegerField(
        verbose_name='Age',
        null=False,
        blank=False,
        validators=[MinValueValidator(18)],
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

    @property
    def get_full_name(self):
        first = ''
        last = ''
        if self.first_name:
            first = self.first_name
        if self.last_name:
            last = self.last_name
        return f'{first} {last}'


CAR_CHOICES = (
    ("Sports Car", "Sports Car"),
    ("Pickup", "Pickup"),
    ("Crossover", "Crossover"),
    ("Minibus", "Minibus"),
    ("Other", "Other"),
)


class Car(models.Model):

    type = models.CharField(
        max_length=10,
        verbose_name='Type',
        choices=CAR_CHOICES,
        null=False,
        blank=False,
    )

    model = models.CharField(
        max_length=20,
        verbose_name='Model',
        validators=[MinLengthValidator(2)],
        null=False,
        blank=False,

    )
    year = models.IntegerField(
        verbose_name='Year',
        null=False,
        blank=False,
        validators=[year_check],
    )
    image_url = models.URLField(
        verbose_name='Image Url',
        null=False,
        blank=False,

    )
    price = models.FloatField(
        verbose_name='Price',
        null=False,
        blank=False,
        validators=[MinValueValidator(1)]
    )

