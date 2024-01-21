import datetime
from time import sleep


def sleep_middleware(get_response):
    def middleware(request, *args, **kwargs):
        sleep(3)
        return get_response(request, *args, **kwargs)

    return middleware


class ProfileMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request, *args, **kwargs):
        self._middleware(request, *args, **kwargs)
        return self.get_response(request, *args, **kwargs)

    def _middleware(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            request.profile = request.user.profile
        else:
            request.profile = None


def set_profile_middleware(get_response):
    def middleware(request, *args, **kwargs):
        if request.user.is_authenticated:
            request.profile = request.user.profile
        else:
            request.profile = None
        return get_response(request, *args, **kwargs)

    return middleware


def do_nothing_middleware(get_response):
    def middleware(request, *args, **kwargs):
        start_time = datetime.datetime.now()
        response = get_response(request, *args, **kwargs)
        end_time = datetime.datetime.now()

        print(f'Executed in {end_time - start_time} seconds')

        return response

    return middleware
