from django.db import models


class Transcription(models.Model):
    text = models.TextField(
        null=True,
        blank=True,
    )
    audio = models.FileField()
