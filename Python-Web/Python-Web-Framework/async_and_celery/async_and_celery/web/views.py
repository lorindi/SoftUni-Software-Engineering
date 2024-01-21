from django.http import HttpResponse

import whisper
import sys

from async_and_celery.web.tasks import example_background_job, transcribe_to_model
import time


def transcribe(request, pk):
    transcribe_to_model.delay(pk)
    return HttpResponse('Starting')


def index(request):
    start = time.time()
    for _ in range(15):
        example_background_job.delay()

    end = time.time()

    return HttpResponse(f'Executed in {end - start}s')


def index_slow(request):
    start = time.time()
    for _ in range(15):
        example_background_job()
    end = time.time()

    return HttpResponse(f'Executed in {end - start}s')
