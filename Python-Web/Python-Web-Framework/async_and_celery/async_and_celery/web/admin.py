from django.conf.urls.static import static
from django.contrib import admin
from django.urls import reverse
from django.utils.safestring import mark_safe

from async_and_celery.web.models import Transcription


@admin.register(Transcription)
class TranscriptionAdmin(admin.ModelAdmin):
    list_display = ('pk', 'audio', 'transcribe')

    def transcribe(self, obj):
        transcribe_url = reverse('transcribe', kwargs={
            'pk': obj.pk,
        })

        return mark_safe(f'<a href="{transcribe_url}">Transcribe</a>')
