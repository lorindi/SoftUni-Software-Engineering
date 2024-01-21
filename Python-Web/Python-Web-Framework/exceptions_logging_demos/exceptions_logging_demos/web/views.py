from django.contrib.auth import get_user_model
from django.http import HttpResponse
from django.shortcuts import render
from django.views import generic as views, View
import logging

logging.basicConfig(level=logging.DEBUG)

from exceptions_logging_demos.web.models import Post

UserModel = get_user_model()


def get_queryset():
    return UserModel.object \
        .filter(username='doncho')


class LoggingViewMixin(View):
    @property
    def logger(self):
        return logging.getLogger(__name__)


def index(request):
    # logger.info('Info log')
    logging.info('Info log')
    # logger.critical('Critical log')
    logging.critical('Critical log')
    posts_count = len(Post.objects.all())
    raise Exception('It does not work')
    # return HttpResponse(f'It works! Posts count: {posts_count}')
    # # Variant 1 (More pythonic):
    # try:
    #     return Post.objects.get(title='asdasd')
    # except Exception as exc:
    #     print(exc)
    #     raise
    #     # raise exc
    #
    #     # Variant 2
    # posts = Post.objects.filter(title='asdasd')
    # if len(posts) == 1:
    #     return posts[0]
    # else:
    #     pass
    #
    # raise PermissionDenied
    # raise BadRequest('Wrong time!')
    # return redirect(reverse('my_view'))


# {OPERATION}{EntityName}View
class CreatePostView(views.CreateView):
    pass


# {OPERATION}{EntityName}View

class ListPostView(views.ListView):
    pass


try:
    pass
except Exception:
    pass
except:
    pass
finally:
    pass

try:
    pass
finally:
    pass
