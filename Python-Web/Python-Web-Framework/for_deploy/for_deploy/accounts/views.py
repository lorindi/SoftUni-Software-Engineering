from django.contrib.auth import views as auth_views, login
from django.contrib.auth import forms as auth_forms
from django.urls import reverse_lazy

from django.views import generic as views


class RegisterUserView(views.CreateView):
    form_class = auth_forms.UserCreationForm
    template_name = 'accounts/register.html'
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        result = super().form_valid(form)
        login(self.request, self.object)
        return result


class LoginUserView(auth_views.LoginView):
    template_name = 'accounts/login.html'
