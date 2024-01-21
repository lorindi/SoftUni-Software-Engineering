import random

from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy, reverse
from django.views import generic as views
from django.contrib.auth import get_user_model, authenticate, login, logout
from django.shortcuts import render, redirect

from auth_demos.web.models import Article

UserModel = get_user_model()


@login_required
def index(request):
    suffix = random.randint(1, 1000)

    # Not a good idea:
    # UserModel.objects.create(...)

    # Good idea:
    user = UserModel.objects.create_user(
        username=f'doncho_{suffix}',
        password='1123QwER',
    )
    # print('-' * 20)
    # print(request.user)
    # # login(request, user)
    # print(request.user)
    # print('-' * 20)
    # doncho = UserModel.objects.get(username='doncho')
    doncho_1000 = UserModel.objects.get(username='doncho_1000')
    context = {
        'user': request.user,
        'permission': request.user.has_perm('auth.view_user'),
        'doncho_1000': doncho_1000.has_perm('auth.view_user'),
        'xss': '<script>alert("Hacked!")</script>',
    }

    print(Article.objects.raw('SELECT * FROM Articles WHERE Title LIKE "%{user}%"',
                              params={
                                  'user': 'Doncho'
                              }))

    return render(request, 'index.html', context)


class IndexView(views.TemplateView, LoginRequiredMixin):
    template_name = 'index.html'
    login_url = reverse_lazy('login')

    def get_context_data(self, **kwargs):
        pass


def login_user(request):
    # Authentication
    user = authenticate(
        username=f'doncho_595',
        password='1123QwER',
    )

    # Authorization
    login(request, user)  # Does `request.user = user` + other stuff

    print(f'Authenticated user: {user}')

    return redirect('index')


def logout_user(request):
    logout(request)
    return redirect('index')


'''
support@softuni.com # correct
support@sоftuni.com # cyrilic `o` 
'''