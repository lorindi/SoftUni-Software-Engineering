from django.views import generic as views
from django.contrib.auth import mixins as auth_mixins


class IndexView(auth_mixins.LoginRequiredMixin, views.TemplateView):
    template_name = 'web/index.html'
