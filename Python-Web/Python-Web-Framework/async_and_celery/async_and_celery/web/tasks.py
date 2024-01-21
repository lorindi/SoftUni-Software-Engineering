import time
import whisper

from celery import shared_task

from async_and_celery.web.models import Transcription

model = whisper.load_model('medium')


@shared_task
def transcribe_to_model(pk):
    transcription = Transcription.objects.filter(pk=pk) \
        .get()

    result = model.transcribe(
        transcription.audio.path,
        verbose=True,
        language='bg',
        fp16=False,
    )
    transcription.text = result['text']
    transcription.save()


@shared_task
def example_background_job():
    print('example_background_job started')
    time.sleep(15)
    print('example_background_job ended')

#
# # In our app
# example_background_job()
#
# # With Celery
# example_background_job.delay()
