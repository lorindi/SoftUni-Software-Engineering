from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy


class LoginUserView(auth_views.LoginView):
    template_name = 'login.html'
    success_url = reverse_lazy('index')