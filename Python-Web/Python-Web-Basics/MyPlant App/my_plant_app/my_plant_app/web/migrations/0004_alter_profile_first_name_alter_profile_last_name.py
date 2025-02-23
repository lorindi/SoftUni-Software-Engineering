# Generated by Django 4.2.2 on 2023-06-06 15:11

from django.db import migrations, models
import my_plant_app.web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0003_plant'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='first_name',
            field=models.CharField(max_length=20, validators=[my_plant_app.web.models.name_validator], verbose_name='First Name'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='last_name',
            field=models.CharField(max_length=20, validators=[my_plant_app.web.models.name_validator], verbose_name='Last Name'),
        ),
    ]
